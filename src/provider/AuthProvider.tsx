import { CartItem, Product } from '@/types';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { useContext, createContext } from 'react';
import { randomUUID } from 'expo-crypto'
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';


type AuthData = {
    session: Session | null,
    loading: boolean,
}
const AuthContext = createContext<AuthData>({
    session: null,
    loading: true,
});


export default function AuthProvider({ children }: PropsWithChildren) {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const fetchSession = async () => {
            const { data, error } = await supabase.auth.getSession();
            if (error) {
                console.log(error);
            }
            setSession(data.session);
            setLoading(false);
        }
        fetchSession();

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

    }, []);

    return <AuthContext.Provider value={{ session, loading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext);
}
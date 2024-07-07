import { CartItem, Product } from '@/types';
import React, { PropsWithChildren, useState } from 'react';
import { useContext, createContext } from 'react';
import { randomUUID } from 'expo-crypto'


type CartType = {
    items: CartItem[],
    addItem: (product: Product, size: CartItem['size'], options: string) => void,
    updateQuantity: (itemId: string, amount: -1 | 1) => void,
    total: number,

}
const CartContext = createContext<CartType>({
    items: [],
    addItem: () => { },
    updateQuantity: () => { },
    total: 0,
});





const CartProvider = ({ children }: PropsWithChildren) => {
    const [items, setItems] = useState<CartItem[]>([]);




    const addItem = (product: Product, size: CartItem['size'], options?: string) => {
        const exisitingItem = items.find(
            item => item.product === product && item.size === size && item.options === options
        )
        if (exisitingItem) {
            updateQuantity(exisitingItem.id, 1);
            return;
        }
        const newItem: CartItem = {
            id: randomUUID(),
            product,
            product_id: product.id,
            size,
            quantity: 1,
            options: options || ''
        }
        setItems([newItem, ...items])
    }

    const updateQuantity = (itemId: string, amount: -1 | 1) => {
        const updatedItems = items.map(
            item => item.id === itemId ? { ...item, quantity: item.quantity + amount } : item
        ).filter(item => item.quantity > 0)
        setItems(updatedItems)
    };

    const calculatePrice = (product: Product, size: CartItem['size']) => {
        let price = product.price;
        if (size === 'S') price -= 2;
        else if (size === 'L') price += 2;
        else if (size === 'XL') price += 4;
        return price;
    };

    const total = items.reduce((sum, item) => (sum += item.quantity * calculatePrice(item.product, item.size)), 0);
    return (
        <CartContext.Provider value={{ items, addItem, updateQuantity, total }}>
            {children}
        </CartContext.Provider>
    );

};

export default CartProvider;

export const useCart = () => useContext(CartContext);
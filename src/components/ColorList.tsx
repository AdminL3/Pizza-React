import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ColorListProps {
    colors: string[];
}


const ColorList: React.FC<ColorListProps> = ({ colors }) => {
    return (
        <View style={styles.container}>
            {colors.map((color, index) => (
                <View key={index} style={[styles.box, { backgroundColor: color }]}>
                    <Text style={styles.text}>{color}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ColorList;

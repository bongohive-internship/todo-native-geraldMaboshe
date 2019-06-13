import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Header() {
    return (
        <View style={headerStyle.top}>
            <Text style={headerStyle.bottom}>Todo</Text>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    top: {
        backgroundColor: 'grey'
    },
    bottom: {
        textAlign: 'center',
        color: 'white',
        padding: 10,
        fontSize: 30

    }
})
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};
const styles = {
    buttonStyle: {
        flex: 1,
        backgroundColor: '#0277bd',
        alignSelf: 'stretch',
        borderRadius: 1,
        margin: 5,
        elevation: 2
    },
    textStyle: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '400',
        paddingTop: 8,
        paddingBottom: 8
    }
};

export default Button;
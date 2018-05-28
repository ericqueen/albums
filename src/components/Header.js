// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Making the component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};

// Styling the component
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 0,
        elevation: 6,
        position: 'relative'
    },
    textStyle: {
        fontSize: 25
    }
};

// Making component available to other parts of the app
export default Header;
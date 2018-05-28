import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>{props.children}</View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        borderColor: '#DDD',
        position: 'relative',
        justifyContent: 'flex-start',

    }
};

export default CardSection;
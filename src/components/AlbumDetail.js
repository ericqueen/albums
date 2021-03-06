import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ albums }) => {
    const { title, artist, thumbnail_image, image, url } = albums;

    const { headerContent, thumbnailStyle,
    thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{uri:thumbnail_image}}/>
                </View>
                <View style={headerContent}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri: image }}/>
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    BUY NOW
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContent: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 5
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 5,
        paddingBottom: 5
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
        margin: 5
    }
};

export default AlbumDetail;
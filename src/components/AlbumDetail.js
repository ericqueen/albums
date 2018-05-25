import React from 'react';
import { Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <Image style={{width: 50, height: 50}} marginRight={5} source={{uri:props.albums.thumbnail_image}} />
                <Text>{props.albums.artist}</Text>
            </CardSection>
            <CardSection>
                <Text>{props.albums.title}</Text>
            </CardSection>
            <CardSection>
                <Image style={{width: 300, height: 300}} marginRight={5} source={{uri:props.albums.image}} />
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;
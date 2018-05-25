import React, { Component } from 'react';
import { View } from 'react-native';
import axios from'axios'; // Library for handling api calls
import AlbumDetail from './AlbumDetail';

// Creating the AlbumList component and fetching the data with setting the state
class AlbumList extends Component {
    state = { albums: [] };
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }

// Helper method to map through the array returned from the Get request
renderAlbums() {
    return this.state.albums.map(album =>
    <AlbumDetail key={album.title} albums={album} />
    );
}

// Rendering the returned albums list using the renderAlbums() method
    render() {
    console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

// Returning the component to be rendered in the app
export default AlbumList;
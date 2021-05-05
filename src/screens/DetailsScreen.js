import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import mjapi from '../api/mjapi';

const DetailsScreen = ({ navigation }) => {
    const name = navigation.getParam('name');
    const album = navigation.getParam('album');
    const price = navigation.getParam('price');
    const image_url = navigation.getParam('image_url');
    const country = navigation.getParam('country');
    const wrapper = navigation.getParam('wrapper');

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{album}</Text>
            <Image style={styles.image} source={{ uri: image_url }} />
            <Text style={styles.text}>Artist: {name}</Text>
            <Text style={styles.text}>Price: {price} dollars</Text>
            <Text style={styles.text}>Country: {country}</Text>
            <Text style={styles.text}>Wrapper Type: {wrapper}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 250,
        margin: 5
    },
    text: {
        fontSize: 20
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    container: {
        padding: 10
    }
});

export default DetailsScreen;
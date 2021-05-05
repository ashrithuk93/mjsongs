import React, { useState,
                useEffect } from 'react';
import { View,
         Text,
         StyleSheet,
         TouchableOpacity,
         FlatList,
         Image } from 'react-native';
import mjapi from '../api/mjapi';

const AlbumsScreen = ({ navigation }) => {
    const [ info, setInfo ] = useState([]);

    const getData = async() => {
        try {
            const response = await mjapi.get('/search?', {
                params: {
                    term: 'Michael+jackson',
                    country: 'US',
                    limit: 50
                }
            })
            setInfo(response.data.results)
        } catch (err) {
            console.log('error parsing')
        }
    }

    useEffect( () => {
        getData()
    }, [])

    return (
        <View>
            
        <Text style={styles.note}>Note: results limit is set to 50</Text>

        <FlatList
            data={info}
            keyExtractor={(item) => item.previewUrl}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Detail', {
                            name: item.artistName,
                            album: item.collectionName,
                            price: item.collectionPrice,
                            image_url: item.artworkUrl100,
                            country: item.country,
                            wrapper: item.wrapperType
                        })}
                    >
                        <View style={styles.container}>
                            <Text style={styles.text}>{item.collectionName}</Text>
                            <Image style={styles.image} source={{ uri: item.artworkUrl30 }} />
                        </View>
                    </TouchableOpacity>
                );
            }}
        />

        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        marginBottom: 5
    },
    container: {
        margin: 10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    note: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 10
    }
});

export default AlbumsScreen;
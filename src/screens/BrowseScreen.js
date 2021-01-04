import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, FlatList } from 'react-native';

import ItemCard from '../components/ItemCard';
import { fetchData, deletePet } from '../database/petDatabase.utils';

function BrowseScreen({ navigation }) {
    const [data, onChangeData] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchData().then((result) => {
                onChangeData(result);
                // console.log(data);
            });
        });
        return unsubscribe;
    }, [navigation]);

    const renderItem = ({ item }) => (
        <ItemCard
            title={item.title}
            age={item.age}
            breed={item.breed}
            onPressEdit={() => { navigation.navigate('Edit Screen', { petData: item }) }}
            onPressDelete={() => {
                deletePet(item.id);
                fetchData().then((result) => {
                    onChangeData(result);
                    // console.log(data);
                });
            }}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <StatusBar
                barStyle="light-content"
                translucent={false}
                backgroundColor="#222130"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222130',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 18,
    },
});

export default BrowseScreen;
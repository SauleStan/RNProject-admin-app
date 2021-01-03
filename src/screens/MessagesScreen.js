import React, { useState } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, FlatList } from 'react-native';

import MessageCard from '../components/MessageCard';

const DATA = [
    {
        fName: "Name",
        lName: "Surname",
        phone: "123",
        email: "email",
        other: "",
        pet: {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Bunny',
            age: "Adult",
            breed: "Hwite"
        }
    },
    {
        fName: "Name1",
        lName: "Surname1",
        phone: "1234",
        email: "email1",
        other: "",
        pet: {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Sqwrl',
            age: "Baby",
            breed: "Chestnut"
        }
    },
    {
        fName: "Name2",
        lName: "Surname2",
        phone: "12345",
        email: "email2",
        other: "",
        pet: {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Bunny 2',
            age: "Adult",
            breed: "Blakk"
        }
    },
];

function MessagesScreen({ navigation }) {

    const renderItem = ({ item }) => (
        <MessageCard
            fName={item.fName}
            lName={item.lName}
            pet={item.pet.title}
            onPress={()=> navigation.navigate('Message Details')}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
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
    },
});

export default MessagesScreen;
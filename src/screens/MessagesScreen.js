import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, FlatList } from 'react-native';

import MessageCard from '../components/MessageCard';
import { fetchMessageData } from '../database/messageDatabase.utils';

function MessagesScreen({ navigation }) {
    const [data, onChangeData] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchMessageData().then((result) => {
                onChangeData(result);
                // console.log(data);
            });
        });
        return unsubscribe;
    }, [navigation]);

    const renderItem = ({ item }) => (
        <MessageCard
            fName={item.fName}
            lName={item.lName}
            pet={item.pet.title}
            onPress={() => navigation.navigate('Message Details', {
                message: item
            })}
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
    },
});

export default MessagesScreen;
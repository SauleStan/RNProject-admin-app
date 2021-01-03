import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TextInput } from 'react-native';

import ButtonComponent from '../components/ButtonComponent';

function AddScreen() {
    const [title, onChangeTitleText] = useState();
    const [age, onChangeAgeText] = useState();
    const [breed, onChangeBreed] = useState();
    const [image, onChangeImage] = useState();

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                translucent={false}
                backgroundColor="#222130"
            />
            <Text style={styles.text}>Add pet</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor='#878787'
                onChangeText={text => onChangeTitleText(text)}
                value={title}
            />
            <TextInput
                style={styles.input}
                placeholder="Age"
                placeholderTextColor='#878787'
                onChangeText={text => onChangeAgeText(text)}
                value={age}
            />
            <TextInput
                style={styles.input}
                placeholder="Breed"
                placeholderTextColor='#878787'
                onChangeText={text => onChangeBreed(text)}
                value={breed}
            />
            <TextInput
                style={styles.input}
                placeholder="Image url"
                placeholderTextColor='#878787'
                onChangeText={text => onChangeImage(text)}
                value={image}
            />
            <ButtonComponent
                buttonName="CONFIRM"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222130',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    input: {
        color: 'white',
        width: '80%',
        height: 40,
        borderRightColor: 'rgba(235, 25, 110, 0.7)',
        borderLeftColor: '#58cdd1',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 10,
    },
    text: {
        color: 'white',
        fontSize: 24,
        margin: 10,
        textAlign: 'left',
    },
    textArea: {
        width: '80%',
        color: 'white',
        borderRightColor: 'rgba(235, 25, 110, 0.7)',
        borderLeftColor: '#58cdd1',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        height: 150,
    }
});

export default AddScreen;
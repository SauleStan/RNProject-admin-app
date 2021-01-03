import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ButtonComponent from './ButtonComponent';

function ItemCard(props) {
    return (
        <View style={styles.container}>
            {/* TODO: Make an image display instead of text */}
            <Text style={styles.image}></Text>
            {/*  */}

            <Text style={styles.titleText}>{props.title}</Text>
            <Text style={styles.descriptionText}>{props.age} • {props.breed}</Text>
            <View style={styles.buttonArea}>
                <ButtonComponent buttonName="EDIT" />
                <ButtonComponent buttonName="X" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222831',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: 'white',
        width: '95%',
        height: 350,
        marginTop: 10,
        marginBottom: 10,
        borderRightColor: 'rgba(235, 25, 110, 0.7)',
        borderLeftColor: '#58cdd1',
        borderWidth: 5,
    },
    image: {
        marginTop: 15,
        height: 160,
        width: '80%',
        borderRadius: 15,
        borderWidth: 5,
        // borderColor: '#58cdd1',
        backgroundColor: "white"
    },
    titleText: {
        fontSize: 24,
        color: 'white',
    },
    descriptionText: {
        fontSize: 18,
        color: 'grey'
    },
    buttonArea: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between'
    }
});

export default ItemCard;
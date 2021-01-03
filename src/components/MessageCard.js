import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ButtonComponent from './ButtonComponent';

function MessageCard(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{props.fName} {props.lName}</Text>
            <Text style={styles.descriptionText}>About: {props.pet}</Text>
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
        alignItems: 'flex-start',
        color: 'white',
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
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
    }

});

export default MessageCard;
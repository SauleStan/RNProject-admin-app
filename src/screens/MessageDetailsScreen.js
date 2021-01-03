import React, { useState } from 'react';
import { StyleSheet, StatusBar, SafeAreaView,  } from 'react-native';

function MessageDetailsScreen() {

    return (
        <SafeAreaView style={styles.container}>
            <Text>Message Details</Text>
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

export default MessageDetailsScreen;
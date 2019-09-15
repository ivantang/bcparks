import React from 'react';
import {
    View,
    StyleSheet,
    Text,
  } from 'react-native';

export function Header(props) {
    const { regularText, boldText, children } = props;
    return (
        <View style={styles.container}>
            <View style={styles.dash}>
                { children }
            </View>
            <View style={styles.tab}>
                <View style={styles.title}>
                    <Text style={styles.regular}>{regularText}</Text>
                    <Text style={styles.bold}>{boldText}</Text>
                </View>
            </View>
        </View>
    );
}

// https://stackoverflow.com/questions/34704882/inline-elements-implementation

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dash: {
        flex: 1,
        backgroundColor: 'red'
    },
    tab: {
        flex: 1,
        top: -60,
        backgroundColor: 'white',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    },
    title: {
        flexDirection: 'row',
        margin: 40,
        // fontFamily: 'roboto',
        // fontSize: 50,
        // fontSize: 29,

    },
    regular: {
        color: '#6F6F6F',
        fontSize: 29,
        fontFamily: 'roboto-regular',
    },
    bold: {
        color: '#6F6F6F',
        fontSize: 29,
        fontFamily: 'roboto-bold',
    }
  });

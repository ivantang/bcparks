import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
  } from 'react-native';

import logo from '../assets/images/LOGO.png';

export function LoginHeader() {
    return <Header backgroundColor="#A7C62E" dashboard={<Image style={styles.image} source={logo} />} /> /* login */
    // return <Header backgroundColor="#F8F8F8" regularText="Select a " boldText="Quest" /> /* landing */
    // return <Header backgroundColor="#F8F8F8" regularText="Select a " boldText="Task"  /> /* helpOut */
    // return <Header backgroundColor="#A35EC4" regularText="Projects to " boldText="Volunteer" /> /* volunteer */
    // return <Header backgroundColor="#A35EC4" /> /* volunteerDetail */
    // return <Header backgroundColor="#3EC1F0" regularText="High " boldText="Scores"  /> /* leaderBoard */
    // return <Header backgroundColor="#66B13A" regularText="Projects to " boldText="Donate" /> /* donate */
    // return <Header backgroundColor="#66B13A" /> /* donateDetail */
    return <Header backgroundColor="#DAD85D" regularText="Report an " boldText="Issue"  /> /* issue */
}

export function Header(props) {
    const { backgroundColor, dashboard, regularText, boldText } = props;

    return (
        <View style={styles.container}>
            <View style={{backgroundColor: backgroundColor, ...styles.dashboard}}>
                {dashboard}
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

const styles = StyleSheet.create({
    container: {
        // flexGrow: 1,
    },
    dashboard: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tab: {
        flex: 1,
        top: -60,
        backgroundColor: 'white',
        borderTopLeftRadius: 60, 
        borderTopRightRadius: 60,
    },
    image:{
        flex: 1,
        width: 327,
        height: 105,
        resizeMode: 'contain',
        // borderWidth: 1,
        // borderColor: 'black',
    },
    title: {
        flexDirection: 'row',
        margin: 40,
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

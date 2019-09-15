import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
  } from 'react-native';

import logo from '../assets/images/LOGO.png';
import username from '../assets/images/Username.png';
import leaderboard from '../assets/images/Leaderboard.png';


export function TestHeader() {
    return LandingHeader();
}

export function LoginHeader() {
    return <Header backgroundColor="#A7C62E" dashboard={<LoginDashboard />} /> /* login */
}

export function LandingHeader() {
    return <Header backgroundColor="#F8F8F8" dashboard={<WelcomeDashboard />} regularText="Select a " boldText="Quest" /> /* landing */
}

export function HelpOutHeader() {
    return <Header backgroundColor="#F8F8F8" dashboard={<WelcomeDashboard />} regularText="Select a " boldText="Task"  /> /* helpOut */
}

export function VolunteerHeader() {
    return <Header backgroundColor="#A35EC4" dashboard={<ListDashboard />} regularText="Projects to " boldText="Volunteer" /> /* volunteer */
}

export function VolunteerDetailHeader() {
    return <Header backgroundColor="#A35EC4" dashboard={<DetailDashboard />}  /> /* volunteerDetail */
}

export function LeaderBoardHeader() {
    return <Header backgroundColor="#3EC1F0" dashboard={<LeaderBoardDashboard />} regularText="High " boldText="Scores"  /> /* leaderBoard */
}

export function DonateHeader() {
    return <Header backgroundColor="#66B13A" dashboard={<ListDashboard />} regularText="Projects to " boldText="Donate" /> /* donate */
}

export function DonateDetailHeader() {
    return <Header backgroundColor="#66B13A" dashboard={<DetailDashboard />}  /> /* donateDetail */
}

export function IssueHeader() {
return <Header backgroundColor="#DAD85D" dashboard={<IssueDashboard />} regularText="Report an " boldText="Issue"  /> /* issue */
}





export function LoginDashboard() {
    return <Image style={styles.loginImage} source={logo} />
}

export function WelcomeDashboard() {
    return (
        <View>
            <Image source={leaderboard} style={styles.leaderboard} />
            <View style={styles.profile}>
              <WelcomeTitle regularText="Welcome, " boldText="Username" />
              <Image source={username} />
            </View>
        </View>
    );
}

// TODO
export function ListDashboard() {
    //https://xd.adobe.com/spec/ae44f48a-4c0e-4219-439f-32cd25280a78-d875/screen/9695284f-6aa6-4061-a792-33d93724d67b/Help-Out-Volunteer-Positions
    return <Image style={styles.loginImage} source={logo} />
}

// TODO
export function DetailDashBoard() {
    //https://xd.adobe.com/spec/ae44f48a-4c0e-4219-439f-32cd25280a78-d875/screen/ed2f46f7-8981-475d-ab47-77b2c579d661/Help-Out-Project-Volunteer
    return <Image style={styles.loginImage} source={logo} />
}

// TODO
export function LeaderBoardDashboard() {
    //https://xd.adobe.com/spec/ae44f48a-4c0e-4219-439f-32cd25280a78-d875/screen/dab8a8c1-1a74-4fd1-bab7-e2d06c02d747/Leadearboard
    return <Image style={styles.loginImage} source={logo} />
}

// TODO
export function IssueDashboard() {
    // https://xd.adobe.com/spec/ae44f48a-4c0e-4219-439f-32cd25280a78-d875/screen/1b250a3d-fa30-430e-8adf-c41ac350e3df/Report-an-issue
    return <Image style={styles.loginImage} source={logo} />
}


export function HeaderTitle(props) {
    const { regularText, boldText } = props;
    return (
        <View style={styles.headerTitle}>
            <Text style={styles.regular}>{regularText}</Text>
            <Text style={styles.bold}>{boldText}</Text>
        </View>
    );
}

export function WelcomeTitle(props) {
    const { regularText, boldText } = props;
    return (
        <View style={styles.welcomeTitle}>
            <Text style={styles.regular}>{regularText}</Text>
            <Text style={styles.bold}>{boldText}</Text>
        </View>
    );
}

export function Header(props) {
    const { backgroundColor, dashboard } = props;

    return (
        <View style={styles.container}>
            <View style={{backgroundColor: backgroundColor, ...styles.dashboard}}>
                {dashboard}
            </View>
            <View style={styles.tab}>
                <HeaderTitle {...props} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flexGrow: 1,
    },
    leaderboard: {
        alignSelf: 'stretch',
        position: 'absolute',
    },
    dashboard: {
        paddingTop: 33,
        paddingBottom: 80,
    },
    profile: {
        paddingTop: 40,
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
    loginImage:{
        flex: 1,
        width: 327,
        height: 105,
        resizeMode: 'contain',
        // borderWidth: 1,
        // borderColor: 'black',
    },
    headerTitle: {
        flexDirection: 'row',
        margin: 40,
    },
    welcomeTitle: {
        flexDirection: 'row',
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

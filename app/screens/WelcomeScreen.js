import React from "react"
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"
function WelcomeScreen() {
    return (
        // BackgroundImage
        <ImageBackground
            style={styles.background}
            source={require("../assets/welcome2.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                <Text>Giving Old Books a New Chapter</Text>
            </View>
            {/*LoginButton */}
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgorundColor: '#fc5c65'
    },
    logo: {
        width: 160,
        height: 180,

    },
    logoContainer: {
        position: 'absolute',
        top: 0,
        alignItems: 'centerdd'
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgorundColor: '#4ecdc4'
    }
})













































export default WelcomeScreen

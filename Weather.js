import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from "prop-types";


const watherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subtitle: "For more info look outside",
        icon: "wather-rainy"
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Sunny is good",
        subtitle: "GO get outside",
        icon: "weather-sunny"
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstrom in the house",
        subtitle: "Actually, outside of the house",
        icon: "weather-lightning"
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, fucking boring",
        icon: "weather-cloudy"
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no",
        icon: "weather-snowy"
    },
    Haze: {
        colors: ["#B9F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "is like rain, but gay",
        icon: "weather-hail"
    },
    Drizzle: {
        colors: ["#B9F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "is like rain, but gay",
        icon: "weather-hail"
    }
}

function Weather({weatherName, temp}) {
    return (
        <LinearGradient
          colors={watherCases[weatherName].colors} 
          style={styles.container}>
          <View style={styles.upper}>
            <MaterialCommunityIcons color="white" size={144} name={watherCases[weatherName].icon} />
            <Text style={styles.temp}>{temp}</Text>
          </View>
          <View style={styles.lower}>
            <Text style={styles.title}>{watherCases[weatherName].title}</Text>
            <Text style={styles.subtitle}>{watherCases[weatherName].subtitle}</Text>
          </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }
});
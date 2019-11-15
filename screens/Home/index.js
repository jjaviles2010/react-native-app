import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Seasons from './components/seasons';

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default class Home extends Component {

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
    }

    render() {
        return (
            <View style= { style.container }>
                <Seasons teste="oi" />
            </View>
        );
    }
}
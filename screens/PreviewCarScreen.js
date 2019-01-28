import React from 'react';
import {StyleSheet, View, Image, ToastAndroid} from "react-native";
import CustomTextView from "../views/CustomTextView";

export default class PreviewCarScreen extends React.Component {
    static navigationOptions = {
        title: "Preview Car",
    };

    static toast(text) {
        ToastAndroid.showWithGravity(
            text,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }

    getCarById(id) {
        return fetch('http://class-music.herokuapp.com/car/{id}', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'id': id
            },
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.status === 200) {
                    PreviewCarScreen.toast(response.status);
                } else if (response.status === 404) {
                    PreviewCarScreen.toast(response.status);
                } else {
                    PreviewCarScreen.toast(response.status);
                }
            })
            .catch((error) => {
            });
    }

    render() {
        const {navigation} = this.props;
        const itemTitle = navigation.getParam('itemTitle', null);
        const itemPhoto = navigation.getParam('itemPhoto', null);

        return (
            <View style={styles.container}>
                <Image
                    style={{width: 100, height: 100}}
                    source={{uri: itemPhoto}}
                />
                <CustomTextView
                    text={itemTitle}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
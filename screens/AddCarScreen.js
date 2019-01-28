import React from 'react';
import {StyleSheet, ToastAndroid, View} from "react-native";
import Form from "../views/Form";
import CustomButton from "../views/CustomButton";
import auth from "../utils/auth";

export default class AddCarScreen extends React.Component {
    static navigationOptions = {
        title: "Adding car",
    };

    constructor(props) {
        super(props);
        this.photo = null;
        this.name = null;
    }

    sendPutCar() {
        const {navigate} = this.props.navigation;
        return fetch('http://class-music.herokuapp.com/save/car', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                photo: this.photo.state.data,
                name: this.name.state.data,
            })
        })
            .then((res) => res.json())
            .then((response) => {
                ToastAndroid.showWithGravity(
                    'Error : ' + response.status,
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                );
            })
            .catch((error) => {
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Form text={"Name:"}
                      ref={(ref) => this.photo = ref}
                />
                <Form text={"Image url:"}
                      ref={(ref) => this.name = ref}
                />
                <CustomButton
                    text={"Save"}
                    onPress={() => {
                        this.sendPutCar()
                    }}
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
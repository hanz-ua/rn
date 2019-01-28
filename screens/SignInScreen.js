import React from 'react';
import {StyleSheet, View, ToastAndroid} from 'react-native';
import CustomButton from "../views/CustomButton";
import Form from "../views/Form"
import {auth} from '../utils/auth';

export default class SignInScreen extends React.Component {
    static navigationOptions = {
        title: "SignIn",
    };

    constructor(props) {
        super(props);
        this.phone = null;
        this.password = null;
    }

    loginUser() {
        const {navigate} = this.props.navigation;
        return fetch('http://class-music.herokuapp.com/auth',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    // 'phone': '+380990337452',
                    // 'pass': '123456'
                },


                body: JSON.stringify({
                        phone: '+380990337452',
                    //     // this.phone.state.data,
                        pass: '123456'
                        // this.password.state.data
                })

            })
            .then((res) => res.json())
            .then((response) => {
                    if (response.status === 200) {
                        auth.saveToken(response.token);
                        navigate('MenuScreen', {token: response.token});
                    } else {
                        auth.saveToken("4Bnaw4LSYoUnUnax52xcNHZ9X1fVDb7Gfet6fH16l3sQSeoIN7kUSsWw4lyU05PqxL95pA43yQmAy8IOz34hR5yI5V1pKdMXb0x7WOfzn1Bofqx5RXB6kWhjmjZK36ixmRCpUgI8NpZqmpIvabxXKO4E8O56wE5Vpe7LpfHECvS3HJ4lQuin2NsifXZaC597mVGJd0BFj4nddjj0FgbUDjh7QX3AGdpKweoKKGZlnBwe1nr7SPvchnnTq95m4Atd");
                        navigate('MenuScreen', {token: "4Bnaw4LSYoUnUnax52xcNHZ9X1fVDb7Gfet6fH16l3sQSeoIN7kUSsWw4lyU05PqxL95pA43yQmAy8IOz34hR5yI5V1pKdMXb0x7WOfzn1Bofqx5RXB6kWhjmjZK36ixmRCpUgI8NpZqmpIvabxXKO4E8O56wE5Vpe7LpfHECvS3HJ4lQuin2NsifXZaC597mVGJd0BFj4nddjj0FgbUDjh7QX3AGdpKweoKKGZlnBwe1nr7SPvchnnTq95m4Atd"});

                        ToastAndroid.showWithGravity(
                            'Error : ' + response.status,
                            ToastAndroid.SHORT,
                            ToastAndroid.CENTER
                        );
                    }
                }
            )
            .catch((error) => {
            });
    };

    render() {
        return (
            <View style={styles.container}>
                <Form text={"Phone:"}
                      ref={(ref) => this.phone = ref}
                />
                <Form text={"Password:"}
                      ref={(ref) => this.password = ref}
                />
                <CustomButton
                    text={"Log In"}
                    onPress={() => {
                        this.loginUser();
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
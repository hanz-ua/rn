import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';


class CustomButton extends React.Component {
    render() {
        const {text, onPress} = this.props;
        return (
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                    onPress();
                }}>
                <Text style={styles.textStyle}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center'
    },

    buttonStyle: {
        padding: 10,
        backgroundColor: '#202646',
        borderRadius: 5
    }
});


export default CustomButton;

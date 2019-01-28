import React from 'react';
import {Text, StyleSheet} from 'react-native';

class CustomTextView extends React.Component {

    render() {
        const {text} = this.props;
        return (
            <Text style={styles.titleText}>
                {text}
            </Text>
        );
    }
}

export default CustomTextView;

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
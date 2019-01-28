import React from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
        this.focus = this.focus.bind(this);
    }

    focus() {
        this.textInput.focus()
    }

    render() {
        const {text} = this.props;
        return (
            <View>
                <TextInput
                    style={{height: 40, width: 200}}
                    placeholder={text}
                    ref={input => this.textInput = input}
                    onChangeText={(text) => this.setState({data: text})}
                    value={this.state.data}
                />
            </View>
        );
    }
}

export default Form;
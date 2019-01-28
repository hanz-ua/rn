import React from 'react';
import {FlatList, View, StyleSheet, ActivityIndicator} from 'react-native'
import {ListItem} from 'react-native-elements';
import CustomButton from "../views/CustomButton";

export default class MenuScreen extends React.Component {
    static navigationOptions = {
        title: "Menu",
    };

    constructor(props) {
        super(props);
        this.state = {
            autoArray: [],
            loading: false,
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        const {navigation} = this.props;
        const token = navigation.getParam('token', 'some default value');
        return fetch('http://class-music.herokuapp.com/cars', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'token': token,
            }
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    autoArray: res,
                    loading: false,
                });
            })
            .catch((error) => {
            });
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator/>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.autoArray}
                    renderItem={({item}) => (
                        <ListItem
                            title={item.name}
                            leftAvatar={{
                                source: {
                                    uri: item.photo,
                                },
                            }}
                            onPress={() => this.props.navigation.navigate('PreviewCarScreen', {
                                itemTitle: item.name,
                                itemPhoto: item.photo
                            })}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
                <CustomButton
                    text={"Add Car"}
                    onPress={() => {
                        this.sendCar();
                    }}
                />
            </View>
        );
    }

    sendCar() {
        const {navigate} = this.props.navigation;
        navigate('AddCarScreen')
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
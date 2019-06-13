import React, { Component } from 'react';
import { View, Text, CheckBox, Button, StyleSheet } from 'react-native';
//import { CheckBox } from 'react-native-elements';

export default class Item extends Component {
    getStyle = () => {
        return {
            color: this.props.value.done ? "green" : "red",
            fontSize: 15,
            margin: 10
        }
    }

    render() {
        const { id, title } = this.props.value;
        return (

            <View style={styles.myView}>
                <View style={styles.otherView}>
                    <CheckBox onValueChange={this.props.markDone.bind(this, id)} />
                    <Text style={this.getStyle()}>
                        {title}
                    </Text>
                </View>
                <View style={styles.btnView}>
                    <Button title="Remove" onPress={this.props.del.bind(this, id)} />
                </View >
            </View >
        )
    }
}

const styles = StyleSheet.create({
    myView: {
        flexDirection: 'row'

    },
    otherView: {
        width: 250,
        flexDirection: 'row'
    },
    btnView: {
        padding: 5
    }
})



import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

export default class AddTodo extends Component {
    state = {
        title: '',
        //noteArray:[]
    }

    //onAdd = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });

    }
    render() {
        return (
            <View style={{ flexDirection: "row" }}>
                <TextInput style={styles.inputStyle} placeholder="Add a todo item" name="title"
                    value={this.state.title} onChangeText={(title) => this.setState({ title })} />
                <View style={styles.btnStyle}>
                    <Button title="add" onPress={this.onSubmit} />
                </View>
            </View >

        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        width: 250,
        height: 50

    },
    btnStyle: {
        padding: 5


    }
});
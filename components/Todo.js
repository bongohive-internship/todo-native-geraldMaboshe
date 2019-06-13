import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Item from './Item';


export default class Todo extends Component {
    render() {
        return this.props.value.map((list) => (
            <View>
                <Item value={list} key={list.id} markDone={this.props.markDone} del={this.props.del} />
            </View>
        ));
    }

}

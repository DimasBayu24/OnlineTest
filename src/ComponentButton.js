import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        style={this.props.style}
        onPress={() => this.props.nav(this.props.destination)}>
        <Text>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

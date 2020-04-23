import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default class AnswerScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <StatusBar
          barStyle="pink-content"
          hidden={false}
          backgroundColor="#f8eeee"
          translucent={true}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
          style={style.button}>
          <Text>Question no. 3</Text>
          <Text>What is relationship between React and React Native?</Text>
          <Text style={{marginTop: '5%'}}>Answer:</Text>
          <Text>{`React and React Native both developed by facebook.
While React used HTML for app rendering, React Native used components tags similar and equivalents with HTML.
React Native also uses React as its JavaScript Library, almost all of it.
Both React and React Native are component based for the use of their design and logic.`}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8eeee',
  },
  button: {
    width: '90%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

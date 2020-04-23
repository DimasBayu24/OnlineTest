import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default class AnswerScreen2 extends Component {
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
          <Text>Question no. 4</Text>
          <Text>
            Why do we use "Stylesheet.create"? What are the tradeoffs with this
            approach?
          </Text>
          <Text>Answer:</Text>
          <Text>{`Stylsheet.create is use for moving inline styles in react native tags away from render function.
It makes the  code easier to understand, neat and clean.
I think the tradeoffs with this approach is not much, it kinda hard to look for style if we put it away from render function.
But it depends on how we name the style so, it makes  easier even if we put  it  away from the tags.`}</Text>
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

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default class ThankScreen extends Component {
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
          <Text>Thank You For the Opportunity</Text>
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
    width: '50%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

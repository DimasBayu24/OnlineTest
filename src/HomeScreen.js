import React, {Component} from 'react';
import {View, StyleSheet, StatusBar, Text, ScrollView} from 'react-native';
import Button from './ComponentButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SaltHomeScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <StatusBar
          barStyle="pink-content"
          hidden={false}
          backgroundColor="#b9ebcc"
          translucent={true}
        />
        <View style={style.header}>
          <Text style={style.textheader}>Salt</Text>

          <Icon name="bell" size={25} color={'#d7385e'} />
        </View>
        <Text style={style.textTitle}>Salt Test</Text>
        <View style={style.flexContainer}>
          <Button
            style={style.button}
            title={'Answer No.3'}
            nav={this.props.navigation.navigate}
            destination={'Answer'}
          />
          <Button
            style={style.button}
            title={'Salt'}
            nav={this.props.navigation.navigate}
            destination={'Thank'}
          />
          <Button
            style={style.button}
            title={'Answer No.4'}
            nav={this.props.navigation.navigate}
            destination={'Answer2'}
          />
        </View>
        <Text style={style.example}>Flex and Scrollview Example</Text>
        <View style={style.scrollBar}>
          <ScrollView horizontal={true}>
            <Text style={style.exampleText}>Flex Example</Text>
            <Text style={style.exampleText}>Flex Example</Text>
            <Text style={style.exampleText}>Flex Example</Text>
            <Text style={style.exampleText}>Flex Example</Text>
          </ScrollView>
        </View>
        <Text style={style.example}>Flex Wrap Example</Text>
        <View style={style.flexWrap}>
          <Text style={style.wrapText}>wrap 1</Text>
          <Text style={style.wrapText}>wrap 2</Text>
          <Text style={style.wrapText}>wrap 3</Text>
          <Text style={style.wrapText}>wrap 4</Text>
          <Text style={style.wrapText}>wrap 5</Text>
          <Text style={style.wrapText}>wrap 6</Text>
          <Text style={style.wrapText}>wrap 7</Text>
          <Text style={style.wrapText}>wrap 8</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8eeee',
  },
  header: {
    flexDirection: 'row',
    marginTop: '6%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    backgroundColor: '#b9ebcc',
    paddingVertical: '2%',
  },
  textheader: {
    fontSize: 20,
    color: '#d7385e',
  },
  textTitle: {
    marginTop: '5%',
    fontSize: 50,
    color: '#d7385e',
    alignSelf: 'center',
  },
  flexContainer: {
    marginTop: '10%',
    flexDirection: 'row',
    height: '15%',
    justifyContent: 'space-around',
  },
  button: {
    height: '100%',
    backgroundColor: '#f78259',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: '30%',
  },
  scrollBar: {
    height: '7%',
  },
  example: {
    marginLeft: '5%',
    marginTop: '8%',
    paddingBottom: '2%',
  },
  exampleText: {
    backgroundColor: '#b9ebcc',
    paddingHorizontal: 30,
    alignSelf: 'center',
    paddingVertical: 50,
  },
  flexWrap: {
    width: '90%',
    height: '30%',
    backgroundColor: 'white',
    elevation: 2,
    marginHorizontal: '5%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  wrapText: {
    width: '25%',
    height: '50%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

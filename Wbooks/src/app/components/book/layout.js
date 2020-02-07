import React, {Component} from 'react'
import {
  Image,
  View,
  Text,
} from 'react-native';

class Book extends Component {
  render() {
    return (
    <View>
      <Image src = {this.props.cover}/>
      <Text>{this.props.title}</Text>
      <Text>{this.props.author}</Text>
    </View>
    );
  }
};

export default Book;
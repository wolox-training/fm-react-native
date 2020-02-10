import React, {Component} from 'react'
import {
  Image,
  View,
  Text,
} from 'react-native';
import styles from './styles.js';
class Book extends Component {
  render() {
    return (
    <View style = {styles.bookContainer }>
      <Image source={{uri: this.props.image_url}} style = {styles.cover}/>
      <View style = {styles.descriptionContainer} >
        <Text style = {styles.title}>{this.props.title}</Text>
        <Text style = {styles.author}>{this.props.author}</Text>
      </View>
    </View>
    );
  }
};

export default Book;
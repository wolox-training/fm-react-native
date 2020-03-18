import React, { Component } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NavigationActions from '../../../redux/navigationOptions/actions';

import styles from './styles';

const Icons = {
  Search: () => require('./assets/ic_search.png'),
  Notifications: () => require('./assets/ic_notifications.png'),
  Back: () => require('./assets/ic_back.png'),
  Logout: () => require('./assets/ic_logout.png')
};

class CustomHeaderContainer extends Component {
  handleLogOut = () => {
    const { logOut } = this.props;
    logOut();
  };

  handleNotifications = () => {
    // TODO notifications button press
  };

  render() {
    const { title, leftButton, rightButton } = this.props;

    return (
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={require('./assets/bc_nav_bar.png')} resizeMode="cover">
          {leftButton ? (
            <TouchableOpacity
              onPress={leftButton === 'Logout' ? this.handleLogOut : this.handleNotifications}
            >
              <Image style={styles.leftButton} source={Icons[leftButton]()} />
            </TouchableOpacity>
          ) : (
            <View style={styles.leftButton} />
          )}
          <Text style={styles.title}>{title}</Text>
          {rightButton ? (
            <TouchableOpacity>
              <Image style={styles.rightButton} source={Icons[rightButton]()} />
            </TouchableOpacity>
          ) : (
            <View style={styles.rightButton} />
          )}
        </ImageBackground>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => dispatch(NavigationActions.logOut())
  };
}

CustomHeaderContainer.propTypes = {
  leftButton: PropTypes.string,
  logOut: PropTypes.func,
  rightButton: PropTypes.string,
  title: PropTypes.string
};

export default connect(mapDispatchToProps)(CustomHeaderContainer);

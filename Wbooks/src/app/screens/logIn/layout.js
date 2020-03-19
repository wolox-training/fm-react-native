import React from 'react';
import { TextInput, Button, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

import { white } from '../../../constants/colors';
import background from '../../assets/bc_inicio.png';

import styles from './styles';

function LogInScreen({ onHandleChange, onHandleBlur, onHandleSubmit, values }) {
  return (
    <ImageBackground style={styles.logInContainer} source={background}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onHandleChange('email')}
        onBlur={onHandleBlur('email')}
        value={values.email}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onHandleChange('password')}
        onBlur={onHandleBlur('password')}
        value={values.password}
      />
      <Button color={white} onPress={onHandleSubmit} title="LOG IN" />
    </ImageBackground>
  );
}

LogInScreen.propTypes = {
  values: PropTypes.objectOf({ email: String, password: String }),
  onHandleBlur: PropTypes.func,
  onHandleChange: PropTypes.func,
  onHandleSubmit: PropTypes.func
};
export default LogInScreen;

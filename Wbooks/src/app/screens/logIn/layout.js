import React from 'react';
import { TextInput, Button, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

import { white } from '../../../constants/colors';

import styles from './styles';

function LogInScreen({ handleChange, handleBlur, handleSubmit, values }) {
  return (
    <ImageBackground style={styles.logInContainer} source={require('./../../assets/bc_inicio.png')}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
      />
      <Button color={white} onPress={handleSubmit} title="LOG IN" />
    </ImageBackground>
  );
}

LogInScreen.propTypes = {
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  values: PropTypes.objectOf({ email: String, password: String })
};
export default LogInScreen;

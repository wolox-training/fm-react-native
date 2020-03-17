import React from 'react';
import { View, TextInput, Button, Text, ImageBackground } from 'react-native';
import { Formik } from 'formik';

import { white } from '../../../constants/colors';

import styles from './styles';

function LogInScreen({ navigation }) {
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={values => navigation.navigate('Home')}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
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
      )}
    </Formik>
  );
}

export default LogInScreen;

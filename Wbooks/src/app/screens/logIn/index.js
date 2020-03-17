import React, { useEffect } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';

import AuthActions from '../../../redux/authentication/actions';

import LogInScreen from './layout';

function LogInContainer({ uid, navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (uid) {
      return navigation.navigate('Home');
    }
    return null;
  }, [dispatch, navigation, uid]);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={({ email, password }) => {
        console.log('submit');
        dispatch(AuthActions.logIn(email, password));
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <LogInScreen
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          values={values}
        />
      )}
    </Formik>
  );
}

const mapStateToProps = state => ({
  uid: state.authReducer.bookList
});

LogInContainer.propTypes = {
  navigation: PropTypes.func.isRequired,
  uid: PropTypes.string
};

export default connect(mapStateToProps)(LogInContainer);

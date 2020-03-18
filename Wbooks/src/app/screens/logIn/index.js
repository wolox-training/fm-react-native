import React, { useEffect } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { compose } from 'redux';

import AuthActions from '../../../redux/authentication/actions';
import withLoadingScreen from '../../components/loading';

import LogInScreen from './layout';

function LogInContainer({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AuthActions.startUp(navigation));
  }, [dispatch, navigation]);
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={({ email, password }) => {
        dispatch(AuthActions.logIn(email, password, navigation));
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
  uid: state.authReducer.uid,
  loading: state.authReducer.loading
});

LogInContainer.propTypes = {
  navigation: PropTypes.func.isRequired,
  uid: PropTypes.string
};

export default compose(connect(mapStateToProps), withLoadingScreen)(LogInContainer);

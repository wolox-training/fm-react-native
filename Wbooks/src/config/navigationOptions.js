import React from 'react';
import PropTypes from 'prop-types';

import CustomHeaderContainer from '../app/components/header/index';

export function defaultNavOptions(leftButton, rightButton, title) {
  const nav = {
    header: () => <CustomHeaderContainer leftButton={leftButton} rightButton={rightButton} title={title} />,
    headerStyle: {
      backgroundColor: 'transparent '
    }
  };
  return nav;
}

defaultNavOptions.propTypes = {
  leftButton: PropTypes.string,
  rightButton: PropTypes.string,
  title: PropTypes.string
};

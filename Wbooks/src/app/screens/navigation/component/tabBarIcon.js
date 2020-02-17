import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import Routes from '@constants/routes';

import libraryIconOn from '../assets/ic_library active.png';
import addNewIconOn from '../assets/ic_add new active.png';
import wishListIconOn from '../assets/ic_wishlist active.png';
import rentalIconOn from '../assets/ic_myrentals active.png';
import settingsIconOn from '../assets/ic_settings active.png';
import librarIconOff from '../assets/ic_library.png';
import wishListIconOff from '../assets/ic_wishlist.png';
import addNewIconOff from '../assets/ic_add new.png';
import settingsIconOff from '../assets/ic_settings.png';
import rentalIconOff from '../assets/ic_myrentals.png';

import styles from './styles';

const tabIconsOn = {
  [Routes.Library]: libraryIconOn,
  [Routes.WishList]: wishListIconOn,
  [Routes.AddNew]: addNewIconOn,
  [Routes.Rentals]: rentalIconOn,
  [Routes.Settings]: settingsIconOn
};
const tabIconsOff = {
  [Routes.Library]: librarIconOff,
  [Routes.WishList]: wishListIconOff,
  [Routes.AddNew]: addNewIconOff,
  [Routes.Rentals]: rentalIconOff,
  [Routes.Settings]: settingsIconOff
};
function TabBarIcon({ tintColor, route, focused }) {
  return (
    <Image
      source={focused ? tabIconsOn[route] : tabIconsOff[route]}
      resizeMode="stretch"
      style={[{ tintColor }, styles.tabIcon]}
    />
  );
}
TabBarIcon.propTypes = {
  route: PropTypes.string.isRequired,
  tintColor: PropTypes.string.isRequired,
  focused: PropTypes.bool
};
export default TabBarIcon;

import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import libraryIconOn from '../assets/ic_library_active.png';
import addNewIconOn from '../assets/ic_add_new_active.png';
import wishListIconOn from '../assets/ic_wishlist_active.png';
import rentalIconOn from '../assets/ic_myrentals_active.png';
import settingsIconOn from '../assets/ic_settings_active.png';
import librarIconOff from '../assets/ic_library.png';
import wishListIconOff from '../assets/ic_wishlist.png';
import addNewIconOff from '../assets/ic_add_new.png';
import settingsIconOff from '../assets/ic_settings.png';
import rentalIconOff from '../assets/ic_myrentals.png';
import Routes from '../routes';

const tabIconsOn = {
  [Routes.Library]: libraryIconOn,
  [Routes.WishList]: wishListIconOn,
  [Routes.AddNew]: addNewIconOn,
  [Routes.Rental]: rentalIconOn,
  [Routes.Settings]: settingsIconOn
};
const tabIconsOff = {
  [Routes.Library]: librarIconOff,
  [Routes.WishList]: wishListIconOff,
  [Routes.AddNew]: addNewIconOff,
  [Routes.Rental]: rentalIconOff,
  [Routes.Settings]: settingsIconOff
};
function TabBarIcon({ route, focused }) {
  return <Image source={focused ? tabIconsOn[route] : tabIconsOff[route]} resizeMode="center" />;
}
TabBarIcon.propTypes = {
  route: PropTypes.string.isRequired,
  focused: PropTypes.bool
};
export default TabBarIcon;

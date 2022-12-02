import React from 'react';
import * as PropsTypes from 'prop-types';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import SimpleLineIconsIcon from 'react-native-vector-icons/SimpleLineIcons';

const ANT_DESIGN = 'ant-design';
const ENTYPO = 'entypo';
const EVIL_ICONS = 'evil-icons';
const FEATHER = 'feather';
const FONTAWESOME = 'fontawesome';
const FONTAWESOME5 = 'fontawesome5';
const FONTISTO = 'fontisto';
const FOUNDATION = 'foundation';
const IONICONS = 'ionicons';
const MATERIAL_ICONS = 'material-icons';
const MATERIAL_COMMUNITY_ICONS = 'material-community-icons';
const OCTICONS = 'octicons';
const ZOCIAL = 'zocial';
const SIMPLE_LINE_ICONS = 'simple-line-icons';

export const ICON_TYPE_LIST = [
  ANT_DESIGN,
  ENTYPO,
  EVIL_ICONS,
  FEATHER,
  FONTAWESOME,
  FONTAWESOME5,
  FONTISTO,
  FOUNDATION,
  IONICONS,
  MATERIAL_ICONS,
  MATERIAL_COMMUNITY_ICONS,
  OCTICONS,
  ZOCIAL,
  SIMPLE_LINE_ICONS,
];

export const ICON_TYPES = {
  ANT_DESIGN,
  ENTYPO,
  EVIL_ICONS,
  FEATHER,
  FONTAWESOME,
  FONTAWESOME5,
  FONTISTO,
  FOUNDATION,
  IONICONS,
  MATERIAL_ICONS,
  MATERIAL_COMMUNITY_ICONS,
  OCTICONS,
  ZOCIAL,
  SIMPLE_LINE_ICONS,
};

const ICON = {
  [ANT_DESIGN]: AntDesignIcon,
  [ENTYPO]: EntypoIcon,
  [EVIL_ICONS]: EvilIconsIcon,
  [FEATHER]: FeatherIcon,
  [FONTAWESOME]: FontAwesomeIcon,
  [FONTAWESOME5]: FontAwesome5Icon,
  [FONTISTO]: FontistoIcon,
  [FOUNDATION]: FoundationIcon,
  [IONICONS]: IoniconsIcon,
  [MATERIAL_ICONS]: MaterialIconsIcon,
  [MATERIAL_COMMUNITY_ICONS]: MaterialCommunityIconsIcon,
  [OCTICONS]: OcticonsIcon,
  [ZOCIAL]: ZocialIcon,
  [SIMPLE_LINE_ICONS]: SimpleLineIconsIcon,
};

const Component = (props) => {
  const { type } = props;
  const Icon = ICON[type];

  return <Icon {...props} />;
};

Component.propTypes = {
  type: PropsTypes.oneOf(ICON_TYPE_LIST).isRequired,
  name: PropsTypes.string.isRequired,
  size: PropsTypes.number,
  color: PropsTypes.string,
};

Component.defaultProps = {
  size: 20,
  color: 'white',
};

export default Component;

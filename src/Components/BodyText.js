import { Text } from 'react-native';
import AppStyles from '../../constants/AppStyles';
import PropTypes from 'prop-types';

const BodyText = ({ children, style }) => {
  const { textBody } = AppStyles;
  return <Text style={{ ...textBody, ...style }}>{children}</Text>;
};

BodyText.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default BodyText;

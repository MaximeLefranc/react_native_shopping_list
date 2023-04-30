import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const ButtonComponent = ({ styleBtn, onPress, styleText, children }) => {
  return (
    <TouchableOpacity style={styleBtn} onPress={onPress}>
      <Text style={styleText}>{children}</Text>
    </TouchableOpacity>
  );
};

ButtonComponent.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  styleText: PropTypes.object,
  children: PropTypes.string.isRequired,
};

export default ButtonComponent;

import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';

const ButtonComponent = ({ styleBtn, onPress, styleText, children }) => {
  console.log(typeof children);
  console.log(styleText);
  return (
    <Pressable style={styleBtn} onPress={onPress}>
      <Text style={styleText}>{children}</Text>
    </Pressable>
  );
};

ButtonComponent.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  styleText: PropTypes.object,
  children: PropTypes.string.isRequired,
};

export default ButtonComponent;

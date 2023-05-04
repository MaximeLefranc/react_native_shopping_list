import { StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';

// constants
import colors from '../../constants/colors';

const Input = (props) => {
  return (
    <TextInput
      {...props}
      style={{ ...styles.input, ...props.style }}
      placeholder={props.textPlaceholder}
      onChangeText={props.onChangeHandler}
      value={props.currentValue}
    />
  );
};

Input.defaultProps = {
  currentValue: '',
};

Input.propTypes = {
  textPlaceholder: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  currentValue: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  input: {
    borderColor: colors.modalNewProductText,
    borderWidth: 1,
    height: 40,
    marginVertical: 5,
  },
});

export default Input;

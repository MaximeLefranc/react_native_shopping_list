import { StyleSheet, Text } from 'react-native';

import PropTypes from 'prop-types';

const TitleText = ({ style, children }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

TitleText.propTypes = {
  style: PropTypes.object,
  children: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 5,
  },
});

export default TitleText;

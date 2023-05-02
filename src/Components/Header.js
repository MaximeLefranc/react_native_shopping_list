import { StyleSheet, View, Text } from 'react-native';

// constants
import colors from '../../constants/colors';

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.logo}>My Shopping List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 30,
    paddingTop: 45,
    paddingBottom: 15,
  },
  logo: {
    color: colors.textAndBorderButtons,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;

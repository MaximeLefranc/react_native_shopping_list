import { StyleSheet, View } from 'react-native';

// Components
import TitleText from './TitleText';

// constants
import colors from '../../constants/colors';

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <TitleText style={styles.logo}>My Shopping List</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 30,
    paddingTop: 35,
  },
  logo: {
    color: colors.textAndBorderButtons,
    fontFamily: 'pacifico-regular',
  },
});

export default Header;

import { StyleSheet, View } from 'react-native';

// Components
import TitleText from './TitleText';

// constants
import AppStyles from '../../constants/AppStyles';

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <TitleText style={AppStyles.headerOne}>My Shopping List</TitleText>
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
});

export default Header;

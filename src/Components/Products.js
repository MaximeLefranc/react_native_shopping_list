import PropTypes from 'prop-types';
import { Pressable, StyleSheet, Text } from 'react-native';

// Icons
import { FontAwesome } from '@expo/vector-icons';

// constants
import colors from '../../constants/colors';

const Products = ({ name, deleteProduct, id }) => {
  const styleBtnClickHandler = ({ pressed }) => {
    return {
      ...styles.itemsBtn,
      backgroundColor: pressed ? colors.confirmRemoveProduct : colors.product,
      color: colors.textAndBorderButtons,
    };
  };
  return (
    <Pressable
      onLongPress={() => deleteProduct(id)}
      style={styleBtnClickHandler}
    >
      <Text style={styles.element}>{name}</Text>
      <FontAwesome
        name="remove"
        size={29}
        color={colors.textAndBorderButtons}
      />
    </Pressable>
  );
};

Products.propTypes = {
  name: PropTypes.string.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  itemsBtn: {
    marginTop: 5,
    borderRadius: 10,
    padding: 15,
    overflow: 'hidden',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  element: {
    textAlign: 'center',
    fontSize: 17,
    flexGrow: 1,
  },
});

export default Products;

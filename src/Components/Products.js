import PropTypes from 'prop-types';
import { Pressable, StyleSheet, Text } from 'react-native';

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
    overflow: 'hidden',
    marginBottom: 5,
  },
  element: {
    textAlign: 'center',
    padding: 20,
    fontSize: 17,
    marginVertical: 6,
  },
});

export default Products;

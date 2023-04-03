import PropTypes from "prop-types";
import { StyleSheet, Text, View, Pressable } from "react-native";

const Products = ({ name, deleteProduct, id }) => {
  return (
    <Pressable onLongPress={() => deleteProduct(id)}>
      <View style={styles.items}>
        <Text style={styles.element}>{name}</Text>
      </View>
    </Pressable>
  );
};

Products.propTypes = {
  name: PropTypes.string.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  items: {
    marginTop: 5,
  },
  element: {
    backgroundColor: "lightpink",
    padding: 20,
    fontSize: 17,
    marginVertical: 6,
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default Products;

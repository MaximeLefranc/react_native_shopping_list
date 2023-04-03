import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import PropTypes from "prop-types";

const AddProduct = ({ submitHandler }) => {
  const [product, setProduct] = useState("");

  const inputHandler = (value) => {
    setProduct(value);
  };

  const clickHandler = () => {
    if (product) {
      submitHandler(product);
      setProduct("");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Nouveau produit"
        onChangeText={inputHandler}
        value={product}
        clearButtonMode="while-editing"
        onSubmitEditing={clickHandler}
        autoFocus={true}
      />
      <TouchableOpacity
        style={styles.submitButton}
        title="valider"
        onPress={clickHandler}
      >
        <Text style={styles.submitText}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
};

AddProduct.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  textInput: {
    borderColor: "grey",
    borderRightWidth: 0,
    borderWidth: 1,
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    flexGrow: 1,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  submitButton: {
    borderWidth: 1,
    borderColor: "lightblue",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    overflow: "hidden",
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
  },
  submitText: {
    color: "white",
    fontSize: 18,
  },
});

export default AddProduct;

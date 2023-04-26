import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import ModalAddProduct from './ModalAddProduct';

const AddProduct = ({ submitHandler }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.Container}>
      <ModalAddProduct
        submitHandler={submitHandler}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <TouchableOpacity
        style={styles.submitButton}
        title="newProduct"
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.submitText}>Nouveau produit</Text>
      </TouchableOpacity>
    </View>
  );
};

AddProduct.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  Container: {
    marginBottom: 15,
  },
  submitButton: {
    borderWidth: 1,
    borderColor: 'lightblue',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  submitText: {
    color: 'white',
    fontSize: 18,
  },
});

export default AddProduct;

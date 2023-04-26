import {
  Modal,
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
} from 'react-native';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ModalAddProduct = ({ showModal, setShowModal, submitHandler }) => {
  const [product, setProduct] = useState('');

  const inputHandler = (value) => {
    setProduct(value);
  };

  const clickHandler = () => {
    submitHandler(product.trim());
    setProduct('');
    setShowModal(false);
  };

  const onSubmitEditing = () => {
    clickHandler();
    Keyboard.dismiss();
  };

  return (
    <Modal
      visible={showModal}
      onRequestClose={() => setShowModal(false)}
      animationType="fade"
      transparent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>
              Ajouter un nouveau produit
            </Text>
          </View>
          <View style={styles.modalBody}>
            <TextInput
              style={styles.textInput}
              placeholder="Nouveau produit"
              onChangeText={inputHandler}
              value={product}
              clearButtonMode="while-editing"
              onSubmitEditing={onSubmitEditing}
              autoFocus={true}
            />
          </View>
          <View style={styles.modalFooter}>
            <Pressable style={styles.pressableBtnModal} onPress={clickHandler}>
              <Text style={styles.modalBtn}>Valider</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

ModalAddProduct.propType = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingTop: 110,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  textInput: {
    borderColor: 'lightblue',
    borderWidth: 1,
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    borderRadius: 10,
    width: '80%',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '90%',
    height: 250,
    borderRadius: '20%',
    alignItems: 'center',
  },
  modalHeader: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  modalHeaderText: {
    color: 'grey',
    fontSize: 17,
  },
  modalBody: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalFooter: {
    width: '100%',
  },
  pressableBtnModal: {
    backgroundColor: 'gray',
    borderBottomLeftRadius: '20%',
    borderBottomRightRadius: '20%',
  },
  modalBtn: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    padding: 16,
  },
});

export default ModalAddProduct;

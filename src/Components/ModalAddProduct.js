import { Modal, StyleSheet, View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { useState } from 'react';

// Components
import ButtonComponent from './ButtonComponent';

// constants
import colors from '../../constants/colors';

const ModalAddProduct = ({ showModal, submitHandler, setShowModal }) => {
  const [product, setProduct] = useState('');

  const inputHandler = (value) => {
    setProduct(value);
  };

  const clickHandler = () => {
    submitHandler(product.trim());
    setProduct('');
  };

  const onSubmitEditing = () => {
    clickHandler();
    Keyboard.dismiss();
  };

  return (
    <Modal visible={showModal} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>
              Ajouter un nouveau produit
            </Text>
            <ButtonComponent
              styleBtn={styles.pressableBtnCloseModal}
              onPress={() => setShowModal(false)}
              styleText={styles.modalBtnClose}
            >
              X
            </ButtonComponent>
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
            <ButtonComponent
              styleBtn={styles.pressableBtnModal}
              onPress={clickHandler}
              styleText={styles.modalBtn}
            >
              Valider
            </ButtonComponent>
          </View>
        </View>
      </View>
    </Modal>
  );
};

ModalAddProduct.propType = {
  showModal: PropTypes.bool.isRequired,
  submitHandler: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    backgroundColor: colors.transparent,
  },
  textInput: {
    borderColor: colors.product,
    borderWidth: 1,
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    borderRadius: 10,
    width: '80%',
  },
  modalContent: {
    backgroundColor: colors.textAndBorderButtons,
    width: '90%',
    height: 250,
    borderRadius: '20%',
    alignItems: 'center',
  },
  modalHeader: {
    width: '100%',
    padding: 5,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.submitProductButton,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pressableBtnCloseModal: {
    padding: 10,
  },
  modalBtnClose: {
    fontSize: 20,
    fontWeight: '500',
  },
  modalHeaderText: {
    color: colors.modalNewProductText,
    fontSize: 17,
    flexGrow: 1,
    textAlign: 'center',
    marginLeft: 20,
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
    backgroundColor: colors.modalNewProductText,
    borderBottomLeftRadius: '20%',
    borderBottomRightRadius: '20%',
  },
  modalBtn: {
    fontSize: 17,
    color: colors.textAndBorderButtons,
    textAlign: 'center',
    padding: 16,
  },
});

export default ModalAddProduct;

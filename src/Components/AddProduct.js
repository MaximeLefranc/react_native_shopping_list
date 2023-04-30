import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import ModalAddProduct from './ModalAddProduct';
import ButtonComponent from './ButtonComponent';

const AddProduct = ({ submitHandler, setShowModal, showModal }) => {
  return (
    <View style={styles.Container}>
      <ModalAddProduct
        submitHandler={submitHandler}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <ButtonComponent
        styleBtn={styles.submitButton}
        onPress={() => setShowModal(true)}
        styleText={styles.submitText}
      >
        Nouveau produit
      </ButtonComponent>
    </View>
  );
};

AddProduct.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  Container: {
    marginBottom: 15,
  },
  submitButton: {
    borderWidth: 1,
    borderColor: '#C8BDBD',
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#C8BDBD',
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

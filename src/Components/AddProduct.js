import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

// Components
import ModalAddProduct from './ModalAddProduct';
import ButtonComponent from './ButtonComponent';

// constants
import colors from '../../constants/colors';

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
    borderWidth: 2,
    borderColor: colors.textAndBorderButtons,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: colors.bgButtonNewProduct,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  submitText: {
    color: colors.textAndBorderButtons,
    fontSize: 18,
  },
});

export default AddProduct;

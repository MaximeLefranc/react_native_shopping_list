import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Modal,
  Text,
  StatusBar,
  Pressable,
} from 'react-native';

// Component
import Products from './src/Components/Products.js';
import AddProduct from './src/Components/AddProduct.js';

export default function App() {
  const [myProducts, setMyProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const submitHandler = (product) => {
    if (product.length > 1) {
      const idString = Date.now().toString();
      setMyProducts((currentMyProduct) => [
        { key: idString, name: product },
        ...currentMyProduct,
      ]);
    } else {
      setShowModal(true);
    }
  };

  const deleteProduct = (key) => {
    setMyProducts((currentMyProducts) => {
      return currentMyProducts.filter((product) => product.key !== key);
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Modal
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        animationType="fade"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>Oups !</Text>
            </View>
            <View style={styles.modalBody}>
              <Text style={styles.modalBodyText}>
                Merci d'indiquer plus d'un seul caractère
              </Text>
            </View>
            <View style={styles.modalFooter}>
              <Pressable
                style={styles.pressableBtnModal}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.modalBtn}>OK</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <AddProduct submitHandler={submitHandler} />
      <FlatList
        data={myProducts}
        renderItem={({ item }) => (
          <Products
            name={item.name}
            deleteProduct={deleteProduct}
            id={item.key}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
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
  modalBodyText: {
    fontSize: 17,
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

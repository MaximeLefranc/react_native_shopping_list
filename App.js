import { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
  View,
} from 'react-native';

// Component
import Products from './src/Components/Products.js';
import AddProduct from './src/Components/AddProduct.js';
import DismissKeyboard from './src/Components/DismissKeyboard.js';

// Images
import backgroundImage from './assets/background.jpg';
import Header from './src/Components/Header.js';

export default function App() {
  const [myProducts, setMyProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const submitHandler = (product) => {
    setShowModal(false);
    if (product.length > 1) {
      const idString = Date.now().toString();
      setMyProducts((currentMyProduct) => [
        { key: idString, name: product },
        ...currentMyProduct,
      ]);
    } else {
      alert('Le nombre minimum de caractères autorisées est de 2 !');
    }
  };

  const deleteProduct = (key) => {
    setMyProducts((currentMyProducts) => {
      return currentMyProducts.filter((product) => product.key !== key);
    });
  };

  return (
    <DismissKeyboard>
      <ImageBackground style={styles.bgImage} source={backgroundImage}>
        <StatusBar barStyle="dark-content" />
        <Header />
        <View style={styles.container}>
          <AddProduct
            submitHandler={submitHandler}
            setShowModal={setShowModal}
            showModal={showModal}
          />
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
      </ImageBackground>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flexGrow: 1,
  },
  container: {
    padding: 20,
    height: '100%',
  },
});

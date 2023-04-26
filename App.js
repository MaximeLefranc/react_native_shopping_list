import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  StatusBar,
  Pressable,
} from 'react-native';

// Component
import Products from './src/Components/Products.js';
import AddProduct from './src/Components/AddProduct.js';
import DismissKeyboard from './src/Components/DismissKeyboard.js';

export default function App() {
  const [myProducts, setMyProducts] = useState([]);

  const submitHandler = (product) => {
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
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
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
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    flexGrow: 1,
  },
});

import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

// Component
import Products from "./src/Components/Products.js";
import AddProduct from "./src/Components/AddProduct.js";

export default function App() {
  const [myProducts, setMyProducts] = useState([]);

  const submitHandler = (product) => {
    const idString = Date.now().toString();
    setMyProducts((currentMyProduct) => [
      { key: idString, name: product },
      ...currentMyProduct,
    ]);
  };

  return (
    <View style={styles.container}>
      <AddProduct submitHandler={submitHandler} />
      <FlatList
        data={myProducts}
        renderItem={({ item }) => <Products name={item.name} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
  },
});
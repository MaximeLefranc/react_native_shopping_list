import { useCallback, useState } from 'react';
import {
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
  View,
} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

// Component
import Products from './src/Components/Products.js';
import AddProduct from './src/Components/AddProduct.js';
import DismissKeyboard from './src/Components/DismissKeyboard.js';

// font
import {
  useFonts,
  Bangers_400Regular as BangersRegular,
} from '@expo-google-fonts/bangers';
import interBold from './assets/fonts/Inter-Bold.ttf';
import interRegular from './assets/fonts/Inter-Regular.ttf';
import pacifico from './assets/fonts/Pacifico-Regular.ttf';

// Images
import backgroundImage from './assets/background.jpg';
import Header from './src/Components/Header.js';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [myProducts, setMyProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [fontsLoaded, error] = useFonts({
    'inter-bold': interBold,
    'inter-regular': interRegular,
    'pacifico-regular': pacifico,
    BangersRegular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    if (error) {
      console.error(error);
      return null;
    }
    return null;
  }

  const submitHandler = (product) => {
    setShowModal(false);
    if (product.length > 1) {
      const idString = Date.now().toString();
      setMyProducts((currentMyProducts) => [
        { key: idString, name: product },
        ...currentMyProducts,
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
      <ImageBackground
        style={styles.bgImage}
        source={backgroundImage}
        onLayout={onLayoutRootView}
      >
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
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 15,
    height: '100%',
  },
});

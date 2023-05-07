import { useCallback, useEffect, useState } from 'react';
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
import * as Font from 'expo-font';
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
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'inter-bold': interBold,
          'inter-regular': interRegular,
          'pacifico-regular': pacifico,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

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
    padding: 20,
    height: '100%',
  },
});

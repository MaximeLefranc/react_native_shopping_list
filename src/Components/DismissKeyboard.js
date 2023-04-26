import { useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const DismissKeyboard = ({ children }) => {
  useEffect(() => {
    const keyboardWasShow = Keyboard.addListener(
      'keyboardDidShow',
      _keyboardDidShow
    );
    const keyboardWasHide = Keyboard.addListener(
      'keyboardDidHide',
      _keyboardDidHide
    );
    return () => {
      keyboardWasShow.remove();
      keyboardWasHide.remove();
    };
  }, []);
  const _keyboardDidShow = () => {
    // alert('Veuillez remplir le TextInput'); On Iphone the keyboard is hide by this alert... so we enter an infinite loop
  };
  const _keyboardDidHide = () => {
    // alert('Merci davoir valider le texte');
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;

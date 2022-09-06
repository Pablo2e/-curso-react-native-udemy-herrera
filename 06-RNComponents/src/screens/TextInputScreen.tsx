import React, {useContext} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useForm} from '../hooks/UseForm';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const {form, onChange, isSuscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribed: false,
  });

  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {/* TouchableWithoutFeedback para ios para cerrar el teclado */}
          <View style={styles.globalMargin}>
            <HeaderTitle title="TextInputs" />

            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="Ingrese su nombre"
              placeholderTextColor={dividerColor}
              autoCorrect={false} // para mostrar opciones de palabras correctas
              autoCapitalize="words" // sugiere la mayuscula la primer letra si autocorrect está en true
              onChangeText={value => onChange(value, 'name')}
            />
            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="Ingrese su email"
              placeholderTextColor={dividerColor}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
              keyboardAppearance="dark" // solo para ios
            />
            <View style={stylesScreen.switchRow}>
              <Text style={stylesScreen.switchText}>Suscribirse</Text>
              <CustomSwitch
                isOn={isSuscribed}
                onChange={value => onChange(value, 'isSuscribed')}
              />
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="Ingrese su teléfono"
              placeholderTextColor={dividerColor}
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />
            <View style={{height: 150}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});

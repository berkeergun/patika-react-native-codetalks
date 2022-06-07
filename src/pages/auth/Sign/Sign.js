import {View, Text,ImageBackground} from 'react-native';
import React, {useState} from 'react';
import styles from './Sign.style';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';

import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import colors from '../../../styles/colors';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const Sign = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    navigation.goBack();
  };

  const handleFormSubmit = async formValues => {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor...',
        type: 'danger',
      });
      return;
    }
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      setLoading(false);
      showMessage({
        message: 'Kayıt işlemi başarıyla tamamlandı',
        type: 'success',
      });
    } catch (error) {
      setLoading(false);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      console.log(formValues);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../../../gif/background.jpg")} resizeMode='cover' style={{flex:1}}>

      <View style={styles.header_container}>
        <Text style={styles.header}>codetalks</Text>
      </View>
      <View style={styles.form_group}>
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
          {({values, handleChange, handleSubmit}) => (
            <>
              <Input
                value={values.usermail}
                onChangeText={handleChange('usermail')}
                placeholder="E-postanızı giriniz"
                placeholderTextColor={colors.less_orange}
                iconName="email"
              />
              <Input
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder="Şifrenizi giriniz"
                placeholderTextColor={colors.less_orange}
                iconName="key"
                isSecure
              />
              <Input
                value={values.repassword}
                onChangeText={handleChange('repassword')}
                placeholder="Şifrenizi tekrar giriniz"
                placeholderTextColor={colors.less_orange}
                iconName="key"
                isSecure
              />
              <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
                <Button
                  text="Kayıt Ol"
                  loading={loading}
                  onPress={handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
      <View style={styles.login}>
        <Button
          text="Giriş Yap"
          onPress={handleLogin}
          loading={loading}
          theme="third"
        />
      </View>
      </ImageBackground>
    </View>
  );
};

export default Sign;

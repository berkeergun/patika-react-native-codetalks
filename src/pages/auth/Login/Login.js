import {View, Text,ImageBackground} from 'react-native';
import React, {useState} from 'react';
import styles from './Login.style';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import CircleButton from '../../../components/CircleButton';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import {showMessage} from 'react-native-flash-message';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import colors from '../../../styles/colors';

const initialFormValues = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    navigation.navigate('SignPage');
  };

  const handleFormSubmit = async formValues => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
    console.log(formValues);
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
              <View style={{alignItems: 'flex-end',marginTop:15,}}>
                <CircleButton
                  icon="arrow-right"
                  size={35}
                  theme="primary"
                  onPress={handleSubmit}
                  loading={loading}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
      <View style={styles.sign_up}>
        <Button text="Kayıt Ol" theme="third" onPress={handleSignUp} />
      </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

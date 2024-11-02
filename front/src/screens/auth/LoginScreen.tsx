import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import InputFeld from '../../components/InputFeld';

function LoginScreen() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [valuse, setValuse] = useState({
    email: '',
    password: '',
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const handleChangeText = (name: string, text: string) => {
    setValuse({
      ...valuse,
      [name]: text,
    });
  };

  const handleBlur = (name: string) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputFeld
          placeholder="이메일"
          error={'이메일을 입력하세요'}
          touched={touched.email}
          inputMode="email"
          value={valuse.email}
          onChangeText={text => handleChangeText('email', text)}
          onBlur={() => handleBlur('email')}
        />
        <InputFeld
          placeholder="비밀번호"
          error={'비밀번호를 입력하세요'}
          touched={touched.password}
          secureTextEntry
          value={valuse.password}
          onChangeText={text => handleChangeText('password', text)}
          onBlur={() => handleBlur('password')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
  },
});

export default LoginScreen;

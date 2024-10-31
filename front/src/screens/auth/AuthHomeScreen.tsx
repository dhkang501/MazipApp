import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthStackParamList} from '../../navigations/stack/AuthStackNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {authNavigations} from '../../constants';

type AuthHomeScreemProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreemProps) {
  return (
    <SafeAreaView>
      <View style={styles.continer}>
        <Button
          title="로그인화면으로 이동"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
        <Button
          title="회원가입으로 이동"
          onPress={() => navigation.navigate(authNavigations.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  continer: {},
});

export default AuthHomeScreen;

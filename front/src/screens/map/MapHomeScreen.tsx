import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import useAuth from '../../hooks/queries/useAuth';

function MapHomeScreen() {
  const {logoutMutation} = useAuth();
  return (
    <View>
      <Text>맵 스크린</Text>
      <Button
        title="로그아웃"
        onPress={() => {
          logoutMutation.mutate(null, {
            onSuccess: () => {
              console.log('로그아웃 성공');
            },
            onError: error => {
              console.log('로그아웃 에러:', error);
            },
            onSettled: () => {
              console.log('로그아웃 완료');
            },
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default MapHomeScreen;

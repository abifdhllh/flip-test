import React from 'react';

import {View, ActivityIndicator, Text} from 'react-native';

import styles from '@components/View/LoadingView/style';

const LoadingView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <ActivityIndicator size="large" color="white" />
        <Text style={styles.text}>Loading ...</Text>
      </View>
    </View>
  );
};

export default LoadingView;

import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '@components/Header/style';

type Props = {
  title: string;
  backButton?: boolean;
  navigation?: {
    goBack: () => void;
  };
};

const Header = (props: Props) => {
  const {title, backButton, navigation} = props;

  return (
    <View style={styles.container}>
      {backButton && (
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Icon
            name={Platform.OS === 'android' ? 'arrow-back' : 'arrow-back-ios'}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

import React from 'react';
import {
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '@components/Button/TextButton/style';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  text: string;
  textStyle?: StyleProp<TextStyle>;
  iconName?: string;
  onPress: () => void;
};

const TextButton = ({
  containerStyle = {},
  text,
  textStyle = {},
  iconName,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      {iconName && <Icon style={styles.icon} name={iconName} />}
    </TouchableOpacity>
  );
};

export default TextButton;

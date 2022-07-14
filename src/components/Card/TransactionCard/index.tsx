import React, {ReactNode} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ViewStyle,
  StyleProp,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import styles from '@components/Card/TransactionCard/style';
import {Colors} from '@utils/theme';

type Props = {
  items: {
    sender_bank: string;
    beneficiary_bank: string;
    beneficiary_name: string;
    amount_formatted: string;
    date_formatted: string;
    bgColor: string;
    borderColor: string;
    textColor: string;
    statusText: string;
    lineColor: string;
  };
  onPress: () => void;
};

type TouchableProps = {
  children: ReactNode;
  style: StyleProp<ViewStyle>;
  onPress: () => void;
};

const Touchable = ({children, style, onPress}: TouchableProps) => {
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback style={style} onPress={onPress}>
        {children}
      </TouchableNativeFeedback>
    );
  }
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const TransactionCard = ({items, onPress}: Props) => {
  const Divider = View;
  return (
    <>
      <Touchable style={styles.touchable} onPress={onPress}>
        <View style={styles.container}>
          <View
            style={{
              ...styles.lineView,
              backgroundColor: Colors[items.lineColor as 'black'],
            }}
          />
          <View style={styles.body}>
            {/* Transaction  */}
            <View style={styles.fullFlex}>
              <View style={styles.row}>
                <Text style={styles.title}>{items.sender_bank}</Text>
                <Icon style={styles.iconArrow} name="arrow-right" />
                <Text style={styles.title}>{items.beneficiary_bank}</Text>
              </View>
              <Text style={styles.desc}>{items.beneficiary_name}</Text>
              <View style={styles.row}>
                <Text style={styles.desc}>{items.amount_formatted}</Text>
                <Icon style={styles.iconDot} name="record" />
                <Text style={styles.desc}>{items.date_formatted}</Text>
              </View>
            </View>

            {/* Status */}
            <View
              style={{
                ...styles.statusView,
                backgroundColor: Colors[items.bgColor as 'black'],
                borderColor: Colors[items.borderColor as 'black'],
              }}>
              <Text
                style={{
                  ...styles.statusText,
                  color: Colors[items.textColor as 'black'],
                }}>
                {items.statusText}
              </Text>
            </View>
          </View>
        </View>
      </Touchable>
      <Divider style={styles.divider} />
    </>
  );
};

export default TransactionCard;

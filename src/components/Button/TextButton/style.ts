import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '@utils/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: Metrics.medium,
    color: Colors.orange,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: Metrics.xxs,
    fontSize: Metrics.large,
    color: Colors.orange,
    fontWeight: 'bold',
  },
});

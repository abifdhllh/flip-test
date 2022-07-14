import {StyleSheet} from 'react-native';
import {Metrics} from '@utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: 140,
    backgroundColor: 'gray',
    borderRadius: Metrics.xs,
  },
  text: {
    fontSize: Metrics.medium,
    color: 'white',
  },
});

import {StyleSheet} from 'react-native';
import {Metrics} from '@utils/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: Metrics.small,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: Metrics.xs,
  },
  icon: {
    fontSize: Metrics.large,
    color: 'gray',
  },
  textInput: {
    flex: 1,
    borderWidth: 0,
    paddingHorizontal: Metrics.xs,
    height: 40,
  },
});

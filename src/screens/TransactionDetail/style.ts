import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '@utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBg,
  },
  body: {
    paddingTop: Metrics.small,
    paddingHorizontal: Metrics.small,
    flex: 1,
  },
  detailView: {
    marginVertical: Metrics.xl,
    backgroundColor: Colors.white,
  },
  rowView: {
    flexDirection: 'row',
    paddingHorizontal: Metrics.xl,
    alignItems: 'center',
    height: 70,
  },
  divider: {
    width: '100%',
    borderColor: 'lightgray',
    borderWidth: 0.5,
  },
  title: {
    fontSize: Metrics.medium,
    fontWeight: 'bold',
    color: Colors.black,
  },
  desc: {
    fontSize: Metrics.medium,
    color: Colors.black,
  },
  bankName: {
    fontSize: Metrics.large,
    fontWeight: 'bold',
    color: Colors.black,
  },
  iconCopy: {
    width: Metrics.xl,
    height: Metrics.xl,
    marginLeft: Metrics.xs,
  },
  iconArrow: {
    fontSize: Metrics.small,
    paddingHorizontal: Metrics.xxs,
    color: Colors.black,
  },
  transactionView: {
    padding: Metrics.xl,
  },
  row: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  fullFlex: {
    flex: 1,
  },
  columnView: {
    marginTop: Metrics.large,
    flexDirection: 'column',
  },

  // Modal Sort
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '90%',
    paddingTop: Metrics.xl,
    paddingHorizontal: Metrics.xl,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5,
  },

  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyItemText: {
    fontSize: Metrics.xl,
    color: 'gray',
  },
});

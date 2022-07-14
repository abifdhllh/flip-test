import React, {useEffect, useState} from 'react';

// Component
import {SafeAreaView, View, FlatList, Modal, Text} from 'react-native';
import Header from '@components/Header';
import SearchBar from '@components/Form/SearchBar';
import TransactionCard from '@components/Card/TransactionCard';
import RadioButton from '@components/Button/RadioButton';
import LoadingView from '@components/View/LoadingView';

// Styles
import styles from '@screens/TransactionList/style';

// Shared State
import {Dispatch, RootState} from '@store/index';
import {useDispatch, useSelector} from 'react-redux';
import {useBoolean} from 'src/hooks';

const sortOptions = [
  {
    label: 'URUTKAN',
    value: 0,
  },
  {
    label: 'Nama A-Z',
    value: 1,
  },
  {
    label: 'Nama Z-A',
    value: 2,
  },
  {
    label: 'Tanggal Terbaru',
    value: 3,
  },
  {
    label: 'Tanggal Terlama',
    value: 4,
  },
];

const TransactionList = ({navigation}) => {
  const {transactionList, loading} = useSelector(
    (state: RootState) => state.transaction,
  );
  const dispatch = useDispatch<Dispatch>();

  const [modalSort, {setToggle}] = useBoolean(false);
  const [sortValue, setSortValue] = useState(0); // Value for Sort State
  const [filterValue, setFilterValue] = useState(''); // Value for Filter State

  const sortText = sortOptions[sortValue].label; // Text to display on Sort Text Indicator

  // Get the Transaction List via API call
  useEffect(() => {
    dispatch.transaction?.getTransactionList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Catatan Transaksi" />
      <View style={styles.body}>
        <SearchBar
          onPressSort={setToggle}
          sortText={sortText}
          value={filterValue}
          onChangeText={val => {
            setFilterValue(val);
            dispatch.transaction.filterList(val);
          }}
          containerStyle={styles.searchBar}
        />
        {loading ? (
          <LoadingView />
        ) : (
          <FlatList
            contentContainerStyle={styles.list}
            data={transactionList}
            keyExtractor={(item, index) => `list-item-${index}`}
            renderItem={({item}) => (
              <TransactionCard
                items={item}
                onPress={() => navigation.push('TransactionDetail', {item})}
              />
            )}
            refreshing={loading}
            onRefresh={() => dispatch.transaction.getTransactionList()}
            ListEmptyComponent={
              <View style={styles.flexCenter}>
                <Text style={styles.emptyItemText}>Data tidak tersedia</Text>
              </View>
            }
          />
        )}
      </View>
      <Modal
        onRequestClose={setToggle}
        hardwareAccelerated
        transparent
        statusBarTranslucent
        animationType="fade"
        visible={modalSort}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <RadioButton
              options={sortOptions}
              onPress={value => {
                setSortValue(value);
                setToggle();
                dispatch.transaction.sortList(value);
              }}
              selected={sortValue}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default TransactionList;

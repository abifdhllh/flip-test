import {createModel} from '@rematch/core';
import {RootModel} from '@store/models';
import {apiGetTransactionList} from '@utils/api';
import {
  capitalizeString,
  formatDateIndonesia,
  formatRupiah,
  sortObjectByDateDescending,
  sortObjectByStringAscending,
  sortObjectByStringDescending,
  upperCaseString,
} from '@utils/functions';
import {AxiosResponse} from 'axios';

type ResponseList = {
  account_number: string;
  amount: number;
  beneficiary_bank: string;
  beneficiary_name: string;
  completed_at: string;
  created_at: string;
  fee: number;
  id: string;
  remark: string;
  sender_bank: string;
  status: string;
  unique_code: number;
  borderColor?: string;
  lineColor?: string;
  textColor?: string;
  bgColor?: string;
  statusText?: string;
  amount_formatted: string;
  date_formatted: string;
};

export const transaction = createModel<RootModel>()({
  state: {
    initialTransactionList: [],
    transactionList: [],
    loading: true,
    error: false,
  },
  reducers: {
    getListRequest(state) {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    getListSuccess(state, payload: ResponseList[]) {
      return {
        ...state,
        transactionList: payload,
        initialTransactionList: payload,
        loading: false,
      };
    },
    getListFailure(state) {
      return {
        ...state,
        error: true,
        loading: false,
      };
    },
    filterList(state, filterValue = '') {
      const {initialTransactionList} = state;
      const filteredTransactionList = initialTransactionList.filter(
        ({
          beneficiary_name = '',
          beneficiary_bank = '',
          sender_bank = '',
          amount = 0,
        }) =>
          beneficiary_name.toLowerCase().includes(filterValue.toLowerCase()) ||
          amount.toString().toLowerCase().includes(filterValue.toLowerCase()) ||
          beneficiary_bank.toLowerCase().includes(filterValue.toLowerCase()) ||
          sender_bank.toLowerCase().includes(filterValue.toLowerCase()),
      );

      return {...state, transactionList: filteredTransactionList};
    },
    sortList(state, sortValue = '') {
      const initialTransactionList = state.initialTransactionList;

      let newTransactionlist = [];
      switch (sortValue) {
        case 0:
          newTransactionlist = initialTransactionList;
          break;
        case 1:
          newTransactionlist = sortObjectByStringAscending(
            initialTransactionList,
            'beneficiary_name',
          );
          break;
        case 2:
          newTransactionlist = sortObjectByStringDescending(
            initialTransactionList,
            'beneficiary_name',
          );
          break;
        case 3:
          newTransactionlist = sortObjectByDateDescending(
            initialTransactionList,
            'created_at',
          );
          break;
        case 4:
          newTransactionlist = sortObjectByStringAscending(
            initialTransactionList,
            'created_at',
          );
          break;
        default:
          newTransactionlist = initialTransactionList;
          break;
      }
      return {...state, transactionList: newTransactionlist};
    },
  },
  effects: dispatch => ({
    async getTransactionList(payload: number) {
      dispatch.transaction.getListRequest();
      const response = (await apiGetTransactionList(payload)) as AxiosResponse<
        Record<string, ResponseList>,
        any
      >;
      if (response.status >= 200 && response.status < 300) {
        // Assigning new value to Transaction List Item
        const dataObjectToArray = Object.values(response.data);
        const result = dataObjectToArray.map(row => {
          if (row.status === 'SUCCESS') {
            row.borderColor = 'green';
            row.lineColor = 'green';
            row.textColor = 'white';
            row.bgColor = 'green';
            row.statusText = 'Berhasil';
          } else {
            row.borderColor = 'orange';
            row.lineColor = 'orange';
            row.textColor = 'black';
            row.bgColor = 'white';
            row.statusText = 'Pengecekan';
          }

          row.beneficiary_bank =
            row.beneficiary_bank.length > 4
              ? capitalizeString(row.beneficiary_bank)
              : upperCaseString(row.beneficiary_bank);

          row.sender_bank =
            row.sender_bank.length > 4
              ? capitalizeString(row.sender_bank)
              : upperCaseString(row.sender_bank);

          row.amount_formatted = formatRupiah(row.amount);
          row.date_formatted = formatDateIndonesia(row.created_at);

          return row;
        });
        dispatch.transaction.getListSuccess(result);
      } else {
        dispatch.transaction.getListFailure();
      }
    },
  }),
});

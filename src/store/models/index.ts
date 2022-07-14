import {Models} from '@rematch/core';
import {transaction} from './transaction';
export interface RootModel extends Models<RootModel> {
  transaction: typeof transaction;
}
export const models: RootModel = {transaction};

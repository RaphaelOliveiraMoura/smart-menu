import { Item } from './items';

export interface Request {
  id: number;
  item: Item;
  observations: string;
}

export interface Requests {
  inProgress: {
    1: Request[];
  };
  finished: {
    1: Request[];
  };
}

export default {
  inProgress: {
    1: [],
  },
  finished: {
    1: [],
  },
} as Requests;

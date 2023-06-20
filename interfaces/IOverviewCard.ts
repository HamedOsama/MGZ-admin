export interface IOverviewCard {
  _id?: string;
  id?: string;
  createdAt: string;
  orderState?: number;
  status?: string;
  orderItems: {
    product: string,
    quantity: number
    _id?: string
  }[]
  total: number
};


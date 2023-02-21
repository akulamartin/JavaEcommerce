import dayjs from 'dayjs/esm';

import { InvoiceStatus } from 'app/entities/enumerations/invoice-status.model';
import { PaymentMethod } from 'app/entities/enumerations/payment-method.model';

import { IInvoice, NewInvoice } from './invoice.model';

export const sampleWithRequiredData: IInvoice = {
  id: 91509,
  code: 'Avon Mandatory',
  date: dayjs('2023-02-21T09:33'),
  status: InvoiceStatus['ISSUED'],
  paymentMethod: PaymentMethod['CASH_ON_DELIVERY'],
  paymentDate: dayjs('2023-02-21T03:12'),
  paymentAmount: 13016,
};

export const sampleWithPartialData: IInvoice = {
  id: 32294,
  code: 'Tugrik Customer schemas',
  date: dayjs('2023-02-21T05:40'),
  details: 'Regional Optimization',
  status: InvoiceStatus['PAID'],
  paymentMethod: PaymentMethod['CASH_ON_DELIVERY'],
  paymentDate: dayjs('2023-02-21T09:59'),
  paymentAmount: 69991,
};

export const sampleWithFullData: IInvoice = {
  id: 13401,
  code: 'Account',
  date: dayjs('2023-02-21T05:28'),
  details: 'Creative Intelligent Berkshire',
  status: InvoiceStatus['PAID'],
  paymentMethod: PaymentMethod['CREDIT_CARD'],
  paymentDate: dayjs('2023-02-21T11:21'),
  paymentAmount: 79094,
};

export const sampleWithNewData: NewInvoice = {
  code: 'Bedfordshire online application',
  date: dayjs('2023-02-20T22:47'),
  status: InvoiceStatus['CANCELLED'],
  paymentMethod: PaymentMethod['CREDIT_CARD'],
  paymentDate: dayjs('2023-02-20T14:24'),
  paymentAmount: 58958,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

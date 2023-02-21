import dayjs from 'dayjs/esm';

import { IShipment, NewShipment } from './shipment.model';

export const sampleWithRequiredData: IShipment = {
  id: 17812,
  date: dayjs('2023-02-20T15:41'),
};

export const sampleWithPartialData: IShipment = {
  id: 50749,
  date: dayjs('2023-02-21T03:13'),
  details: 'JBOD mission-critical strategize',
};

export const sampleWithFullData: IShipment = {
  id: 94519,
  trackingCode: 'Points Dynamic Plains',
  date: dayjs('2023-02-20T19:21'),
  details: 'coherent utilize regional',
};

export const sampleWithNewData: NewShipment = {
  date: dayjs('2023-02-21T06:52'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

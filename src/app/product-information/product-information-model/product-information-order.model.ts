import { IClient } from 'src/app/model/client.model';
import { ICopoOrder } from './copo.order.model';
import { ICamisetaOrder } from './camiseta.order.model';

export class IOrder {
    cliente: IClient;
    copo: ICopoOrder;
    camiseta: ICamisetaOrder;
}
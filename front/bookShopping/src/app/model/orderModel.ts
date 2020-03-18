import { Customer} from './customer';
import { OrderBook } from './OrderBook';

export class OrderModel{
    public id:number ;
	public note:string ;
	public total:number;
	public username:string;
	public customer:Customer= new Customer();
	public orderBooks:OrderBook[];
}
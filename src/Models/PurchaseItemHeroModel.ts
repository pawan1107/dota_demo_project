import moment from 'moment';
import { DATE_FORMAT } from '../Constants/StringConstant';

export class PurchaseItemHeroModel {
    public itemId: number;
    public wins: number;
    public matchCount: number;

    public constructor(data?: IPurchaseItemHeroModel) {
        this.itemId = data && data.itemId || 0;;
        this.wins = data && data.wins || 0;;
        this.matchCount = data && data.matchCount || 0;;
    }
}

export interface IPurchaseItemHeroModel{    
    itemId : number;
    wins : number;
    matchCount : number;
}


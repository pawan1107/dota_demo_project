import { PurchaseItemHeroModel } from './PurchaseItemHeroModel';

export class FullPurchaseItemModel {
    public heroId: number;
    public week: number;
    public matchCount: number;
    public events: PurchaseItemHeroModel[];

    public constructor(data?: IFullPurchaseItemModel) {
        this.heroId = data && data.heroId || 0;
        this.week = data && data.week || 0;
        this.matchCount = data && data.matchCount || 0;
        this.events = data && data.events || [];
    }
}

export interface IFullPurchaseItemModel{    
    heroId : number;
    week : number;
    matchCount : number;
    events : PurchaseItemHeroModel[];
}


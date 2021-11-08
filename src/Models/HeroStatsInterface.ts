import { IFullPurchaseItemModel } from "./FullPurchaseItemModel copy";
import { IHeroSynergy } from "./HeroSynergyModel";
import { IHeroWinData } from "./HeroWinDataModel";

export interface ISynergy {    
    heroStats : IHeroStats;
}

export interface IHeroStats {    
    heroVsHeroMatchup : IHeroVsHeroMatchup;
    hero: IHeroWinData[];
    itemFullPurchase: IFullPurchaseItemModel;
}

export interface IHeroVsHeroMatchup {    
    advantage : IVersesMatchup[];
    disadvantage : IVersesMatchup[];
}


export interface IVersesMatchup {    
    vs : IHeroSynergy[];
}
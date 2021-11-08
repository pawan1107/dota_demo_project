import { IHeroSynergy } from "./HeroSynergyModel";

export interface ISynergy {    
    heroStats : IHeroStats;
}

export interface IHeroStats {    
    heroVsHeroMatchup : IHeroVsHeroMatchup;
}

export interface IHeroVsHeroMatchup {    
    advantage : IVersesMatchup[];
    disadvantage : IVersesMatchup[];
}


export interface IVersesMatchup {    
    vs : IHeroSynergy[];
}
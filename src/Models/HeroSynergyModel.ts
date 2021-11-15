import { HeroModel } from "./HeroModel";

export class HeroSynergyModel {
    public heroId1: number;
    public heroId2: number;
    public synergy: number;
    public hero2: HeroModel;

    public constructor(data?: IHeroSynergy) {
        this.heroId1 = (data && data.heroId1) || 0;
        this.heroId2 = (data && data.heroId2) || 0;
        this.synergy = (data && data.synergy) || 0;
        this.hero2 = (data && data.hero2) || new HeroModel();
    }
}

export interface IHeroSynergy {    
    heroId1 : number;
    heroId2 : number;
    synergy : number;
    hero2 : HeroModel;
}
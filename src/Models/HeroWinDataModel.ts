import { HeroModel } from "./HeroModel";


export class HeroWinDataModel {
    public matchCount: number;
    public timestamp: number;
    public winCount: number;

    public constructor(data?: IHeroWinData) {
        this.matchCount = data && data.matchCount || 0;
        this.timestamp = data && data.timestamp || 0;
        this.winCount = data && data.winCount || 0;
    }
}

export interface IHeroWinData {    
    matchCount : number;
    timestamp : number;
    winCount : number;
}


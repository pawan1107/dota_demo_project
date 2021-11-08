import { BaseModel, IBase } from "./BaseModel";

export class HeroModel extends BaseModel {
    
    public constructor(hero?: IBase) {
        super(hero);
    }
}


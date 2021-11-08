import { ConstantQueryModel } from "./ConstantQueryModel";
import { HeroModel } from "./HeroModel";

export class ConstantStateModel extends ConstantQueryModel {
    public currentHero: HeroModel;

    public constructor () {
        super();
        this.currentHero = new HeroModel();
    }
}

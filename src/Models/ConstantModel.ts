import { ConstantStateModel } from "./ConstantStateModel";
import { HeroModel } from "./HeroModel";

export class ConstantModel {
    public constant: ConstantStateModel;

    public constructor () {
        this.constant = new ConstantStateModel();
    }
}

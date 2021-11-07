import { HeroModel } from "./HeroModel";
import { ItemModel } from "./ItemModel";

export class ConstantQueryModel {
    public heroes: HeroModel[];
    public items: ItemModel[];

    public constructor () {
        this.heroes = [];
        this.items = [];
    }
}

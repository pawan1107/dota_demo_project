import { ConstantModel } from "../Models/ConstantModel";

export const selectCurrentHero = (state: ConstantModel) => state.constant.currentHero;
export const selectHeroList = (state: ConstantModel) => state.constant.heroes;
export const selectItemList = (state: ConstantModel) => state.constant.items;

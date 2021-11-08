import { FETCH_CONSTANT } from "../Constants/TypesRequest";
import { ConstantQueryModel } from "../Models/ConstantQueryModel";

const defaultState = {
    heroes: [],
    items: [],
    currentHero: null
  };
  
  export default function(state = defaultState, action: any) {

    switch (action.type) {
      case FETCH_CONSTANT:
        const constData = action.payload as ConstantQueryModel;
        const currentHero = constData.heroes[Math.floor(Math.random() * constData.heroes.length)];
        return {
          ...state,
          heroes: constData.heroes,
          items: constData.items,
          currentHero: currentHero
        };
      default:
        return state;
    }
  }
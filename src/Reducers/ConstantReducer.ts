import { FETCH_CONSTANT } from "../Constants/TypesRequest";
import { ConstantQueryModel } from "../Models/ConstantQueryModel";

const defaultState = {
    heroes: [],
    items: []
  };
  
  export default function(state = defaultState, action: any) {

    switch (action.type) {
      case FETCH_CONSTANT:
        const constData = action.payload as ConstantQueryModel;
        return {
          ...state,
          heroes: constData.heroes,
          items: constData.items
        };
      default:
        return state;
    }
  }
import { FETCH_HERO_DATA } from "../Constants/TypesRequest";


  export function heroData(state = {}, action: any) {

    switch (action.type) {
      case FETCH_HERO_DATA:
        const constData = action.payload;
        return {
          matchupData: constData.heroVsHeroMatchup,
          winData: constData.hero,
          itemData: constData.itemFullPurchase
        };

      default:
        return state;
    }
  }
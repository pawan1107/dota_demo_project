import { gql } from "@apollo/client";
import { Hero, Item } from "./Fragments"


export const GET_ALL_HERO_ITEM= gql`
    ${Hero}
    ${Item}
    query Constants($languageEnum: Language) {
        constants {
        heroes(language: $languageEnum) {
            ...Hero
            __typename
        }
        items(language: $languageEnum) {
            ...Item
            __typename
        }
        __typename
        }
    }
`;
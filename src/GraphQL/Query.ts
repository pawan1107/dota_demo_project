import { gql } from "@apollo/client";
import { Hero, HeroDayFragment, HeroDryad, HeroStatsHeroDryad, Item } from "./Fragments"


export const GET_ALL_CONSTANT = gql`
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

export const GET_ALL_HERO_DATA = gql`
    ${HeroDryad}
    ${HeroDayFragment}
    ${HeroStatsHeroDryad}
    query GetHeroMatchup($heroId: Short!) {
      heroStats {
        heroVsHeroMatchup(heroId: $heroId) {
          advantage {
            ...HeroDryad
            __typename
          }
          disadvantage {
            ...HeroDryad
            __typename
          }
          __typename
        }
        hero: winDay(heroIds: [$heroId], take: 7) {
          ...HeroDayFragment
          __typename
        }
        itemFullPurchase(heroId: $heroId, matchLimit: 0) {
          heroId
          week
          events {
            itemId
            matchCount: count
            wins: winsAverage
            __typename
          }
          matchCount: count
          __typename
        }
        __typename
      }
    } 
`;
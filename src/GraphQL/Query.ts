import { gql } from "@apollo/client";
import { Hero, HeroDayFragment, HeroDryad, HeroStatsHeroDryad, Item } from "./Fragments"


export const GET_ALL_HERO_ITEM = gql`
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


export const GET_HERO_MATCHUP = gql`
    ${HeroDryad}
    ${HeroStatsHeroDryad}
    query GetHeroMatchup($heroId: Short!, $bracketBasicIds: [RankBracketHeroTimeDetail]) {
        heroStats {
          heroVsHeroMatchup(heroId: $heroId, bracketBasicIds: $bracketBasicIds) {
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
          __typename
        }
    }
`;

export const GET_HERO_GRAPH = gql`
    ${HeroDayFragment}
    query GetGraphsTime($heroIds: [Short!]!, $take: Int) {
      heroStats {
        hero: winDay(take: $take, heroIds: $heroIds) {
          ...HeroDayFragment
          __typename
        }
        __typename
      }
    }
`;
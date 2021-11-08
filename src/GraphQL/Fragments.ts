import { gql } from '@apollo/client';

export const Hero = gql`
    fragment Hero on HeroType {
        id
        name
        language {
        displayName
        __typename
        }
        __typename
    }
`;

export const Item = gql`
    fragment Item on ItemType {
        id
        name
        language {
        displayName
        __typename
        }
        __typename
    }
`;

export const HeroDryad = gql`
    fragment HeroDryad on HeroDryadType {
        vs {
        ...HeroStatsHeroDryad
        __typename
        }
        __typename
    }
`;

export const HeroStatsHeroDryad = gql`
    fragment HeroStatsHeroDryad on HeroStatsHeroDryadType {
        heroId1
        heroId2
        synergy
        __typename
    }
`;

export const HeroDayFragment = gql`
    fragment HeroDayFragment on HeroWinDayType {
        timestamp: day
        matchCount
        winCount
        __typename
    }
`;
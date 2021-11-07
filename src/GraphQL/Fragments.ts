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
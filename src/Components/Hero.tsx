import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { FETCH_CONSTANT } from '../Constants/TypesRequest';
import { GET_ALL_HERO_ITEM } from '../GraphQL/Query';


function Hero() {

    const { error, loading, data } = useQuery(GET_ALL_HERO_ITEM);
    const dispatch = useDispatch();
    useEffect(() => {
    if (data) {
        dispatch({
        type: FETCH_CONSTANT,
        payload: data
        })
    }
    }, [data]);

    return (
        <div>
            
        </div>
    )
}

export default Hero;
import { connect } from 'react-redux';
import { GetHeroHorz } from '../../Utils/Utils';
import './hero.scss';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { FETCH_CONSTANT } from '../../Constants/TypesRequest';
import { GET_ALL_CONSTANT } from '../../GraphQL/Query';
import { useAppDispatch } from '../../Utils/Hooks';
import HeroData from '../HeroData/HeroData';

function Hero(props): JSX.Element {

    const { error, loading, data } = useQuery(GET_ALL_CONSTANT);
    const dispatch = useAppDispatch();
    useEffect(() => {
    if (data) {
        dispatch({
        type: FETCH_CONSTANT,
        payload: data.constants 
        })
    }
    }, [data]);

    if (loading) {
        return (<div>Loading ...</div>)
    }

    if (error) {
        return (<div>Something went wrong. Please Try again</div>)
    }
        
    return props.currentHero ? (
        <div className = "hero-container">
            <div className = "hero-section">
                <img className = "hero-image" alt = {props.currentHero.language.displayName} src={ GetHeroHorz(props.currentHero.name) } />
                <h1 className = "hero-name">{props.currentHero.language.displayName}</h1>
            </div>
            <HeroData />
            
        </div>  
    ) : <></>;
}

function mapState(state) {
    const currentHero = state.constantData.currentHero;
    return { currentHero };
}

export default connect(mapState, null)(Hero);
import { useQuery } from '@apollo/client';
import { useEffect } from 'react'
import { connect } from 'react-redux';
import { FETCH_HERO_DATA } from '../../Constants/TypesRequest';
import { GET_ALL_HERO_DATA } from '../../GraphQL/Query';
import { useAppDispatch } from '../../Utils/Hooks';
import PurchaseItem from '../PurchaseItem/PurchaseItem';
import Synergy from '../Synergy/Synergy';
import Winrate from '../Winrate/Winrate';
import './heroData.scss';

function HeroData(props) {

    const { error, loading, data } = useQuery(GET_ALL_HERO_DATA, {
        variables: { heroId: props.currentHero.id}
    });
    const dispatch = useAppDispatch();
    useEffect(() => {
    if (data) {
        dispatch({
        type: FETCH_HERO_DATA,
        payload: data.heroStats 
        })
    }
    }, [data]);


    if (loading) {
        return (<div>Loading ...</div>)
    }

    if (error) {
        return (<div>Something went wrong. Please Try again</div>)
    }

    return (
        data && (
        <div className = "hero-body">
            <Synergy/>
            <Winrate/>
            <PurchaseItem/>
        </div>
        )
    ) || <></>
}


function mapState(state) {
    const currentHero = state.constantData.currentHero;
    return { currentHero };
}

export default connect(mapState, null)(HeroData);

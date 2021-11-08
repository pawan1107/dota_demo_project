import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { FETCH_CONSTANT } from '../../Constants/TypesRequest';
import { GET_HERO_MATCHUP } from '../../GraphQL/Query';
import { HeroModel } from '../../Models/HeroModel';
import { ISynergy } from '../../Models/HeroStatsInterface';
import { HeroSynergyModel, IHeroSynergy } from '../../Models/HeroSynergyModel';
import { selectCurrentHero, selectHeroList } from '../../Utils/Selector';
import { GetHeroIcon } from '../../Utils/Utils';
import './synergy.scss';

function Synergy(): JSX.Element {
    let bestSynergy: HeroSynergyModel[] = [];
    let wortSynergy: HeroSynergyModel[] = [];
    const currentHero = useSelector(selectCurrentHero);
    const heroList = useSelector(selectHeroList);
    const totalElementDisplay = 3;
    const { error, loading, data } = useQuery(GET_HERO_MATCHUP, {
        variables: { heroId: currentHero.id}
    });

    if (data) {
        const synergyData = data as ISynergy;
    
        bestSynergy = synergyData && synergyData.heroStats.heroVsHeroMatchup.advantage[0].vs.slice(0, totalElementDisplay);
        bestSynergy = bestSynergy.map((data) => ({...data, hero2: heroList.find((hero) => hero.id === data.heroId2) as HeroModel}));
    
        wortSynergy = synergyData && synergyData.heroStats.heroVsHeroMatchup.disadvantage[0].vs.slice(0, totalElementDisplay);
        wortSynergy = wortSynergy.map((data) => ({...data, hero2: heroList.find((hero) => hero.id === data.heroId2) as HeroModel}));
    }

    const syngeryDiv = (synergy: IHeroSynergy) => {
        return (<div className = "synergy-cell"> 
            <img className = "hero-icon" src={ GetHeroIcon(synergy.hero2.name) } />
            <span className = "synergy-value">{synergy.synergy.toFixed(1)}</span>
        </div>)
    }

    return (
        <div className = "synergy-container">
            <h2 className = "synergy-header">Synergy</h2>
            <div className = "synergy-body">
                <div className = "best-against synergy-column">
                    <h3 className = "column-header">Best Against</h3>
                    {
                       bestSynergy.map(synergy => syngeryDiv(synergy)) 
                    }

                </div>
                <div className = "worst-against synergy-column">
                    <h3 className = "column-header">Worst Against</h3>
                    {
                       wortSynergy.map(synergy => syngeryDiv(synergy)) 
                    }

                </div>

            </div>
            
        </div>
    )
}

export default Synergy;

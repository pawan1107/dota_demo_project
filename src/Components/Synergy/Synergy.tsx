import { connect } from 'react-redux';
import { HeroModel } from '../../Models/HeroModel';
import { HeroSynergyModel, IHeroSynergy } from '../../Models/HeroSynergyModel';
import { GetHeroIcon } from '../../Utils/Utils';
import './synergy.scss';

function Synergy(props): JSX.Element {
    let bestSynergy = [];
    let wortSynergy = [];
    const totalElementDisplay = 3;

    if (props.heroVsHeroMatchup) {
        const advantage = props.heroVsHeroMatchup.advantage[0]
        if (advantage) {
            const bestSynergyData = advantage.vs.slice(0, totalElementDisplay);
            bestSynergy = bestSynergyData.map((data) => 
                ({...data, hero2: props.heroList.find((hero) => hero.id === data.heroId2)}));
        }

        const disadvantage = props.heroVsHeroMatchup.disadvantage[0]
        if (disadvantage) {
            const wortSynergyData = disadvantage.vs.slice(0, totalElementDisplay);
            wortSynergy = wortSynergyData.map((data) =>
                ({...data, hero2: props.heroList.find((hero) => hero.id === data.heroId2)}));
        }
    }

    const syngeryDiv = (synergy: IHeroSynergy, isBest: boolean) => {
        return (<div key = {synergy.heroId2.toString()} className = "synergy-cell"> 
            <img className = "hero-icon" src={ GetHeroIcon(synergy.hero2.name) } />
            <span className = "synergy-value">{isBest ? "+ ": ""}{synergy.synergy.toFixed(1)}</span>
        </div>)
    }

    return props.heroVsHeroMatchup && (
        <div className = "synergy-container">
            <h2 className = "synergy-header">Synergy</h2>
            <div className = "synergy-body">
                {bestSynergy.length &&
                    <div className = "best-against synergy-column">
                        <h3 className = "column-header">Best Against</h3>
                        {
                        bestSynergy.map(synergy => syngeryDiv(synergy, true)) 
                        }

                    </div>
                }
                {wortSynergy.length &&
                <div className = "worst-against synergy-column">
                    <h3 className = "column-header">Worst Against</h3>
                    {
                       wortSynergy.map(synergy => syngeryDiv(synergy, false)) 
                    }

                </div>
                }
            </div>
            
        </div>
    ) || <></>
}

function mapState(state) {
    const heroList = state.constantData.heroes;
    const heroVsHeroMatchup = state.heroData?.matchupData;
    return { heroList, heroVsHeroMatchup};
}

export default connect(mapState, null)(Synergy);

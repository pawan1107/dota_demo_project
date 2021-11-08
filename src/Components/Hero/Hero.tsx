import { useSelector } from 'react-redux';
import { selectCurrentHero } from '../../Utils/Selector';
import { GetHeroHorz } from '../../Utils/Utils';
import PurchaseItem from '../PurchaseItem/PurchaseItem';
import Synergy from '../Synergy/Synergy';
import Winrate from '../Winrate/Winrate';
import './hero.scss';

function Hero(): JSX.Element {
    const currentHero = useSelector(selectCurrentHero);
    return currentHero ? (
        <div className = "hero-container">
            <div className = "hero-section">
                <img className = "hero-image" src={ GetHeroHorz(currentHero.name) } />
                <h1 className = "hero-name">{currentHero.language.displayName}</h1>
            </div>
            <div className = "hero-body">
                <Synergy/>
                <Winrate/>
                <PurchaseItem/>
            </div>
            
        </div>  
    ) : <></>;
}


export default Hero;
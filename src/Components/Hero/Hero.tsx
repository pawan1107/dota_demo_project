import { useSelector } from 'react-redux';
import { selectCurrentHero } from '../../Utils/Selector';
import { GetHeroHorz } from '../../Utils/Utis';
import './hero.scss';

function Hero(): JSX.Element {
    const currentHero = useSelector(selectCurrentHero);
    return currentHero ? (
        <div className = "hero-container">
            <div className = "hero-section">
                <img className = "hero-image" src={ GetHeroHorz(currentHero.name) } />
                <h1 className = "hero-name">{currentHero.language.displayName}</h1>
            </div>
        </div>  
    ) : <></>;
}


export default Hero;
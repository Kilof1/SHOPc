import * as React from 'react';
import NavCategory from './NavCategory';
import discountIcon from '../../../assets/Header/icons/discount.svg'
import { navOptions} from './navOptions';

import '../../../styles/Nav.scss';

const Nav = () => {
    return ( 
        <div className="nav">
            <ul className="nav__list">
                <li className="nav__item">Home</li>
                {navOptions.map((i, index) => (
                    <NavCategory key={index} {...i}/>
                ))}
                <li className="specialoffer nav__item">
                    <img src={discountIcon} alt="Refresh the page"/>
                    Super oferta!</li>
            </ul>
        </div>
     );
}
 
export default Nav;
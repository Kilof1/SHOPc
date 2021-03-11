import * as React from 'react';

import { navOptions } from './navOptions';

import useOnClickOutside from '../../../helpers/useOutsideClick'

import '../../../styles/SideBar.scss'
import SideBarDropdown from '../SideBarDropdown';

interface SideBarProops {
    click: () => (void)
}
 
const SideBar: React.FC<SideBarProops> = (props) => {

    const [showDropdown, setShowDropdown] = React.useState([
        false, false, false, false, false, false
    ]);
    const handleDropdownChange = (i: number) => {
            setShowDropdown([false, false, false, false, false, false])
            setShowDropdown(prevState => ({
                ...prevState,
                [i]: !showDropdown[i]
            }))
        }

        const ref = React.useRef(null)

        const handleClickOutside = () => {
            props.click();
        }
      
        useOnClickOutside(ref, handleClickOutside)
      
    
    return ( 
        <div className="sidebar-menu" ref={ref}>
            <ul className="sidebar-menu__categories">
                {navOptions.map((n, i) => (
                    // <SideBarDropdown key={i} {...n}/>
                    <div key={i}>
                        <li className="sidebar-menu__categories__list" key={i} id={n.name} onClick={() => handleDropdownChange(i)}>{n.name}</li>
                            <div  className={showDropdown[i] ? 'sidebar-menu__dropdown-active': "sidebar-menu__dropdown"}>
                                <ul>
                                <p className="sidebar-menu__dropdown-active__title">{n.categories[0].title}</p>
                                {n.categories[0].values.map((v, i)  =>  <li onClick={props.click}className="sidebar-menu__dropdown-active__item" key={i}>{v}</li>      
                                )}
                                </ul>
                            </div>

                    </div>
                ))}
            </ul>
        </div>
     );
};
 
export default SideBar;
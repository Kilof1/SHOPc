import * as React from 'react';
import { useRef } from 'react'

import useOnClickOutside from '../../helpers/useOutsideClick';

export interface SideBarDropdownProps {
    name: string,
    categories: {
        title: string,
        values: string[]
    }[]
}


const SideBarDropdown: React.FC<SideBarDropdownProps> = (props) => {

    const [isOpen, setIsOpen] = React.useState(false);
    

    const ref = useRef(null)
    
    const handleClickInside = () => {
            setIsOpen(true)
            console.log(`click inside in ${props.name}`)

    }

    const handleClickOutside = () => {
        if(isOpen) {
            console.log(`click outside in ${props.name}`)

            setIsOpen(false)
        }
    }
    
      
    useOnClickOutside(ref, handleClickOutside)
    
    return ( 
            <div ref={ref}>

                <li onClick={handleClickInside}  className="sidebar-menu__categories__list" >
                    {props.name}
                </li>

                <div className={isOpen ? 'sidebar-menu__dropdown-active': "sidebar-menu__dropdown"}>

                    <ul className='sidebar-menu__dropdown__list'>

                        <p>{props.categories[0].title}</p>

                        {props.categories[0].values.map((v, i)  =>  <li key={i}>{v}</li>  

                    )}
                    </ul>
                </div>

            </div>
     );
}

 
export default SideBarDropdown
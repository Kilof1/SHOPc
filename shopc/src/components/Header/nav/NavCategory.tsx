import React, {FunctionComponent} from 'react';

import '../../../styles/NavCategory.scss'

export interface NavCategoryProps {
    name: string,
    categories: {
        title: string,
        values: string[]
    }[]
}
 
const NavCategory: FunctionComponent<NavCategoryProps> = (props) => {
    return (
        <>
            <li className="nav__item" onClick={() => console.log(props.name)}>{props.name}
            <div className='dropdown'>
                {props.categories.map((c, i) => (
                        <div key={i} className={`dropdown-${i}`}>
                            <h3 className="dropdown__title">{c.title}</h3>
                            <ul className="dropdown__list">
                            {c.values.map((v, i) => (
                                <li key={i}>{v}</li>
                            ))}
                        </ul>
                    </div>
                ))}
                </div>
            </li>
        </>
     );
}
 
export default NavCategory;
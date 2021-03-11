import * as React from 'react';
import Currency from './Currency';
import Nav from './nav/Nav'
import '../../styles/Header.scss'
import SearchBar from './searchBar/SearchBar';

export interface HeaderProps {
    
}
 
const Header: React.SFC<HeaderProps> = () => {

    return (
        <header className="header">
            <div className="header__top">
                <span className="header__top__hello">Witaj w naszym sklepie!</span>
                <Currency />
            </div>
            <SearchBar />
            <Nav />
        </header>
      );

}
 
export default Header;
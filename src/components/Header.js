import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            <h2 className="header__subtitle">{props.subtitle}</h2>
            <NavLink to="/" activeClassName="is-active" exact={true} className="header__nav">Home</NavLink>
            <NavLink to="/for-each" activeClassName="is-active" exact={true} className="header__nav">ForEach</NavLink>
            <NavLink to="/about" activeClassName="is-active" exact={true} className="header__nav">About</NavLink>
        </div>
    </div>
);

Header.defaultProps = {
    title: 'Document Web',
    subtitle: 'The place to refind'
};

export default Header;
import React from 'react';

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
);

Header.defaultProps = {
    title: 'Document Web',
    subtitle: 'The place to refind'
};

export { Header as default }
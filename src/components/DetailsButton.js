import React from 'react';

const DetailsButton = (props) => (
    <div>
        <button 
            className="button button--link"
            onClick={props.handleDetailsButton}
        >
            <li>{props.buttonName}</li>
        </button>
    </div>
);

export { DetailsButton as default }
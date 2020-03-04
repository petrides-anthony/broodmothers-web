import React from 'react';

const DetailsButton = (props) => (
    <div>
        <button 
            className="button"
            onClick={props.handleDetailsButton}
        >
            {props.buttonName}
        </button>
    </div>
);

export { DetailsButton as default }
import React from 'react';

const DetailsButton = (props) => (
    <div>
        <button onClick={props.handleDetailsButton}>
            Details...
        </button>
    </div>
);

export { DetailsButton as default }
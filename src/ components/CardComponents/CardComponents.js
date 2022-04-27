import React from 'react';

import './Card.css'

const CardComponents = (props) => {
    const classes = 'card '+ props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
};

export {CardComponents};
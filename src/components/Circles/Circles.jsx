import React from 'react';
import './Circles.css'

const Circles = (props) => (
    <>
    <div className="Circles">
    <div className={props.selected === 'yes' ? 'selected' : ''}>1</div>
    <div className={props.selected2 === 'yes' ? 'selected' : ''}>2</div>
    <div className={props.selected3 === 'yes' ? 'selected' : ''}>3</div>
    <div className={props.selected4 === 'yes' ? 'selected' : ''}>4</div>
    </div>
    </>
);

export default Circles;
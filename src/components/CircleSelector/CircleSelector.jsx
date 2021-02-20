import React from 'react';
import './CircleSelector.css'

class CircleSelector extends React.Component {
    
    render() {
        return(
    <div className='CircleSelector'>
        <button onClick={this.props.handle} className={ this.props.selected === 'yes' ? 'selected' : ''} >Circle 1 Selected</button>
        <button onClick={this.props.handle2} className={ this.props.selected2 === 'yes' ? 'selected' : ''}  >Circle 2 Selected</button>
        <button onClick={this.props.handle3} className={ this.props.selected3 === 'yes' ? 'selected' : ''} >Circle 3 Selected</button>
        <button onClick={this.props.handle4} className={ this.props.selected4 === 'yes' ? 'selected' : ''} >Circle 4 Selected</button>
    </div>
        )}
}


export default CircleSelector;
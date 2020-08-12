import React from 'react';
import Icon from './core/Icons';
import Slider from './core/Slider';
class Person extends React.Component {
    render() {
       
        
        return (
            
            <div className="box1 col-md-2 col-6">
                <Icon name={'directions_walk'} color={'black'}/>
                <p>{this.props.steps} Steps</p>
                <Slider/>
            </div>

        )
    }
}

export default Person;
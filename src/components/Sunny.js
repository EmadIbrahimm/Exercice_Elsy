import React from 'react';

import Icon from './core/Icons';
import Slider from './core/Slider';

class Sunny extends React.Component {
    render () {
        return (
            <div className="box1 col-md-2 col-6">

            <Icon name={'wb_sunny'} color={'yellow'}/>
            <p> {this.props.sun} </p>

            <Slider />

                
            </div>
            
        );
    }
}
export default Sunny;
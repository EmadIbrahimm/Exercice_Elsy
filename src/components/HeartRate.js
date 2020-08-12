import React from 'react';
import Icon from './core/Icons';
import Slider from './core/Slider'
class HeartRate extends React.Component {
    render() {
        
        
        return (
            <div className="box1 col-6 col-md-2 ">
                <Icon name='favorite' color="red"/>

                <p>{this.props.heart} BPM</p>
                
                <Slider  max={this.props.max}
                  min={this.props.min}
                  value={this.props.value}
                  onChange={this.props.onChange}/>
                
             

            </div>

        )
    }
}

export default HeartRate;
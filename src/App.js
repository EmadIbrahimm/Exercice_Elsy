import React from 'react';
import Person from './components/person';
import HeartRate from './components/HeartRate';
import Sunny from './components/Sunny'
const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;
class App extends React.Component {

  constructor(props) {
    super(props);

      this.state ={
        water : 0,
        heart :120,
        temperature : -10,
        steps : 3000,
    };
    this.onHeartChange = this.onHeartChange.bind(this);
  }

  onHeartChange(val) {

    this.setState({
        state: val,
    })

  }
  
  render() {
    // console.log(this.props)
    return (
      <div> 
        
        <Person steps={this.state.steps}/>  
        <HeartRate heart={this.state.heart}/>
        <Sunny sun={this.state.sun}/>
        
      </div>

      
    )
  }

}
export default App;
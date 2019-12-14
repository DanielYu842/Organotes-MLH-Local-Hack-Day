import React from 'react';
import './App.css';
import Cards from './components/Display/Cards';
//import { defaultCipherList } from 'constants';
import data from './dummy.json'
import Stack from './components/Display/Stack.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: true
    };
    this.changeDisplay = this.changeDisplay.bind(this);

  }
  changeDisplay(){
    setTimeout(() => this.setState((prevstate) => ({
      display: !prevstate.display
    })), 500);

  }



  render() {
    return (
        <div>
          <div className="container" >
                    <label className="switch" htmlFor="checkbox" >
                        <input type="checkbox" id="checkbox" onClick ={this.props.changemode} onClick={this.changeDisplay}/>
                        <div className="slider round"></div>
                    </label>
                </div>
          <div className="Cards-Container">
            {this.state.display ? data.map( (cardData, index) => <Cards topic={cardData.topic} definition={cardData.definition}/>) : <Stack data={data}/>}
          </div>

        </div>
    )
  }
}

export default App
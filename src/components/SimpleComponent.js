// Code SimpleComponent Here
import React,{Component} from 'react';

export default class SimpleComponent extends Component {


constructor(){
  super()
  this.state = {
    mood: 'happy'
  }
}

  handleClik = () => {
    let newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({
      mood: newMood
    })
  }
  render(){
    return(
      <div onClick={this.handleClik}>
        <p>{this.state.mood}</p>
      </div>
    )
  }
}

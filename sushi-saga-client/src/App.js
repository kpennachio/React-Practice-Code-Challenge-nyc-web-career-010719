import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sliceBegin: 0,
    sliceEnd: 4,
    eatenSushi: [],
    money: 100
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => {
      this.setState({sushis})
    })
  }

  changeSlice = (e) => {
    // e.preventDefault()
    console.log("reached change slice")
    this.setState((prevState) => ({
      sliceBegin: prevState.sliceBegin + 4,
      sliceEnd: prevState.sliceEnd + 4
    }))
  }

  eatSushi = (e, sushi) => {
    if (!this.state.eatenSushi.includes(sushi) && this.state.money > sushi.price) {
      this.takeMoney(sushi)
      this.setState((prevState) => ({
        eatenSushi: [...prevState.eatenSushi, sushi]
      }))
    }
    else {
      console.log("you already ate this sushi or you can't afford this sushi")
    }

  }

  takeMoney = (sushi) => {
      this.setState((prevState) => ({
        money: prevState.money - sushi.price
      }))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} sliceBegin={this.state.sliceBegin} sliceEnd={this.state.sliceEnd} changeSlice={this.changeSlice} eatenSushi={this.state.eatenSushi} eatSushi={this.eatSushi}/>
        <Table money={this.state.money} eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;

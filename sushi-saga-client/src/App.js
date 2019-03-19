import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './containers/SushiWallet'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sliceBegin: 0,
    sliceEnd: 4,
    eatenSushi: [],
    money: 100,
    formInput: 0
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => {
      this.setState({sushis})
    })
  }

  changeSlice = (e) => {
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

  recordMoney = (e) => {
    this.setState({formInput: e.target.value})
  }

  addMoney = (e) => {
    e.preventDefault()
    let money = parseInt(this.state.formInput)
    this.setState((prevState) => ({
      money: parseInt(prevState.money) + money
    }))
    e.target.reset()
  }


  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} sliceBegin={this.state.sliceBegin} sliceEnd={this.state.sliceEnd} changeSlice={this.changeSlice} eatenSushi={this.state.eatenSushi} eatSushi={this.eatSushi}/>
        <Table money={this.state.money} eatenSushi={this.state.eatenSushi}/>
        <SushiWallet addMoney={this.addMoney} recordMoney={this.recordMoney}/>
      </div>
    );
  }
}

export default App;

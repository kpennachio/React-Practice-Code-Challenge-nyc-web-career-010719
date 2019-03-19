import React, { Fragment } from 'react'

const SushiWallet = (props) => {



  return (
    <Fragment>
      <h2>Sushi Wallet</h2>
      <form onSubmit={props.addMoney}>
        <label for="money">Add money to wallet</label>
        <input type="number" id="money" name="money" onChange={props.recordMoney}></input>
        <input type="submit"></input>
      </form>
    </Fragment>
  )
}

export default SushiWallet

import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const renderSushi = () => {
    let allSushi = props.sushis.map(sushi => {
      let eaten = false
      if (props.eatenSushi.includes(sushi)) {
        eaten = true
      }
      return <Sushi sushi={sushi} eatSushi={props.eatSushi} eaten={eaten}/>
    })
    return allSushi.slice(props.sliceBegin, props.sliceEnd)
  }

  return (


    <Fragment>
      <div className="belt">
        {renderSushi()}
        <MoreButton changeSlice={props.changeSlice}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer

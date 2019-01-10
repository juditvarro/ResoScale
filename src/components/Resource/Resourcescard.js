import React from 'react';
import Resource from './Resource'

const resourcescard = (props) => {
  console.log(props.resources)

  const resObject = props.resources
  console.log(resObject)

  const fuck = { brain: "Brain", energy: "Energy", freetime: "Freetime", health: "Health", money: "Money" }

  const resourcelist = Object.keys(fuck).map((resKey) => {
    return <Resource resourceName={resKey} budget={fuck[resKey]} />
  })

  return (<div>{resourcelist}</div>)
}

export default resourcescard
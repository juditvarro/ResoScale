import React from 'react';
import classes from './ResourceBarNew.css';
import Spinner from '../UI/Spinner/Spinner';

const BarGroup = props => {
  let barPadding = 2
  let widthScale = name => name * 10
  let width = widthScale(props.value)
  let yMid = props.barHeight * 0.5

  let barColour = ''

  if (props.value <= 5) {
    barColour = '#eb4d4b'
  } else {
    barColour = '#00b894'
  }

  return <g className={classes.bargroup}>
    <text className={classes.namelabel} x="-2" y={yMid} alignmentBaseline="middle" >{props.name}</text>
    <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
    <text className={classes.valuelabel} x={width - 8} y={yMid} alignmentBaseline="middle" >{props.value}</text>
  </g>
}


const ResourceBarNew = ({ resources }) => {
  if (resources === null) {
    return <Spinner />
  }
  else {
    const resourceName = Object.keys(resources)
    const resourceValue = Object.values(resources)
    let barHeight = 30
    let barGroups = resourceName.map((d, i) => <g key={Math.random()} transform={`translate(0, ${i * barHeight})`}>
      <BarGroup name={d} value={resourceValue[i]} barHeight={barHeight} />
    </g>)

    return <div className={classes.ResourceBar}>
      <svg width="800" height="300" >
        <g className={classes.container}>
          <g className={classes.chart} transform="translate(100,60)">
            {barGroups}
          </g>
        </g>
      </svg>
    </div>
  }
}

export default ResourceBarNew;

import React, { Component } from 'react'
import withCounter from "../components/withCounter"


export class LikeImage extends Component {
  render() {
    const {count,increment} = this.props
    return (
      <button onClick={increment}>Like image {count}</button>
    )
  }
}

export default withCounter(LikeImage)
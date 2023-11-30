import React, { Component } from 'react'

const withCounter = OldComponent => {
  class NewComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment(){
      this.setState({
        count: this.state.count + 1
      })
    }

    render() {
      return <OldComponent count={this.state.count} increment={() => this.increment()} {...this.props}/>
    }
  }

  return NewComponent
}

export default withCounter
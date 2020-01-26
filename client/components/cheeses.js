import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Cheeses extends Component {
  constructor() {
    super()
    this.state = {
      cheeses: []
    }
  }
  render() {
    return (
      <div>
        {this.state.cheeses.map(cheese => (
          <div key={cheese.id}>
            <img src={cheese.imageUrl} />
            <p>{cheese.name}</p>
          </div>
        ))}
      </div>
    )
  }
}

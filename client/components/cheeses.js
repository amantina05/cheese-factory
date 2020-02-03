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

  async componentDidMount() {
    const res = await axios.get('/api/cheeses')
    this.setState({cheeses: res.data})
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
//map to state props here

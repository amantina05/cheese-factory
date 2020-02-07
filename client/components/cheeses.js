import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {getCheese} from '../store/cheese'
import {connect} from 'react-redux'

class Cheeses extends Component {
  componentDidMount() {
    console.log('in cheeses')
    this.props.getCheese()
  }

  render() {
    // console.log('getting all', this.props.allCheeses.cheeses)
    console.log('test in cheese')
    const {cheeses} = this.props
    return (
      <div className="cheeses-component">
        {cheeses.map(cheese => {
          return (
            <ul key={cheese.id} className="cheesesList">
              <img src={cheese.imageUrl} width="190" height="190" />

              <Link to={`/cheeses/${cheese.id}`}>
                <p>{cheese.name}</p>
              </Link>
            </ul>
          )
        })}
      </div>
    )
  }
}

//what it can read from store and put on to its own props

const mapStateToProps = state => {
  console.log('Mapping state to props in Cheeses: ', state)
  return {
    // cheeses: state.allCheeses.cheeses
    cheeses: state.cheese.allCheeses
  }
}
//what can it write to store (allowed to dispatch to the store)
const mapDispatchToProps = dispatch => {
  console.log('Mapping dispatch to props in Cheeses')
  return {
    getCheese: () => dispatch(getCheese())
  }
}
//connects component to store
export default connect(mapStateToProps, mapDispatchToProps)(Cheeses)

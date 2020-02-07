import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {getWines} from '../store/wine'
import {connect} from 'react-redux'

class Wines extends Component {
  componentDidMount() {
    console.log('in wines')
    this.props.getWine()
  }

  render() {
    console.log('test in wine')
    const {wines} = this.props
    return (
      <div>
        {wines.map(wine => {
          return (
            <ul key={wine.id} className="wineList">
              <img src={wine.imageUrl} width="190" height="190" />

              <Link to={`/wines/${wine.id}`}>
                <p>{wine.name}</p>
              </Link>
            </ul>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('Mapping state to props in Wines: ', state)
  return {
    wines: state.wine.allWines
  }
}

const mapDispatchToProps = dispatch => {
  console.log('Mapping dispatch to props in Wines')
  return {
    getWine: () => dispatch(getWines())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wines)

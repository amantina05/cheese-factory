import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleWine} from '../store/wine'
import {getSingleCheese} from '../store'

class SingleWine extends Component {
  componentDidMount() {
    console.log('in single wine')
    this.props.getSingleWine(this.props.match.params.id)
  }
  render() {
    console.log('TEST IN SINGLE WINE')
    const {wine} = this.props
    return wine && wine.name ? (
      <div>
        <img src={wine.imageUrl} width="190" height="190" />
        <h3>Name:</h3>
        <h3>{wine.name}</h3>
        <h3>Description:</h3>
        <h3>{wine.description}</h3>
      </div>
    ) : (
      <div>
        <h2>
          Technical difficulties, enjoy this joke in the meantime:
          <p>What did the grape say when it was crushed?</p>
          <br />
          <p>Nothing, it just let out a little wine.</p>
        </h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('Mapping state to props in single wine: ', state)
  return {
    wine: state.wine.singleWine
  }
}

const mapDispatchToProps = dispatch => {
  console.log('Mapping dispatch to props in single wine')
  return {
    getSingleWine: id => dispatch(getSingleWine(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleWine)

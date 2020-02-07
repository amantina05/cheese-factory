import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadOneCheese, getSingleCheese} from '../store/cheese'

class SingleCheese extends Component {
  componentDidMount() {
    // console.log('in single cheese', this.props.match.params.cheeseId)
    console.log('in single cheese')
    // this.props.getSingleCheese(this.props.match.params.cheeseId)
    this.props.getSingleCheese(this.props.match.params.id)
  }
  render() {
    console.log('TEST IN SINGLE CHEESE', this.props.cheese)
    const {cheese} = this.props

    return cheese && cheese.name ? (
      <div>
        <img src={cheese.imageUrl} width="190" height="190" />
        <h3>Name:</h3>
        <h3>{cheese.name}</h3>
        <h3>Description:</h3>
        <h3>{cheese.description}</h3>
      </div>
    ) : (
      <div>
        <h2>
          Technical difficulties, enjoy this joke in the meantime:
          <p>What did the cheese say to itself in the mirror?</p>
          <br />
          <p>Looking Gouda.</p>
        </h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('Mapping state to props in Single Cheese: ', state)
  return {
    cheese: state.cheese.singleCheese
    // cheese: state.cheese
  }
}
const mapDispatchToProps = dispatch => {
  console.log('Mapping dispatch to props in Single Cheese')
  return {
    getSingleCheese: id => dispatch(getSingleCheese(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCheese)

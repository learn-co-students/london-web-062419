import React from 'react'
import Dropdown from './Dropdown';

const dropdownOptions = [
  {
    value: 'all',
    text: 'All'
  },
  {
    value: 'cat',
    text: 'Cats'
  },
  {
    value: 'dog',
    text: 'Dogs'
  },
  {
    value: 'micropig',
    text: 'Micropigs'
  }
]

class Search extends React.Component {

  state = {
    dropdownSelection: dropdownOptions[0].value
  }

  handleDropdownChange = (dropdownSelection, event) => {
    this.setState({
      dropdownSelection
    })
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <Dropdown onChange={this.handleDropdownChange} options={dropdownOptions} value={this.state.dropdownSelection} />
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={() => this.props.performSearch(this.state.dropdownSelection)}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Search

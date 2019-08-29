import React from 'react'

class SearchOptions extends React.Component {

    state = {
        searchTerm: '',
        top50: 'All'
    }

    updateSearchTerm = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    clearSearchTerm = () => {
        this.setState({
            searchTerm: ''
        })
    }

    submitForm = () => {
        this.props.submitForm(this.state.searchTerm, this.state.top50)
        this.clearSearchTerm()
    }

    render() {
        return (
            <div className="filter-options">
                <input type="text" placeholder="Search..." onChange={this.updateSearchTerm} value={this.state.searchTerm} />
                <input type='radio' checked={this.state.top50 === 'All'} name="top50" onClick={() => this.setState({ top50: 'All' })} />All
                <input type='radio' checked={this.state.top50 === 'Top 50'} name="top50" onClick={() => this.setState({ top50: 'Top 50' })} />Top 50
                <button onClick={this.clearSearchTerm}>Clear term</button>
                <button onClick={this.submitForm}>Apply filters</button>
            </div>
        )
    }
}

export default SearchOptions
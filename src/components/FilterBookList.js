import React from 'react'

class FilterBookList extends React.Component {

  state = {
    filterByType: 'title'
  }

  handleChange = (e)=>{
    this.props.filterBy(e.target.value, this.state.filterByType)
  }

  handleSwitch = (e)=>{
    console.log(e.target.value)
    let searchType = this.state.filterByType == 'title' ? 'author' : 'title'
    this.setState({filterByType: searchType})
  }

  render(){
    return(
      <div>Filter books by:
        <div className="switch">
          <label>
            Title
            <input type="checkbox" name='filterByType' onChange = {this.handleSwitch}/>
              <span className="lever"></span>
              Author
            </label>
          </div>

        <input type = 'text' name='filterByBox' onChange = {this.handleChange}></input>
      </div>
    );
  }
}

export default FilterBookList

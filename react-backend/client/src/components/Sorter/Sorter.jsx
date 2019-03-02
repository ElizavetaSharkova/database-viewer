import React, { Component } from 'react';
import './Sorter.css';

class Sorter extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    const {currentSort, fields, sorting} = this.props;
    return (

        <div>
        <span className="text-light font-weight-bold  align-middle">Sort&nbsp;by:</span>
        <div className="btn-group">
          <button className="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {currentSort}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {
              fields.map(field => 
                <button onClick={()=>sorting(field)} className="dropdown-item">{field}</button>
              )
            }
          </div>
          </div>
        </div>
          
    );
  }
}

export default Sorter;
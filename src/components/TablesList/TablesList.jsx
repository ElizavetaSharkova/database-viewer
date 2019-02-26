import React, { Component } from 'react';
import './TablesList.css';

class TablesList extends Component {
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
    const {tables, onSelected } = this.props;
   
    return (
      <div className="col-2 bg-dark text-light text-center">
        <div className="btn-group-vertical mt-4">
          { tables.map(tableName =>
                <button onClick={()=>onSelected(tableName)} type="button" className="btn btn-secondary text-left border border-info">{tableName}</button>
            )}
        </div>

      </div>
    );
  }
}

export default TablesList;
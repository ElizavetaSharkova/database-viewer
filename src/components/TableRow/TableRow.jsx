import React, { Component } from 'react';
import './TableRow.css';

class TableRow extends Component {
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
    const {rowData} = this.props;
    return (
      <tr>
      { Object.keys(rowData).map(key =>
          <td>{rowData[key]}</td> 
      )}
    </tr>
      
    );
  }
}

export default TableRow;
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
          <td><div>{this.editingFormat(rowData[key])}</div></td>    
      )}
    </tr>
      
    );
  }

  editingFormat(data){
    if(data=== null)
    {
      return " \u2013 ";
    }
    else if(typeof(data) === "object")
    {
      if (data["type"] === "Buffer")
      {
        if (data["data"].length === 1)
        {
          return data.data[0]; //// mysql server response have this data when column type=bit(1)
        }
        else return "FILE";
      }
      else return "Unknown data"
    }
    else if(typeof(data) === "boolean" || typeof(data) === "number" || typeof(data) === "string") 
    {
      return data;
    }
  }
}

export default TableRow;
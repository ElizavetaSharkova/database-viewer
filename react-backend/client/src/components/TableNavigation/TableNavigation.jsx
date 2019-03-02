import React, { Component } from 'react';
import './TableNavigation.css';

class TableNavigation extends Component {
  state ={
    numbersOfRows: [4, 8, 12, 16, 20]
  }
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
    const {rowNumbers, firstRow, arrLength, onNextRow, onPreviousRows, onChangingRowNumbers} = this.props;
    return (
      <div className="col-4 text-right px-0">
      
        
        
        <div className="btn-group dropdown align-top">
          <button type="button" className="btn btn-secondary dropdown-toggle font-weight-bold" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Rows per page
          </button>
          <div className="dropdown-menu">
            
          { this.state.numbersOfRows.map(number =>
                <button onClick={()=>onChangingRowNumbers(number)} className="dropdown-item">{number}</button>
            )}
            
          </div>
        </div>
        <div className=" mr-3 btn-group text-light font-weight-bold align-top pt-2">Rows {firstRow+1} - {this.endLineNumber(rowNumbers, firstRow, arrLength)} of {arrLength}</div>
        <div className="btn-group-vertical">
          <button onClick={onPreviousRows} className="btn btn-info  rotate">&#60;</button>
          <button onClick={onNextRow} className="btn btn-info  rotate">&#62;</button>
        </div>
      </div>
    );
  }

  endLineNumber(rowNumbers, firstRow, arrLength){
    return (firstRow+rowNumbers > arrLength)? arrLength : firstRow+rowNumbers;
  }
}

export default TableNavigation;
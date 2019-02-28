import React, { Component } from 'react';
import './TableFooter.css';

class TableFooter extends Component {
  state ={
    numbersOfRows: [4, 8, 12]
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
    const {onNextRow, onPreviousRows, onChangingRowNumbers} = this.props;
    return (
      <div className="mx-3">
        <button onClick={onPreviousRows} className="btn btn-dark mt-3 ">Previous</button>
        <button onClick={onNextRow} className="btn btn-dark mt-3 mx-3">Next</button>
        <div className="btn-group dropright">
          <button type="button" className="btn btn-secondary dropdown-toggle mt-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Count of rows
          </button>
          <div className="dropdown-menu">
            
          { this.state.numbersOfRows.map(number =>
                <button onClick={()=>onChangingRowNumbers(number)} className="dropdown-item">{number}</button>
            )}
            
          </div>
        </div>
      </div>
    );
  }
}

export default TableFooter;
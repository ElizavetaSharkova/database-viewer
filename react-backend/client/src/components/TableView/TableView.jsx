import React, { Component } from 'react';
import './TableView.css';
import TableRow from '../TableRow/TableRow.jsx';
import TableFooter from '../TableFooter/TableFooter.jsx'

class TableView extends Component {
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
    const {rows, tableName, onNextRow, onPreviousRows, onChangingRowNumbers} = this.props;

    return (
      <div className="col-10 bg-secondary px-5 pt-2">
        <h2 className="fas fa-h2 text-light font-weight-bold m-3">{tableName}</h2>
        <div  className="overflow-x">
        <table className="table table-dark table-striped table-bordered m-3 ">
          <thead>
            <tr>
              { console.log(Object.keys(rows[0]))}
                {Object.keys(rows[0]).map(key =>
                  <th>{key}</th> 
              )}
            </tr>
          </thead>
          <tbody>
            { rows.map(rowData =>
                <TableRow 
                    key={rowData.id} 
                    rowData={rowData}
                />
            )}
          </tbody>
        </table>
        </div>
        <TableFooter
            onNextRow ={onNextRow}
            onPreviousRows ={onPreviousRows}
            onChangingRowNumbers ={(newNumber)=>onChangingRowNumbers(newNumber)}
        />
      </div>
    );
  }
}

export default TableView;
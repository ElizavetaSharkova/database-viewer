import React, { Component } from 'react';
import './TableView.css';
import TableRow from '../TableRow/TableRow.jsx';
import TableNavigation from '../TableNavigation/TableNavigation.jsx'
import Sorter from '../Sorter/Sorter.jsx'
import Finder from '../Finder/Finder.jsx'

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
    const {currentFinder, finding, onUpdateFinder, currentSort, sorting, rowNumbers, firstRow, arrLength, rows, tableName, onNextRow, onPreviousRows, onChangingRowNumbers, onSelected} = this.props;

    return (
      <div className="col-10 bg-secondary px-4 pt-2">
        <h2 className="fas fa-h2 text-light font-weight-bold m-3">{tableName}</h2>
        <div className="row ml-3 mr-0">
        <div className="dropdown col-8 px-0">
        

        <Finder 
          currentFinder = {currentFinder}
          finding = {finding}
          fields = {Object.keys(rows[0])}
          onUpdateFinder = {(updatedProperty, property) => onUpdateFinder(updatedProperty, property)}
          onReset = {onSelected}/>
          <Sorter 
          currentSort = {currentSort}
          sorting = {(fieldName) => sorting(fieldName)}
          fields = {Object.keys(rows[0])}/>
          </div>
        <TableNavigation
            rowNumbers= {rowNumbers}
            firstRow = {firstRow}
            arrLength = {arrLength}
            onNextRow ={onNextRow}
            onPreviousRows ={onPreviousRows}
            onChangingRowNumbers ={(newNumber)=>onChangingRowNumbers(newNumber)}
        />
        </div>
        <div  className="overflow-x">
        <table className="table table-dark table-striped table-bordered m-3 ">
          <thead>
            <tr>
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
       
      </div>
    );
  }
}

export default TableView;
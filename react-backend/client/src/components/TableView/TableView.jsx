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
    // const table =  {
    //   name: 'People',
    //   data: [
    //     {id: 1, firstName: 'Mark', lastName: 'Jio', address: 'Moscow', phone: '89993242345254'},
    //     {id: 2, firstName: 'Mark1', lastName: 'Jio1', address: 'Moscow', phone: '89993242345'},
    //     {id: 3, firstName: 'Mark2', lastName: 'Jio2', address: 'Moscow', phone: '899935254'},
    //     {id: 4, firstName: 'Mark3', lastName: 'Jio3', address: 'Moscow', phone: '89993245254'},
    //     {id: 5, firstName: 'Mark4', lastName: 'Jio4', address: 'Moscow', phone: '93242345254'},
    //     {id: 6, firstName: 'Mark5', lastName: 'Jio5', address: 'Moscow', phone: '899242345254'},
    //     {id: 7, firstName: 'Mark6', lastName: 'Jio6', address: 'Moscow', phone: '899954'}
    //   ]
    // }
    return (
      <div className="col-10 bg-secondary px-5 pt-2">
        <h2 className="fas fa-h2 text-light font-weight-bold m-3">{tableName}</h2>
        <table className="table table-dark table-bordered m-3 ">
          <thead>
            <tr>
              { Object.keys(rows[0]).map(key =>
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
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import TablesList from './components/TablesList/TablesList.jsx';
import TableView from './components/TableView/TableView.jsx';


class App extends Component {
  state={
    rowNumbers: 5,
    firstRow: 0,
    tables: [],
    currentTable:  {
      name: 'People',
      data: [
        {id: 1, firstName: 'Mark', lastName: 'Jio', address: 'Moscow', phone: '89993242345254'},
        {id: 2, firstName: 'Mark1', lastName: 'Jio1', address: 'Moscow', phone: '89993242345'},
        {id: 3, firstName: 'Mark2', lastName: 'Jio2', address: 'Moscow', phone: '899935254'},
        {id: 4, firstName: 'Mark3', lastName: 'Jio3', address: 'Moscow', phone: '89993245254'},
        {id: 5, firstName: 'Mark4', lastName: 'Jio4', address: 'Moscow', phone: '93242345254'},
        {id: 6, firstName: 'Mark5', lastName: 'Jio5', address: 'Moscow', phone: '899242345254'},
        {id: 7, firstName: 'Mark6', lastName: 'Jio6', address: 'Moscow', phone: '899954'}
      ]
    }
  };

  componentDidMount(){

    fetch('/db').then(res => res.json())
      .then(data => {
        let tables = [];
        data.forEach(d => {
          tables.push(d['Tables_in_northwind']);
        });
        console.log(tables);
        this.setState({
          tables: tables
      })})
  }

  changingRowNumbers(newNumber){
    this.setState({
      rowNumbers: newNumber
    });
  }

  nextRows(){
    if (this.state.firstRow + this.state.rowNumbers < this.state.currentTable.data.length)
    {
      this.setState({
        firstRow: this.state.firstRow + this.state.rowNumbers
      });
    }
  }

  previousRows(){
    let firstRow = this.state.firstRow;
    if (firstRow - this.state.rowNumbers > 0)
    {
      firstRow = firstRow - this.state.rowNumbers;
    }
    else 
      firstRow = 0;
    this.setState({
      firstRow: firstRow
    });
  }

  selectTable(tableName){
    
///todo: download data from db here

let currentTable = {
  name: tableName,
  data: []
};

fetch('/db/'+tableName).then(res => res.json())
      .then(dbdata => {
        currentTable.data = dbdata;
        console.log(currentTable);
        this.setState({
          currentTable: currentTable,
          firstRow: 0
      })})

/////
    // switch(tableName){
    //   case 'People': 
    //   currentTable = {
    //       name: 'People',
    //       data: [
    //         {id: 1, firstName: 'Mark', lastName: 'Jio', address: 'Moscow', phone: '89993242345254'},
    //         {id: 2, firstName: 'Mark1', lastName: 'Jio1', address: 'Moscow', phone: '89993242345'},
    //         {id: 3, firstName: 'Mark2', lastName: 'Jio2', address: 'Moscow', phone: '899935254'},
    //         {id: 4, firstName: 'Mark3', lastName: 'Jio3', address: 'Moscow', phone: '89993245254'},
    //         {id: 5, firstName: 'Mark4', lastName: 'Jio4', address: 'Moscow', phone: '93242345254'},
    //         {id: 6, firstName: 'Mark5', lastName: 'Jio5', address: 'Moscow', phone: '899242345254'},
    //         {id: 7, firstName: 'Mark6', lastName: 'Jio6', address: 'Moscow', phone: '899954'}
    //       ]
    //     };
    //     break;

    //   case 'Departments': 
    //   currentTable = {
    //     name: 'Departments',
    //     data: [
    //       {id: 1, title: 'Owners', description: 'gaergaergargvar'},
    //       {id: 2, firstName: 'Managers',  description: 'gaergaergargvar'},
    //       {id: 3, firstName: 'Directors',  description: 'gaergaergargvar'},
    //       {id: 4, firstName: 'Developers',  description: 'gaergaergargvar'},
    //       {id: 5, firstName: 'Testers',  description: 'gaergaergargvar'},
    //       {id: 6, firstName: 'Designers',  description: 'gaergaergargvar'},
    //       {id: 7, firstName: 'HR',  description: 'gaergaergargvar'}
        
    //       ]
    //     };
    //     break;
    //   case 'PeopleDepartments': 
    //   currentTable = {
    //     name: 'PeopleDepartments',
    //     data: [
    //       {id: 1, peopleId: 1, departmentsId: 1},
    //       {id: 2, peopleId: 1, departmentsId: 2},
    //       {id: 3, peopleId: 1, departmentsId: 3},
    //       {id: 4, peopleId: 1, departmentsId: 4},
    //       {id: 5, peopleId: 1, departmentsId: 5},
    //       {id: 6, peopleId: 1, departmentsId: 6},
    //       {id: 7, peopleId: 1, departmentsId: 7},
    //       {id: 8, peopleId: 2, departmentsId: 1},
    //       {id: 9, peopleId: 3, departmentsId: 2},
    //       {id: 10, peopleId: 4, departmentsId: 3},
    //       {id: 11, peopleId: 5, departmentsId: 4},
    //       {id: 12, peopleId: 6, departmentsId: 5},
    //       {id: 13, peopleId: 7, departmentsId: 6},
    //       {id: 14, peopleId: 2, departmentsId: 7}
        
    //       ]
    //     };
    //     break;
       
    // };
    // this.setState({
    //   currentTable: currentTable,
    //   firstRow: 0
    // });
  }


  render() {
    return (
      <div className="App">      
        <Header/>      
        <div className="row mx-0">
        <TablesList key={1} tables={this.state.tables} onSelected={(tableName)=>this.selectTable(tableName)}/>
          
        <TableView key={2} 
            onNextRow ={()=>this.nextRows()}
            onPreviousRows ={()=>this.previousRows()}
            onChangingRowNumbers ={(newNumber)=>this.changingRowNumbers(newNumber)}
            tableName = {this.state.currentTable.name} 
            rows = {this.state.currentTable.data.filter(r=> 
                            this.state.currentTable.data.indexOf(r)>= this.state.firstRow &&
                            this.state.currentTable.data.indexOf(r)< this.state.firstRow + this.state.rowNumbers
                    )}/>
        </div>
        
        
        </div>
        
    );
  }
}

export default App;

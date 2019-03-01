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
    currentTable :{
             name: '',
             data: [
               {id: 1}
             ]
           }
  };
  componentWillMount(){
    this.selectTable('categories'); //I will edit it later
  }

  componentDidMount(){
    let tables = [];
    fetch('/db').then(res => res.json())
      .then(data => {
        
        data.forEach(d => {
          tables.push(d['TABLE_NAME']);
        });
        console.log(tables);
        this.setState({
          tables: tables
      })});

      
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
if (tableName.indexOf(' ') !== -1)
tableName = tableName.replace( /\s/g, "%20");

fetch('/db/'+tableName).then(res => res.json())
      .then(dbdata => {
        currentTable.data = dbdata;
        console.log(currentTable);
        this.setState({
          currentTable: currentTable,
          firstRow: 0
      })});

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

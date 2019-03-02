import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import TablesList from './components/TablesList/TablesList.jsx';
import TableView from './components/TableView/TableView.jsx';


class App extends Component {
  state={
    rowNumbers: 5,
    firstRow: 0,
    currentSort: '',
    tables: [],
    currentFinder:{
      field: '',
      sign: '=',
      text: ''
    },
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
        this.setState({
          tables: tables
      })});

      
  }

  finding(){
    let sign = this.state.currentFinder.sign;
    let tableData;
    if(sign ==="="){
      tableData= this.state.currentTable.data.filter(d => ''+d[this.state.currentFinder.field] === this.state.currentFinder.text)
    }
    else  if(sign ==="!="){
      tableData=this.state.currentTable.data.filter(d => ''+d[this.state.currentFinder.field] !== this.state.currentFinder.text)
    }
    else  if(sign ===">"){
      tableData=this.state.currentTable.data.filter(d => d[this.state.currentFinder.field] > this.state.currentFinder.text)
    }
    else  if(sign ==="<"){
      tableData=this.state.currentTable.data.filter(d => d[this.state.currentFinder.field] < this.state.currentFinder.text)
    }
    else  if(sign ===">="){
      tableData=this.state.currentTable.data.filter(d => d[this.state.currentFinder.field] >= this.state.currentFinder.text)
    }
    this.state.currentTable.data = tableData;
    this.setState({
      currentTable: this.state.currentTable,
      firstRow: 0
    });
    
    
  }

  onUpdateFinder(updatedProperty, property){
    let currentFinder = this.state.currentFinder;
      currentFinder[updatedProperty] = property;
    this.setState({
      currentFinder: currentFinder
    })
  }
  

  sorting(fieldName){
    this.state.currentTable.data.sort(compare);
    function compare(a,b) {
      if (a[fieldName] < b[fieldName])
        return -1;
      if (a[fieldName] > b[fieldName])
        return 1;
      return 0;
    };

    this.setState({
      currentTable: this.state.currentTable,
      firstRow: 0,
      currentSort: fieldName
    });
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
    let currentTable = {
  name: tableName,
  data: []
};
if (tableName.indexOf(' ') !== -1)
tableName = tableName.replace( /\s/g, "%20");

fetch('/db/'+tableName).then(res => res.json())
      .then(dbdata => {
        currentTable.data = dbdata;
        this.setState({
          currentTable: currentTable,
          currentSort: '',
          firstRow: 0,
          currentFinder:{
            field: '',
            sign: '=',
            text: ''
          }
      })});

  }

  displayingTableData(){
    if(this.state.currentTable.data.length == 0){
      this.state.currentTable.data.push({data: 'No entry'})
      return this.state.currentTable.data;
    }
    else return this.state.currentTable.data.filter(r=> 
      this.state.currentTable.data.indexOf(r)>= this.state.firstRow &&
      this.state.currentTable.data.indexOf(r)< this.state.firstRow + this.state.rowNumbers
      )
  }


  render() {
    return (
      <div className="App">      
        <Header/>      
        <div className="row mx-0">
        <TablesList key={1} tables={this.state.tables} onSelected={(tableName)=>this.selectTable(tableName)}/>
          
        <TableView key={2}
            currentFinder = {this.state.currentFinder}
            finding = {()=>this.finding()}
            onUpdateFinder = {(updatedProperty, property) => this.onUpdateFinder(updatedProperty, property)}
            currentSort = {this.state.currentSort}
            sorting = {(fieldName)=> this.sorting(fieldName)}
            rowNumbers= {this.state.rowNumbers}
            firstRow = {this.state.firstRow}
            arrLength = {this.state.currentTable.data.length}
            onNextRow ={()=>this.nextRows()}
            onPreviousRows ={()=>this.previousRows()}
            onChangingRowNumbers ={(newNumber)=>this.changingRowNumbers(newNumber)}
            tableName = {this.state.currentTable.name} 
            rows = {this.displayingTableData()}
            onSelected={()=>this.selectTable(this.state.currentTable.name)}/>
        </div>
        
        
        </div>
        
    );
  }
}

export default App;

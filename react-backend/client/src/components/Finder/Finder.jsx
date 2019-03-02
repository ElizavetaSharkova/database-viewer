import React, { Component } from 'react';
import './Finder.css';

class Finder extends Component {
  state ={
    mathSing: ['=', '!=', '>', '<', '>=']
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
    const {currentFinder, fields, finding, onUpdateFinder, onReset} = this.props;
    return (

      <React.Fragment>
      <span className="text-light font-weight-bold  align-middle"> Find:</span>
      <div className="btn-group">
        <button className="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {currentFinder.field}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          {
            fields.map(field => 
              <button onClick={()=>onUpdateFinder('field', field)} className="dropdown-item">{field}</button>
            )
          }
        </div>
        </div>
        <div className="btn-group">
        <button className="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {currentFinder.sign}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
          {
            this.state.mathSing.map(sign => 
              <button onClick={()=>onUpdateFinder('sign', sign)} className="dropdown-item">{sign}</button>
            )
          }
        </div>
        </div>
        <input value={currentFinder.text} onChange={(evt)=>onUpdateFinder('text', evt.target.value)} type="text" name="" id=""/>
        <button onClick={finding} className="btn btn-info mx-2">Find!</button>
        <button onClick={onReset} className="btn btn-info mx-2">Reset Search</button>
      </React.Fragment>
          
    );
  }
  
  
}

export default Finder;
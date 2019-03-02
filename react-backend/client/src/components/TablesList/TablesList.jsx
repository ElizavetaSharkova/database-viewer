import React, { Component } from 'react';
import './TablesList.css';

class TablesList extends Component {

  render() {
    const { tables, onSelected } = this.props;

    return (
      <div className="col-2 bg-dark text-light">
        <h4 className="my-2">Tables:</h4>
        <div className="btn-group-vertical">
          {tables.map(tableName =>
            <button onClick={() => onSelected(tableName)} type="button" className="btn btn-secondary text-left border border-info">{tableName}</button>
          )}
        </div>

      </div>
    );
  }
}

export default TablesList;
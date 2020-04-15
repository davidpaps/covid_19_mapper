import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

class TableContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      field: null,
      order: null
    }
  }

  handleSort = (field, order) => {
    this.setState({
      field,
      order
    });
  }

  // handleSortById = () => {
  //   this.setState({
  //     field: 'confirmed',
  //     order: 'desc'
  //   });
  // }
  render() {
    const columns = [{
      dataField: 'country',
      text: 'Country',
      sort: true,
      onSort: this.handleSort
    }, {
      dataField: 'confirmed',
      text: 'Total Cases',
      sort: true,
      onSort: this.handleSort
    }, {
      dataField: 'activeCases',
      text: 'Active Cases',
      sort: true,
      onSort: this.handleSort
    }, {
      dataField: 'recovered',
      text: 'Recovered',
      sort: true,
      onSort: this.handleSort,
    }, {
      dataField: "deaths",
      text: "Deaths",
      sort: true,
      onSort: this.handleSort
    }, {
      dataField: "criticalCases",
      text: "Critical Cases",
      sort: true,
      onSort: this.handleSort
    }, {
      dataField: 'perOneMillion',
      text: 'Cases Per 1Million People',
      sort: true,
      onSort: this.handleSort,
    }, {
      dataField: "cfr",
      text: "C.F.R",
      sort: true,
      onSort: this.handleSort
    }];
    return (
      <div>
        {/* <button className="btn btn-danger" onClick={this.handleSortById}>Sort By ID</button> */}
        <BootstrapTable 
          id="bootstrap-table" 
          striped={true}
          keyField="id"
          data={this.props.countries}
          columns={columns}
          sort={{
            dataField: this.state.field,
            order: this.state.order
          }}
        />
      </div>
    );
  }
}


export default TableContainer;
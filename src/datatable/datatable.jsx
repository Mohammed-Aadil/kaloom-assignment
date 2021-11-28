import React from "react";
import styled from 'styled-components';
import Header from "./heading";
import RowList from "./row";


const Table = styled.table`
border-spacing: 0px;
background: #fff;
box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
width:100%;
`;

const TableContainer = styled.div`
max-width:100vw;
`;

const XOverFlow = styled.div`
overflow-x:auto;
`;

const TableCaption = styled.caption`
margin: 25px;
font-size: 22px;
font-weight: bold;
`

export default class Datatable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tableData: {
            headings: this.getColumns(props.data[0]),
            rows: props.data
        }};
        this.sortFunc = this.sortData.bind(this);
    }

    sortData(fieldName, sortType, colIndex) {
        // setting sorttype of sorted field to update UI
        this.state.tableData.headings.map((elem) => {
            let boolResult = elem.field === fieldName;
            if (boolResult)
                elem.sortType = sortType;
            else
                elem.sortType = null;
            return boolResult;
        });
        // sorting table data
        this.state.tableData.rows.sort((firstElem, secondElem) => {
            if (firstElem[fieldName] > secondElem[fieldName])
                return sortType * 1;
            if (firstElem[fieldName] < secondElem[fieldName])
                return sortType * -1;
            return 0
        });
        this.setState({tableData: {headings: this.state.tableData.headings, rows: this.state.tableData.rows}});
    }

    getColumns(data) {
        let columns = []
        for(let key in data) {
            if (data.hasOwnProperty(key)) {
                columns.push({
                    header: key[0].toUpperCase() + key.slice(1),
                    field: key,
                    sortable: true
                });
            }
        }
        return columns;
    }

    render() {
        return (
            <TableContainer>
                <XOverFlow>
                    <Table>
                        <TableCaption>User Data</TableCaption>
                        <thead>{<Header headings={this.state.tableData.headings} sortFunc={this.sortFunc} />}</thead>
                        <tbody>{<RowList rows={this.state.tableData.rows} headings={this.state.tableData.headings} />}</tbody>
                    </Table>
                </XOverFlow>
            </TableContainer>
        );
    }
}
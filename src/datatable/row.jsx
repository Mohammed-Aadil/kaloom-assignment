import React from "react";
import Cell from "./cell";
import styled from 'styled-components';

const TRow = styled.tr`
&:hover {
    background-color: #f4f6f8;
}
`;

const Row = (props) => {
    const {rowData, headings, rowPos} = props;
    return (
        <TRow>
            {headings.map((col, index) => <Cell key={'col'+index+rowPos} content={rowData[col.field]}/>)}
        </TRow>
    );
};

const RowList = (props) => {
    const {rows, headings} = props;
    return rows.map((row, index) => <Row key={'row'+index} rowPos={index} rowData={row} headings={headings} />);
};

export default RowList;
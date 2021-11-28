import React from 'react';
import styled from 'styled-components';


const commotStyle = `
border: 1px solid #f4f6f8;
padding: 4px;
text-align: left;
min-width:150px;
`;

const CellHeaderElem = styled.th`
font-weight:500;
${commotStyle}
${props => props.sortable ? `cursor:pointer`: ``}
`;

const CellElem = styled.td`
word-break:break-all;
${commotStyle}
`;

const Cell = (props) => {
    const {header, content, sortFunc} = props;
    const sortMap = {
        '1': '+*',
        '-1': '-*'
    };
    const getSortType = (sortType) => {
        return sortType === undefined ? 1 : sortType === 1 ? -1 : 1
    };
    return header ? (
        <CellHeaderElem 
            sortable={content.sortable}
            onClick={() => content.sortable ? sortFunc(content.field, getSortType(content.sortType)): {}}>
                {content.header} {content.sortType ? sortMap[content.sortType]: ''}
        </CellHeaderElem>
    ) : (
        <CellElem >{content}</CellElem>
    )
};

export default Cell;
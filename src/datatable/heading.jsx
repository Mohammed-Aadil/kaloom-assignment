import React from "react";
import Cell from "./cell";

const Header = (props) => {
    const {headings, sortFunc} = props;
    return headings.map((headerDetails, headIndex) => <Cell header key={'heading-'+headIndex} sortFunc={sortFunc} content={headerDetails} />)
};

export default Header;
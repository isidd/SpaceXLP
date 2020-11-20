import React from 'react';
import { Col } from 'reactstrap'

export const QueryComponenet = ({ value, setHandler, cond , qry }) => {
    console.log(cond,qry,value)
    return(
    <Col className="mt-3 text-center" xl={6} lg={6} md={6} sm={6} xs={12}>
        <button onClick={() => { setHandler(value) }} style={{ width: "100%", borderRadius: "5px", backgroundColor: !(cond[qry] == value) ? "#c1efc1" : "rgb(78 144 78)", border: "1px" }}>
            {value.toString()}
        </button>
    </Col>
)}
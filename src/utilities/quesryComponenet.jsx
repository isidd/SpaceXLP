import React from 'react' ;
import {Col} from 'reactstrap'

export const QueryComponenet = ({ value, setHandler, cond }) => (
    <>
      <Col className="mt-3" md={6}><button onClick={() => { setHandler(value) }} style={{ width: "70%", borderRadius: "5px", backgroundColor: !(cond == value) ? "#c1efc1" : "rgb(78 144 78)", border: "1px" }}>{value.toString()}</button></Col>
    </>
  )

import React from 'react'
import {Row,Col,Card,CardBody} from 'reactstrap'
import {QueryComponenet} from './../utilities/quesryComponenet'
import {years,boolValue} from './../helper/parameter.json'
import './../App.css'



export const ParameterComponent = ({setYearHandler,setLaunchHandler,setLandHandler,cond}) => (
    <Card className={"col-two"} className="mb-4">
        <CardBody>
            <Row>
                <Col >
                    <strong> Filters</strong>
                </Col>
            </Row>

            <Row>
                <Col className="text-center">
                    Launch year
        <hr />
                </Col>
            </Row>

            <Row >
                {/* Componenet Responsible for showing Filter Parameters (Year) */}
                {JSON.parse(years).map((year) => {
                    return (<QueryComponenet key={year} setHandler={setYearHandler}  value={year} qry={'launch_year'} cond={cond} />)

                })}
            </Row>

            <Row className="mt-4">
                <Col className="text-center">
                    Sucessfull Launch
        <hr />
                </Col>
            </Row>
            <Row>
                {/* Componenet Responsible for showing Filter Parameters (Launch) */}
                {JSON.parse(boolValue).map((boolValue,index) => {
                    return <QueryComponenet key={index} setHandler={setLaunchHandler}  value={boolValue.toString()} qry={'launch_success'} cond={cond} />
                })}
            </Row>

            <Row className="mt-4">
                <Col className="text-center">
                    Sucessfull Landing
        <hr />

                </Col>
            </Row>

            <Row className="mb-3">
                {/* Componenet Responsible for showing Filter Parameters (Land) */}
                {JSON.parse(boolValue).map((boolValue,index) => {
                    return <QueryComponenet key={index} setHandler={setLandHandler} value={boolValue.toString()}   qry={'land_success'} cond={cond}/>
                })}
            </Row>

        </CardBody>

    </Card>)
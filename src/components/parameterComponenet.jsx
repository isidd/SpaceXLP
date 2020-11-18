import React from 'react'
import {Row,Col,Card,CardBody} from 'reactstrap'
import {QueryComponenet} from './../utilities/quesryComponenet'
import {years,boolValue} from './../helper/parameter.json'




export const ParameterComponent = ({setYearHandler,queryYear,setLaunchHandler,getlaunch,setLandHandler,getLand}) => (
    <Card>
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
                {JSON.parse(years).map((year) => {
                    return (<QueryComponenet setHandler={setYearHandler} value={year} cond={queryYear} />)

                })}
            </Row>



            <Row className="mt-4">
                <Col className="text-center">
                    Sucessfull Launch
        <hr />
                </Col>
            </Row>
            <Row>
                {JSON.parse(boolValue).map((boolValue) => {
                    return <QueryComponenet setHandler={setLaunchHandler} value={boolValue.toString()} cond={getlaunch} />
                })}
            </Row>


            <Row className="mt-4">
                <Col className="text-center">
                    Sucessfull Landing
        <hr />

                </Col>
            </Row>

            <Row className="mb-3">
                {JSON.parse(boolValue).map((boolValue) => {
                    return <QueryComponenet setHandler={setLandHandler} value={boolValue.toString()} cond={getLand} />
                })}
            </Row>

        </CardBody>

    </Card>)
import React, { useState, useEffect } from "react";
import { Card, Row, Col, CardBody, CardHeader, CardImg } from 'reactstrap'
import { ParameterComponent } from './parameterComponenet'
import { ResultComponent } from './resultComponenet'



export default function SpaceXlp(props) {



  const [spaceXlpData, setSpaceXlpData] = useState([])
  const [servedData, setServedData] = useState([])
  const [page, setPage] = useState(0)

  const [getYearQuery, setYearQuery] = useState('')
  const [queryYear, setQueryYear] = useState('')
  const [getLaunchQuery, setLaunchQuery] = useState('')
  const [getlaunch, setLaunch] = useState('')
  const [getLandQuery, setLandQuery] = useState('')
  const [getLand, setLand] = useState('')


  const setYearHandler = (year) => {

    setQueryYear(year)
    let url = `&launch_year=${year}`;
    setYearQuery(url)
  }

  const setLaunchHandler = (value) => {
    setLaunch(value)
    let url = `&launch_success=${value}`;
    setLaunchQuery(url);
  }


  const setLandHandler = (value) => {
    setLand(value)
    let url = `&land_success=${value}`;
    setLandQuery(url)
  }



  useEffect(() => {
    props._onPageData(page)
  }, [])

  useEffect(() => {
    let servData = [...spaceXlpData]
    setServedData(servData.sort((a, b) => a.flight_number > b.flight_number).slice(8 * (page), 8 * (page + 1)))
  }, [page])

  useEffect(() => {
    setSpaceXlpData(props.state.user.data)
    let servData = [...props.state.user.data]
    setServedData(servData.sort((a, b) => a.flight_number > b.flight_number).slice(page, 8 * (page + 1)))
  }, [props.state.user.data])


  useEffect(() => {
    let finalQuery = ''.concat(getYearQuery).concat(getLaunchQuery).concat(getLandQuery)
    props._onPageData(finalQuery)
  }, [getYearQuery, getLandQuery, getLaunchQuery])


  return (
    <Card >
      <CardHeader>
        <Row>
          <Col>
            <strong> SpaceX Launch Programs</strong>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={2}>
            <ParameterComponent
              setYearHandler={setYearHandler}
              setQueryYear={setQueryYear}
              queryYear={queryYear}
              setLaunchHandler={setLaunchHandler}
              getlaunch={getlaunch}
              setLandHandler={setLandHandler}
              getLand={getLand}
            />
          </Col>
          <Col md={9}>
            {!props.state.user.isLoading ?
              <ResultComponent
                servedData={servedData} />
              :
              <>Loading...</>
            }
          </Col>
        </Row>

        {spaceXlpData.length > 8 && <Row>
          <Col className="text-right">
            {page > 0 ? <span style={{ cursor: "pointer" }} onClick={() => setPage(page - 1)}> {"Prev"}</span> : <span style={{ cursor: "pointer",color:'grey' }} > {"Prev"}</span>}
          </Col>
          |
          <Col className="text-left">
            {page < (spaceXlpData.length/8)-1 ? <span style={{ cursor: "pointer" }} onClick={() => setPage(page + 1)}> {"Next"}</span> : <span style={{ cursor: "pointer",color:"grey" }}> {"Next"}</span>}

          </Col>
        </Row>}

      </CardHeader>
    </Card>
  )
}

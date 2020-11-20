import React, { useState, useEffect } from "react";
import { Card, Row, Col, CardHeader } from 'reactstrap'
import { ParameterComponent } from './parameterComponenet'
import { ResultComponent } from './resultComponenet'
import {CreateQueryString , DeleteQueryString , ReplaceQueryString} from './../utilities/quesryHandler'

import { useLocation } from "react-router";
import queryString from 'query-string'



export default function SpaceXlp(props) {

  const loc = useLocation()
  const values = queryString.parse(props.location.search)

  // Setting initial State

  const [spaceXlpData, setSpaceXlpData] = useState([])
  const [servedData, setServedData] = useState([])
  const [page, setPage] = useState(0)





  // Handle for chaning Year events
  const setYearHandler = (year) => {
    let url;
    if (loc.search.includes('launch_year')) {
      if (values['launch_year'] == year) {
        url = DeleteQueryString('launch_year',loc)
      } else {
        url = ReplaceQueryString('launch_year', year,values)
      }
    } else {
      url = CreateQueryString('launch_year', year , loc)
    }
    props.history.push(url)
  }

  // Handle for chaning Launch events
  const setLaunchHandler = (value) => {
    let url;
    if (loc.search.includes('launch_success')) {
      if (values['launch_success'] == value) {
        url = DeleteQueryString('launch_success',loc)
      } else {
        url = ReplaceQueryString('launch_success', value , values)
      }
    } else {
      url = CreateQueryString('launch_success', value,loc)
    }
    props.history.push(url)
  }

  // Handle for chaning Land events
  const setLandHandler = (value) => {
    let url;
    if (loc.search.includes('land_success')) {
      if (values['land_success'] == value) {
        url = DeleteQueryString('land_success',loc)
      } else {
        url = ReplaceQueryString('land_success', value,values)
      }
    } else {
      url = CreateQueryString('land_success', value,loc)
    }
    props.history.push(url)
  }



  // First time on page
  useEffect(() => {
    props._onPageData(loc.search) // all launch data fetching
  }, [])


  useEffect(() => {
    // On Parameter change
    props._onPageData(loc.search)
  }, [loc.search])




  // Setting pagination for initial case
  useEffect(() => {
    setSpaceXlpData(props.state.user.data)
    let servData = [...props.state.user.data]
    setServedData(servData.sort((a, b) => a.flight_number > b.flight_number).slice(page, 8 * (page + 1)))
  }, [props.state.user.data])


  // setting resutls after page change 
  useEffect(() => {
    let servData = [...spaceXlpData]
    // 8 results for pages depending on which page
    setServedData(servData.sort((a, b) => a.flight_number > b.flight_number).slice(8 * (page), 8 * (page + 1)))
  }, [page])



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
            {/* Parameter Component responsible for showing Year 
                    Launch Land parameter */}
            <ParameterComponent
              setYearHandler={setYearHandler}
              setLaunchHandler={setLaunchHandler}
              setLandHandler={setLandHandler}
              cond = {values}
            />
          </Col>

          <Col md={10}>
            {/* Result Componenet responsible for 
                  showing results coming after hitting API */}
            {!props.state.user.isLoading ?
              <ResultComponent
                servedData={servedData} />
              :
              <>Loading...</>
            }
          </Col>

        </Row>

        {/* Pagination View */}
        {spaceXlpData.length > 8 && <Row>
          <Col className="text-right">
            {page > 0 ? <span style={{ cursor: "pointer" }} onClick={() => setPage(page - 1)}> {"Prev"}</span> : <span style={{ cursor: "pointer", color: 'grey' }} > {"Prev"}</span>}
          </Col>
          |
          <Col className="text-left">
            {page < (spaceXlpData.length / 8) - 1 ? <span style={{ cursor: "pointer" }} onClick={() => setPage(page + 1)}> {"Next"}</span> : <span style={{ cursor: "pointer", color: "grey" }}> {"Next"}</span>}

          </Col>
        </Row>}

        <Row className="mt-4">
          <Col className="text-center">
            <strong>Developed By : Siddhartha Pharasi </strong>
          </Col>
        </Row>

      </CardHeader>
    </Card>
  )
}

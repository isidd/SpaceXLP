import React from 'react' ;
import {Card ,CardBody ,CardHeader,CardImg,Row,Col} from 'reactstrap'


export const ResultComponent = ({servedData}) =>(
    <>
      <Row>
        {servedData.length > 0 ?
          servedData.map((elements) => {
            return (
              <Col md={3} className="mb-3">
                <Card>
                  <CardBody >
                    <Row>
                      <Col md={1}></Col>
                      <Col md={10}>
                        <CardHeader>
                          <CardImg src={elements.links.mission_patch_small} />
                        </CardHeader>
                      </Col>
                    </Row>

                    <Row className="mt-2 ml-2">
                      <Col>
                        <strong style={{ color: "#5353da" }}>{`${elements.mission_name} #${elements.flight_number}`}</strong>
                      </Col>
                    </Row>

                    <Row className="mt-2 ml-2">
                      <Col>
                        <strong>Mission Ids:</strong>
                        <ul>
                          <li>
                            {elements.mission_id.length > 0 && elements.mission_id[0] || ' Dummy Id'}
                          </li>
                        </ul>
                      </Col>
                    </Row>

                    <Row className="mt-2 ml-2">
                      <Col>
                        <strong>Launch Year:</strong>
                        {` ${elements.launch_year}`}
                      </Col>
                    </Row>


                    <Row className="mt-2 ml-2">
                      <Col>

                        <strong>Sucessfull Launch:</strong>

                        {` ${elements.launch_success}`}
                      </Col>
                    </Row>

                    <Row className="mt-2 ml-2">
                      <Col>
                        <strong>Sucessfull Landings :</strong>
                        {` ${elements.rocket.first_stage.cores[0].land_success}`}
                      </Col>
                    </Row>

                  </CardBody>
                </Card>
              </Col>
            )
          }) :
          <Col md={9}>No Data.. </Col>
        }

      </Row>

  </>
)
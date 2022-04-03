import React from "react";
import {
    Row,
    Card,
    CardHeader,
    Media,
    Table,
    Container,
    UncontrolledTooltip,
  } from "reactstrap";
import Header from "headers/light.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

const Orders = () =>{
    return(<>
    <AnimationRevealPage>
    <Header />
    <Container className="mt--7" fluid>
    <Row className="mt-5">
          <div className="col">
            <Card className="bg-success shadow">
              <CardHeader className="bg-success border-0">
                <h3 className="text-white mb-0">My Orders</h3>
              </CardHeader>
              <Table
                className="align-items-center table-info table-flush"
                responsive
              >
                <thead className="thead-light">
                  <tr>
                    <th scope="col">OrderId</th>
                    <th scope="col">Order Detail</th>
                    <th scope="col">Recieve Date</th>
                    <th scope="col">Return Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                      <Media>
                          <span className="mb-0 text-sm">
                          198760829
                          </span>
                        </Media>
                      </Media>
                    </th>
                    
                    <td>Article no: 7890<br/>Frock<br/>In Progress</td>
                    <td>
                       8/10/2021
                      
                    </td>
                    <td>
                      12/10/2021
                    </td>
                    
                  </tr>
                  <tr>
                  <th scope="row">
                      <Media className="align-items-center">
                      <Media>
                          <span className="mb-0 text-sm">
                          198760829
                          </span>
                        </Media>
                      </Media>
                    </th>
                    
                    <td>Article no: 7890<br/>Frock<br/>In Progress</td>
                    <td>
                       8/10/2021
                      
                    </td>
                    <td>
                      12/10/2021
                    </td>
                  </tr>
                  <tr>
                  <th scope="row">
                      <Media className="align-items-center">
                      <Media>
                          <span className="mb-0 text-sm">
                          198760829
                          </span>
                        </Media>
                      </Media>
                    </th>
                    
                    <td>Article no: 7890<br/>Frock<br/>In Progress</td>
                    <td>
                       8/10/2021
                      
                    </td>
                    <td>
                      12/10/2021
                    </td>
                  </tr>
                  <tr>
                  <th scope="row">
                      <Media className="align-items-center">
                      <Media>
                          <span className="mb-0 text-sm">
                          198760829
                          </span>
                        </Media>
                      </Media>
                    </th>
                    
                    <td>Article no: 7890<br/>Frock<br/>In Progress</td>
                    <td>
                       8/10/2021
                      
                    </td>
                    <td>
                      12/10/2021
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
        </Container>
              </AnimationRevealPage>
    </>)
}
export default Orders;
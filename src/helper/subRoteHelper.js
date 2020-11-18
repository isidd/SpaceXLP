import React, { Suspense } from 'react'
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ErrrorBoundary from './../helper/errorBoundary'

let RouteWithSubRoutes = (route) => {

  /**
      Conditional Routing based on if the serving route is authed and which role(user) can access that route
   **/


    return (
      <>
        <Route
          path={route.path}
          render={props => (
            <>
              {/* <ErrrorBoundary> */}
                <Suspense fallback={<div>Loading...</div>}>
                  <route.component {...props} routes={route.routes} />
                </Suspense>
              {/* </ErrrorBoundary> */}
            </>
          )}
        />
      </>
    )
}


export default RouteWithSubRoutes
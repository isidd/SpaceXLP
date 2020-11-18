import React from 'react'

const SpaceXlp = React.lazy(() => import('./../containers/spaceXpl')) ;


const routes = [
  {
    path: "/",
    component: SpaceXlp,
    authEntry: false,
    roleEntry:['public'],
    exact : false
  }
];





export default routes;
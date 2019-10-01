import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import { publicRoutes } from './publicRoutes';
import { privateRoutes } from './privateRoutes';
import Layout from '../common/layout';

const Loading = () => {
  return <div className="appHeader">...loading</div>;
};

const getCurrentRoutes = () => {
  if (
    localStorage.getItem('token') === null ||
    localStorage.getItem('token') === undefined
  ) {
    return publicRoutes;
  } else {
    return privateRoutes;
  }
};

const ProjectRoutes = props => {
  const currentRoutes = getCurrentRoutes();
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Switch>
            {currentRoutes.map((data, index) => {
              return (
                <Route
                  path={data.path}
                  exact={data.exact}
                  component={data.component}
                  key={index}
                />
              );
            })}
          </Switch>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default ProjectRoutes;

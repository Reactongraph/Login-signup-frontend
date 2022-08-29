import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

const ProjectRoutes = (props) => {
  const currentRoutes = getCurrentRoutes();
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Routes>
            {currentRoutes.map((data, index) => {
              return (
                <Route path={data.path} element={data.component} key={index} />
              );
            })}
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default ProjectRoutes;

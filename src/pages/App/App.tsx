import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

const Main = styled.div`
  font-size: 60px;
  min-height: 100vh;
`;

export const App = () => {
  return <Main>
    <Routes>
      <Route path={'/'} element={<div>projects</div>} />
      <Route path={'/tasks'} element={<div>tasks</div>} />
    </Routes>
  </Main>;
};

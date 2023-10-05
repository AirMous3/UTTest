import React from "react";

import { Route, Routes } from "react-router-dom";

import * as S from "./components";

export const App: React.FC = () => (
  <S.Main>
    <S.Header>
      <div>UpTrader Tracker</div>
    </S.Header>

    <Routes>
      <Route path="/" element={<div>projects</div>} />
      <Route path="/tasks" element={<div>tasks</div>} />
    </Routes>
  </S.Main>
);

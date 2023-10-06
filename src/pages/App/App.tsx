import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";

import * as S from "./components";

import { Projects, Tasks } from "@/pages";
import { Container } from "@/shared/ui";

export interface ProjectsInterface {
  id: number;
  title: string;
  tasks: { id: number; title: string }[];
}

export const App: React.FC = () => {
  const [projects, setProjects] = useState<ProjectsInterface[]>([
    {
      id: 1,
      title: "olo111",
      tasks: [
        { id: 1, title: "task1" },
        { id: 2, title: "task2" },
        { id: 3, title: "task3" },
      ],
    },
    { id: 2, title: "olo222", tasks: [{ id: 1, title: "task2" }] },
    { id: 2, title: "olo222", tasks: [{ id: 1, title: "task2" }] },
    { id: 2, title: "olo222", tasks: [{ id: 1, title: "task2" }] },
    { id: 2, title: "olo222", tasks: [{ id: 1, title: "task2" }] },
    { id: 2, title: "olo222", tasks: [{ id: 1, title: "task2" }] },
  ]);

  return (
    <S.Main>
      <S.Header>
        <div>UpTrader Tracker</div>
      </S.Header>

      <Container>
        <Routes>
          <Route path="/" element={<Projects data={projects} />} />
          <Route path="/tasks/:tasksId" element={<Tasks data={projects} />} />
        </Routes>
      </Container>
    </S.Main>
  );
};

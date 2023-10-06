import React from "react";

import { useParams } from "react-router-dom";

import * as S from "./components";

import { ProjectsInterface } from "@/pages";

interface TasksInterface {
  data: ProjectsInterface[];
}
const NULL = 0;

export const Tasks: React.FC<TasksInterface> = ({ data }) => {
  const { tasksId } = useParams();

  const { tasks } = data.filter(({ id }) => +tasksId! === id)[NULL];

  return (
    <S.Container>
      {tasks.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
    </S.Container>
  );
};

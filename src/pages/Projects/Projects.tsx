import React from "react";

import * as S from "./components";

interface ProjectsInterface {
  data: any[];
}

export const Projects: React.FC<ProjectsInterface> = ({ data }) => (
  <S.Container>
    {data.map(({ id, title }) => (
      <S.Project to={`tasks/${id}`} key={id}>
        {title}
      </S.Project>
    ))}
  </S.Container>
);

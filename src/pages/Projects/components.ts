import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-left: 30px;
`;

export const Project = styled(NavLink)`
  padding: 50px;
  border: 0.34px solid rgba(255, 255, 255, 0.12);
  width: 24.33%;
  border-radius: 5px;
  cursor: pointer;
  background-color: #343434;
  color: white;
`;

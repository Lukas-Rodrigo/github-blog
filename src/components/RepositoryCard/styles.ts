import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const RepositoryCardContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.BASE_POST};
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.BASE_TEXT};
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${(props) => props.theme.BASE_BORDER};
    transition: 0.3 s border;
  }

  & > div:first-child {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    font-size: 1.25rem;
    color: ${(props) => props.theme.BASE_TITLE};
    flex: 1;
    border: solid 1 black;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.BASE_SPAN};
    flex: 0.3;
  }
`;

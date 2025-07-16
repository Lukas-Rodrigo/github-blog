import styled from "styled-components";
import backgroundImg from "../../assets/cover.png";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 4rem 8.375rem;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
`;

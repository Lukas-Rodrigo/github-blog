import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  max-width: 54rem;
  padding: 2rem 2.5rem;
  background-color: ${(props) => props.theme.BASE_PROFILE};
  margin: -6rem auto 0;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    max-width: 10rem;
    overflow: hidden;
    border-radius: 10px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderProfile = styled.div`
  display: flex;

  justify-content: space-between;
  margin-bottom: 0.5rem;

  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    text-decoration: none;
  }

  span,
  svg {
    color: ${(props) => props.theme.BLUE};
    font-size: 0.75rem;
  }
`;

export const RepositoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
`;

export const HeaderRepository = styled.div`
  display: flex;
  justify-content: space-between;

  span,
  svg {
    color: ${(props) => props.theme.BLUE};
    font-size: 0.75rem;
  }

  & div,
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const Network = styled.div`
  display: flex;
  gap: 1.5rem;
  color: ${(props) => props.theme.BASE_SUBTITLE};
  margin-top: auto;

  & svg {
    color: ${(props) => props.theme.BASE_LABEL};
    width: 1.125rem;
    margin-right: 0.25rem;
  }
`;

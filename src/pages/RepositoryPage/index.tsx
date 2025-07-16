import CircularProgress from "@mui/material/CircularProgress";
import { useContext } from "react";
import { ProfileCard } from "../../components/ProfileCard";
import { GithubBlogContext } from "../../context/GithubBlog";
import { LayoutDefaut } from "../../layouts/LayoutDefault";
import { RepositoryPageContainer } from "./styles";

export function RepositoryPage() {
  const { currentRepository, loading } = useContext(GithubBlogContext);

  const { readme, repository } = currentRepository;
  return (
    <>
      <LayoutDefaut />
      <ProfileCard repository={repository} variant="repository" />

      <RepositoryPageContainer>
        {loading ? (
          <CircularProgress className="spinner" />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: readme }} />
        )}
      </RepositoryPageContainer>
    </>
  );
}

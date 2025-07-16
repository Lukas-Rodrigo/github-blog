import { useContext } from "react";
import { ProfileCard } from "../../components/ProfileCard";
import { RepositoryCard } from "../../components/RepositoryCard";
import { GithubBlogContext } from "../../context/GithubBlog";
import { LayoutDefaut } from "../../layouts/LayoutDefault";
import { Search } from "./components/Search";
import { RepositoryContainer } from "./styles";

export function Profile() {
  const { repositorys } = useContext(GithubBlogContext);
  return (
    <>
      <LayoutDefaut />
      <ProfileCard variant="profile" />
      <Search />
      <RepositoryContainer>
        {repositorys.map((repository) => {
          return <RepositoryCard repository={repository} />;
        })}
      </RepositoryContainer>
    </>
  );
}

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useContext } from "react";
import { GithubBlogContext, GitHubRepository } from "../../context/GithubBlog";
import { RepositoryCardContainer } from "./styles";

interface RepositoryCardProps {
  repository: GitHubRepository;
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  const { name, createdAt, description } = repository;
  const { fetchReadme } = useContext(GithubBlogContext);
  return (
    <RepositoryCardContainer to="/repository" onClick={() => fetchReadme(name)}>
      <div>
        <h1>{name}</h1>
        <span>{formatDistanceToNow(createdAt, { locale: ptBR })}</span>
      </div>
      <p>{description}</p>
    </RepositoryCardContainer>
  );
}

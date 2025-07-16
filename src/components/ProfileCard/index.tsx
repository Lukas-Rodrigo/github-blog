import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleLeft,
  faArrowUpRightFromSquare,
  faBuilding,
  faCalendarDay,
  faComment,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GithubBlogContext, GitHubRepository } from "../../context/GithubBlog";
import {
  HeaderProfile,
  HeaderRepository,
  Network,
  ProfileCardContainer,
  ProfileContainer,
  ProfileInfo,
  RepositoryContainer,
} from "./style";

interface ProfileCardProps {
  variant?: "profile" | "repository";
  repository?: GitHubRepository;
}

export function ProfileCard({
  variant = "profile",
  repository,
}: ProfileCardProps) {
  const { profile } = useContext(GithubBlogContext);

  const { avatar, name, bio, profileBio, company, followers, linkGithub } =
    profile;
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const renderProfileInfos = () => (
    <ProfileContainer>
      <img src={avatar} />
      <ProfileInfo>
        <HeaderProfile>
          <div>
            <h2> {name} </h2>
          </div>
          <a target="_blank" href={linkGithub}>
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </HeaderProfile>
        <p>{bio}</p>
        <Network>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{profileBio}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{company}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{followers} Seguidores</span>
          </div>
        </Network>
      </ProfileInfo>
    </ProfileContainer>
  );

  const renderRepositoryInfos = () => {
    return (
      <RepositoryContainer>
        <HeaderRepository>
          <div>
            <FontAwesomeIcon icon={faAngleLeft} />
            <span onClick={goHome}>VOLTAR</span>
          </div>
          <div>
            <a target="_blank" href={linkGithub}>
              <span>VER NO GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </HeaderRepository>
        <h1>{repository?.name}</h1>
        <Network>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{profileBio}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>
              {repository?.createdAt
                ? formatDistanceToNow(repository.createdAt, { locale: ptBR })
                : "Data desconhecida"}
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{repository?.comments?.length}</span>
          </div>
        </Network>
      </RepositoryContainer>
    );
  };

  return (
    <ProfileCardContainer>
      {variant === "profile" && renderProfileInfos()}
      {variant === "repository" && renderRepositoryInfos()}
    </ProfileCardContainer>
  );
}

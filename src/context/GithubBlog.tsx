import { createContext, useEffect, useReducer, useState } from "react";
import { api, token } from "../lib/axios";
import {
  GithubProfile,
  githubReducer,
  GitHubRepository,
  GithubRepositoryState,
  initialState,
} from "../reducer/reducer";
import { decoderRedme } from "../utils/decoder64";

interface GithubBlogProviderProps {
  children: React.ReactNode;
}

export interface GithubBlogContextData {
  profile: GithubProfile;
  repositorys: GitHubRepository[];
  currentRepository: GithubRepositoryState;
  fetchReadme: (repo: string) => Promise<void>;
  loading: boolean;
}

export const GithubBlogContext = createContext({} as GithubBlogContextData);
export function GithubBlogProvider({ children }: GithubBlogProviderProps) {
  const [state, dispatch] = useReducer(githubReducer, initialState);
  const [loading, setLoading] = useState(false);

  const { profile, currentRepository, repositorys } = state;

  async function fetchProfile() {
    const response = await api.get("users/Lukas-Rodrigo", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;

    const formattedData: GithubProfile = {
      name: data.name,
      avatar: data.avatar_url,
      bio: data.bio,
      followers: data.followers,
      company: data.company || "OpenWork",
      linkGithub: data.html_url,
      profileBio: data.login,
    };
    dispatch({ type: "SET_PROFILE", payload: formattedData });
  }

  async function fetchRepositorys() {
    const response = await api.get("users/Lukas-Rodrigo/repos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = response.data;

    const formattedData: GitHubRepository[] = data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      createdAt: repo.created_at,
      link: repo.html_url,
      description: repo.description || "",
    }));

    dispatch({ type: "SET_REPOSITORIES", payload: formattedData });
  }

  async function fetchReadme(repo: string) {
    try {
      setLoading(true);
      const responseComments = await api.get(
        `repos/Lukas-Rodrigo/${repo}/issues/comments`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseReadme = await api.get(
        `repos/Lukas-Rodrigo/${repo}/readme`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const repositoryClicked = state.repositorys.find(
        (repository) => repository.name === repo
      );

      const htmlContent = await decoderRedme(responseReadme);

      if (repositoryClicked) {
        const currentRepository: GithubRepositoryState = {
          repository: {
            ...repositoryClicked,
            comments: responseComments.data,
          },
          readme: htmlContent,
        };

        dispatch({
          type: "SET_CURRENT_REPOSITORY",
          payload: currentRepository,
        });
      }
    } catch (error) {
      console.error("Erro ao buscar dados do repositório:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProfile();
    fetchRepositorys();
  }, []);

  return (
    <GithubBlogContext.Provider
      value={{
        profile,
        repositorys,
        currentRepository,
        fetchReadme,
        loading,
      }}
    >
      {children}
    </GithubBlogContext.Provider>
  );
}

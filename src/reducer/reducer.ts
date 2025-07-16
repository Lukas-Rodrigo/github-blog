export interface GithubProfile {
  name: string;
  avatar: string;
  linkGithub: string;
  bio: string;
  followers: number;
  company: string;
  profileBio: string;
}

export interface GitHubRepository {
  id: number;
  name: string;
  description: string;
  link: string;
  createdAt: string;
  comments?: string[];
}

export interface GithubRepositoryState {
  repository: GitHubRepository;
  readme: string;
}

export const initialState: {
  profile: GithubProfile;
  repositorys: GitHubRepository[];
  currentRepository: GithubRepositoryState;
} = {
  profile: {
    avatar: "",
    name: "",
    bio: "",
    company: "",
    followers: 0,
    linkGithub: "",
    profileBio: "",
  },
  repositorys: [],
  currentRepository: {
    readme: "",
    repository: {
      createdAt: "",
      description: "",
      id: 0,
      link: "",
      name: "",
      comments: [],
    },
  },
};
type Action =
  | { type: "SET_PROFILE"; payload: GithubProfile }
  | { type: "SET_REPOSITORIES"; payload: GitHubRepository[] }
  | { type: "SET_CURRENT_REPOSITORY"; payload: GithubRepositoryState };

export function githubReducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case "SET_PROFILE":
      return { ...state, profile: action.payload };
    case "SET_REPOSITORIES":
      return { ...state, repositorys: action.payload };
    case "SET_CURRENT_REPOSITORY":
      return { ...state, currentRepository: action.payload };
    default:
      return state;
  }
}

import { GitHubAvatar, GitHubRepoURL } from './GitHubComponents.jsx';

export function GitHubInfo({ userInfo }) {
  return (
    <div className="profile">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar imgURL={userInfo.imgURL} alt={userInfo.alt} size={200} />
      <GitHubRepoURL url={userInfo.url} />
    </div>
  );
}
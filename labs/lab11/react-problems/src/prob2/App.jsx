import { GitHubAvatar, GitHubRepoURL } from './GitHubComponents.jsx';
import './App.css';

export default function App() {
  const userInfo = {
    url: 'https://github.com/PRAWEENABUNKHAM',
    imgURL: 'https://avatars.githubusercontent.com/u/189577400?v=4',
    alt: 'PRAWEENABUNKHAM'
  };
  return (
    <div className="App">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar
        imgURL={userInfo.imgURL}
        alt={userInfo.alt}
        size={200}
      />
      <GitHubRepoURL url={userInfo.url} />
    </div>
  );
}
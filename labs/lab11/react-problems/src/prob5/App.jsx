import './App.css';
import { users } from '../shared/users.js';
import { GitHubAvatar } from '../shared/GitHubComponents.jsx';

export default function App() {
  const popularUsers = users.filter(
    (user) => user.followers > 10000
  );

  return (
    <>
      <h1>Popular GitHub Repositories</h1>

      <ol>
        {popularUsers.map((user) => (
          <li key={user.url}>
            <GitHubAvatar
              imgURL={user.imgURL}
              alt={user.alt}
              size={200}
            />{' '}
            <a
              href={user.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.alt}
            </a>{' '}
            ({user.followers} followers)
          </li>
        ))}
      </ol>
    </>
  );
}
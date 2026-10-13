import { GitHubAvatar } from '../shared/GitHubComponents.jsx';

export function GitHubInfo({ userInfo }) {
  return (
    <li>
      <GitHubAvatar
        imgURL={userInfo.imgURL}
        alt={userInfo.alt}
      />{' '}
      <a
        href={userInfo.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {userInfo.alt}
        {userInfo.followers > 10000 &&
          ` (${userInfo.followers} followers)`}
      </a>
    </li>
  );
}
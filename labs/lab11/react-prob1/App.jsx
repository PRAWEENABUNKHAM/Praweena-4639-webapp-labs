import './App.css';

function GitHubAvatar() {
  return (
    <img
      src="https://github.com/PRAWEENABUNKHAM.png"
      alt="PRAWEENABUNKHAM"
    />
  );
}

function GitHubRepoURL() {
  return (
    <a
      href="https://github.com/PRAWEENABUNKHAM"
      target="_blank"
      rel="noopener noreferrer"
    >
      My GitHub repository
    </a>
  );
}

export default function GitHubInfo() {
  return (
    <div className="github-info">
      <h1>My GitHub Information</h1>
      <GitHubAvatar />
      <GitHubRepoURL />
    </div>
  );
}
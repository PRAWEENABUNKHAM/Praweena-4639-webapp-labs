export function GitHubRepoURL({ url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub repository
    </a>
  );
}

export function GitHubAvatar({ imgURL, alt, size = 50 }) {
  return (
    <img
      src={imgURL}
      alt={alt}
      width={size}
      height={size}
    />
  );
}
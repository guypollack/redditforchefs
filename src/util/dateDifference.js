export function dateDifference(unixString) {
  const diff = Date.now() - (unixString * 1000);

  if (diff < 60000) {
    return "less than a minute ago";
  } else if (diff < 3600000) {
    return `${Math.floor(diff / 60000)} minutes ago`;
  } else if (diff < 86400000) {
    return `${Math.floor(diff / 3600000)} hours ago`;
  } else {
    return `${Math.floor(diff / 86400000)} days ago`;
  }
}
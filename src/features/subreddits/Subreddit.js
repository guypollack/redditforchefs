export function Subreddit({id, name, url, onClick}) {
  // console.log(id, name, url);
  return <button value={url} onClick={onClick}>{name}</button>
}
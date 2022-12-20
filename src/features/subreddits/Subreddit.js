export function Subreddit({id, name, url, logoPath, onClick}) {
  // console.log(id, name, url);
  // return <button value={url} onClick={onClick}>{name}</button>
  return (
    <div className="subreddit-button-container">
      <input className="subreddit-logo" type="image" src={logoPath} name={url} onClick={onClick} />
      <button className="subreddit-button" value={url} onClick={onClick}>r/{name}</button>
    </div>
  )

}
export function Subreddit({id, name, url, logoPath, selected, onClick}) {
  // console.log(id, name, url);
  // return <button value={url} onClick={onClick}>{name}</button>
  const divClass = selected ? "subreddit-button-container selected" : "subreddit-button-container";
  return (
    <div className={divClass}>
      <input className="subreddit-logo" type="image" src={logoPath} name={url} onClick={onClick} />
      <button className="subreddit-button" value={url} onClick={onClick}>r/{name}</button>
    </div>
  )

}
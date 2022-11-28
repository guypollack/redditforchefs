export function Post({id, data, handleClickShowMore, handleClickShowLess}) {
  
  if (data.stickied) return

  let content;
  
  if (data.selftext) {
    if (data.selftext.length <= 200) {
      content = <p>{data.selftext}</p>
    } else if (data.showMoreText) {
      content = (
        <div>
          <p>{data.selftext}</p>
          <button id={`Show-Less-Button-${id}`} onClick={handleClickShowLess}>Show Less</button>
        </div>
      )
    } else {
      content = (
        <div>
          <p>{data.selftext.slice(0,200)}...</p>
          <button id={`Show-More-Button-${id}`} onClick={handleClickShowMore}>Show More</button>
        </div>
      )
    }
     
  }
  if (data.post_hint === "image") {
      content = <img src={data.url} style={{width: 200}} />;
  }

  return (
    <div>
      <h4>{data.title}</h4>
      {content}
    </div>
  )
}
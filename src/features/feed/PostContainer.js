import { Post } from "./Post";

export function PostContainer({id, data, handleClickShowMore, handleClickShowLess}) {
  
  if (data.stickied) return;

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

  if (data.post_hint === "rich:video") {
    // console.log(data.media.ombed.html);
    // console.log("AAAA");
    const source = data.media.oembed.html.split(" ")[3].slice(5,46);
    content = <iframe width="585" height="329" src={source}></iframe>
  }

  return <Post title={data.title} content={content} />
  
}
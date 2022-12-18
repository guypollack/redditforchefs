import { useSelector } from "react-redux";
import { feedIsLoading } from "./feedSlice";
import { Post } from "./Post";

export function PostContainer({id, data, handleClickShowMore, handleClickShowLess}) {
  
  const isLoading = useSelector(feedIsLoading);

  if (data.stickied) return;

  if (data.post_hint === "hosted:video") return;

  let content;
  
  if (data.selftext) {
    if (data.selftext.length <= 200) {
      content = (
      <div className="post-content">
        <p>{data.selftext}</p>
      </div>
      )
    } else if (data.showMoreText) {
      content = (
        <div className="post-content">
          <p>{data.selftext}</p>
          <button id={`Show-Less-Button-${id}`} onClick={handleClickShowLess}>Show Less</button>
        </div>
      )
    } else {
      content = (
        <div className="post-content">
          <p>{data.selftext.slice(0,200)}...</p>
          <button id={`Show-More-Button-${id}`} onClick={handleClickShowMore}>Show More</button>
        </div>
      )
    }
  }

  if (data.post_hint === "image") {
    content = (
      <div className="post-content">
        <img src={data.url} style={{width: 200}} />
      </div>
    )
  }

  if (data.post_hint === "rich:video") {
    // console.log(data.media.ombed.html);
    // console.log("AAAA");
    const source = data.media.oembed.html.split(" ")[3].slice(5,46);
    content = (
      <div className="post-content">
        <iframe width="585" height="329" src={source}></iframe>
      </div>
    )
  }

  if (data.is_gallery) {
    content = (
      <div className="post-content">
        <img src={data.thumbnail} />
      </div>
    )
  }

  return <Post title={data.title} content={content} isLoading={isLoading} />
  
}
import { useSelector } from "react-redux";
import { feedIsLoading } from "./feedSlice";
import { Post } from "./Post";
import { cleanText } from "../../util/cleanText.js";

export function PostContainer({id, data, handleClickShowMore, handleClickShowLess}) {
  
  const isLoading = useSelector(feedIsLoading);

  if (data.stickied) return;

  if (data.post_hint === "hosted:video") return;

  let content;
  let button;
  
  if (data.selftext) {
    if (data.selftext.length <= 200) {
      content = (
      <div className="post-content">
        <p>{cleanText(data.selftext)}</p>
      </div>
      )
    } else if (data.showMoreText) {
      content = (
        <div className="post-content">
          <p>{cleanText(data.selftext)}</p>
        </div>
      )
      
      button = (
        <div className="show-less-container">
          <button id={`show-less-button-${id}`} className="show-less-button" onClick={handleClickShowLess}>Show Less</button>
          <img className="show-less-icon" src="../../../utensils-solid.svg" />
        </div>
      )
    } else {
      content = (
        <div className="post-content">
          <p>{cleanText(data.selftext.slice(0,200))}...</p>
        </div>
      )

      button = (
        <div className="show-more-container">
          <button id={`show-more-button-${id}`} className="show-more-button" onClick={handleClickShowMore}>Show More</button>
          <img className="show-more-icon" src="../../../utensils-solid.svg" />
        </div>
      )
    }
  }

  if (data.post_hint === "image") {
    content = (
      <div className="post-content media">
        <img src={data.url} style={{width: 200}} />
      </div>
    )
  }

  if (data.post_hint === "rich:video") {
    // console.log(data.media.ombed.html);
    // console.log("AAAA");
    const source = data.media.oembed.html.split(" ")[3].slice(5,46);
    content = (
      <div className="post-content media">
        <iframe width="450" height="253" src={source}></iframe>
      </div>
    )
  }

  if (data.is_gallery) {
    content = (
      <div className="post-content media">
        <img src={data.thumbnail} />
      </div>
    )
  }

  console.log(data.title);

  return <Post user={data.author} date={data.created_utc} title={cleanText(data.title)} content={content} button={button} isLoading={isLoading} />
  
}
export function Post({data}) {
  // console.log(data);
  // console.log(data.post_hint);
  let content;
  if (data.selftext) {
    content = data.selftext.length <= 200 ? <p>{data.selftext}</p> : <p>{data.selftext.slice(0,200)}...</p>
  }
  if (data.post_hint === "image") {
      content = <img src={data.url} style={{width: 200}} />;
  }
    // case "hosted:video":
    //   console.log(data)
    //   content = <video controls autoPlay type="video/MP4" src={data.media.reddit_video.fallback_url} style={{width: 200}} />
    //   break;

  return (
    <div>
      <h4>{data.title}</h4>
      {content}
    </div>
  )
}
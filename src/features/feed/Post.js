export function Post({data}) {
  let content;
  switch (data.post_hint) {
    case "image":
      content = <img src={data.url} style={{width: 200}} />;
      break;
    case "hosted:video":
      console.log(data)
      content = <video controls autoPlay type="video/MP4" src={data.media.reddit_video.fallback_url} style={{width: 200}} />
      break;
  }
  return (
    <div>
      <h4>{data.title}</h4>
      {content}
    </div>
  )
}
export const redditFeed = async () => {
  const data = await fetch("https://www.reddit.com/r/funny.json");
  const json = await data.json();
  const posts = await json.data.children.map(post => post.data)
  return posts;
}

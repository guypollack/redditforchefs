import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, filterUnstickiedPosts, feedIsLoading, feedFailedToLoad, selectErrorStatus, selectShowMoreText, initialiseShowMoreText, showMoreTextByIndex, showLessTextByIndex } from "./feedSlice";
import { generateFeed } from "../../util/Reddit";
import { Post } from "./Post";


export function Feed() {
  const dispatch = useDispatch();
  
  // console.log(initialiseShowMoreText);

  // const posts = useSelector(selectPosts);
  const posts = useSelector(filterUnstickiedPosts);
  // console.log(posts);
  const numberOfPosts = posts.length;
  const isLoading = useSelector(feedIsLoading);
  const failedToLoad = useSelector(feedFailedToLoad);
  const errorStatus = useSelector(selectErrorStatus);
  const showMoreText = useSelector(selectShowMoreText);
  
  const handleClickShowMore = e => {
    dispatch(showMoreTextByIndex(Number(e.target.id.slice(22))));
  }

  const handleClickShowLess = e => {
    dispatch(showLessTextByIndex(Number(e.target.id.slice(22))));
  }

  useEffect(() => {
    dispatch(generateFeed());
  },[])

  useEffect(() => {
    dispatch(initialiseShowMoreText(new Array(numberOfPosts).fill(false)));
  },[numberOfPosts])

  if (isLoading) {
    return <h1>I'm still loading! Wait a min!</h1>;
  }
  if (failedToLoad) {
    return <h1>Request failed... Error code {errorStatus}... sorry :(</h1>
  }
  return (
    <div>
      {posts.map((post, index) => <Post key={`Post-${index}`} id={`Post-${index}`} data={post} showMore={showMoreText[index]} handleClickShowMore={handleClickShowMore} handleClickShowLess={handleClickShowLess} />)}
    </div>

  )
}
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, filterUnstickiedPosts, feedIsLoading, feedFailedToLoad, selectErrorStatus, selectShowMoreText, initialiseShowMoreText, showMoreTextByIndex, showLessTextByIndex } from "./feedSlice";
import { generateFeed } from "../../util/Reddit";
import { PostContainer } from "./PostContainer";


export function Feed() {
  const dispatch = useDispatch();
  
  // console.log(initialiseShowMoreText);

  // const posts = useSelector(selectPosts);
  const posts = useSelector(selectPosts);
  // console.log(posts);
  // console.log(posts.map(post => post.showMoreText));
  // const numberOfPosts = posts.length;
  const isLoading = useSelector(feedIsLoading);
  const failedToLoad = useSelector(feedFailedToLoad);
  const errorStatus = useSelector(selectErrorStatus);
  // const showMoreText = useSelector(selectShowMoreText);
  
  const handleClickShowMore = e => {
    // console.log(e.target.id);
    dispatch(showMoreTextByIndex(Number(e.target.id.slice(22))));
  }

  const handleClickShowLess = e => {
    dispatch(showLessTextByIndex(Number(e.target.id.slice(22))));
  }

  useEffect(() => {
    dispatch(generateFeed());
  },[])

  // useEffect(() => {
  //   dispatch(initialiseShowMoreText(new Array(numberOfPosts).fill(false)));
  // },[numberOfPosts])

  if (isLoading) {
    return <h1>I'm still loading! Wait a min!</h1>;
  }
  if (failedToLoad) {
    return <h1>Request failed... Error code {errorStatus}... sorry :(</h1>
  }
  return (
    <div>
      {posts.map((post, index) => <PostContainer key={`Post-${index}`} id={`Post-${index}`} data={post} handleClickShowMore={handleClickShowMore} handleClickShowLess={handleClickShowLess} />)}
    </div>

  )
}
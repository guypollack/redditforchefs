import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, filterUnstickiedPosts, feedIsLoading, feedFailedToLoad, selectErrorStatus } from "./feedSlice";
import { generateFeed } from "../../util/Reddit";
import { Post } from "./Post";


export function Feed() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(generateFeed());
  },[])
  
  // const posts = useSelector(selectPosts);
  const posts = useSelector(filterUnstickiedPosts);
  // console.log(posts);
  const isLoading = useSelector(feedIsLoading);
  const failedToLoad = useSelector(feedFailedToLoad);
  const errorStatus = useSelector(selectErrorStatus);
  
  if (isLoading) {
    return <h1>I'm still loading! Wait a min!</h1>;
  }
  if (failedToLoad) {
    return <h1>Request failed... Error code {errorStatus}... sorry :(</h1>
  }
  return (
    <div>
      {posts.map((post, index) => <Post key={`Post-${index}`}  data={post} />)}
    </div>

  )
}
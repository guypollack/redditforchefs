import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, feedIsLoading, feedFailedToLoad, selectErrorStatus } from "./feedSlice";
import { generateFeed } from "../../util/Reddit";

export function Feed() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(generateFeed());
  },[])
  
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(feedIsLoading);
  const failedToLoad = useSelector(feedFailedToLoad);
  const errorStatus = useSelector(selectErrorStatus);
  
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (failedToLoad) {
    return <h1>Request failed... Error code {errorStatus}... sorry :(</h1>
  }
  return (
    <div>
      {posts.map(post => <h4>{post.title}</h4>)}
    </div>

  )
}
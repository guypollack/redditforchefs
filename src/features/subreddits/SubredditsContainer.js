import { useDispatch, useSelector } from "react-redux";
import { changeSubreddit, selectSubredditUrls, selectCurrentSubreddit } from "./subredditsSlice";
import { Subreddit } from "./Subreddit";

export function SubredditsContainer() {
  const dispatch = useDispatch();
  const currentSubreddit = useSelector(selectCurrentSubreddit);
  console.log(currentSubreddit);
  const subreddits = useSelector(selectSubredditUrls);
  const handleClick = e => {
    alert(e.target.value);
    dispatch(changeSubreddit(e.target.value));
  }

  return (
    <div>
      {Object.keys(subreddits).map((subredditName, index) => {
        return <Subreddit key={`Subreddit-${index}`} id={`Subreddit-${index}`} name={subredditName} url={subreddits[subredditName]} onClick={handleClick} />
      })}
    </div>
  )

}
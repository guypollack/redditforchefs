import { useDispatch, useSelector } from "react-redux";
import { changeSubreddit, selectSubredditUrls, selectCurrentSubreddit, selectSubredditLogos } from "./subredditsSlice";
import { Subreddit } from "./Subreddit";

export function SubredditsContainer() {
  const dispatch = useDispatch();
  const currentSubreddit = useSelector(selectCurrentSubreddit);
  // console.log(currentSubreddit);
  const subreddits = useSelector(selectSubredditUrls);
  const logos = useSelector(selectSubredditLogos);
  const handleClick = e => {
    if (e.target.className === "subreddit-logo") {
      // alert(e.target.name)
      dispatch(changeSubreddit(e.target.name));
    } else {
    // alert(e.target.value);
    dispatch(changeSubreddit(e.target.value));
    }
  }

  return (
    <div className="subreddits-container">
      {Object.keys(subreddits).map((subredditName, index) => {
        return <Subreddit key={`Subreddit-${index}`} id={`Subreddit-${index}`} name={subredditName} url={subreddits[subredditName]} logoPath={logos[subredditName]} selected={subreddits[subredditName] === currentSubreddit} onClick={handleClick} />
      })}
    </div>
  )

}
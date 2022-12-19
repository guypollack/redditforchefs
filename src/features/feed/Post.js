import { dateDifference } from "../../util/dateDifference";

export function Post({user, date, title, content, isLoading}) {

  if (isLoading) {
    return (
      <div className="post loading">
        {/* <h4>Post Loading</h4> */}
        <img className="loading-icon" src="../../../utensils-solid.svg"></img>
      </div>
    )
  }

  return (
    <div className="post">
      <div>
        <p>Posted by u/{user} {dateDifference(date)}</p>
      </div>
      <div>
        <h4 className="post-title">{title}</h4>
      </div>
      {content}
    </div>
  )
}
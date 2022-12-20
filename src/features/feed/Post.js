import { dateDifference } from "../../util/dateDifference";

export function Post({user, date, title, content, button, isLoading}) {

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
      <div className="post-metadata">
        <p>Posted by u/{user} {dateDifference(date)}</p>
      </div>
      <div>
        <h3 className="post-title">{title}</h3>
      </div>
      {content}
      {button && button}
    </div>
  )
}
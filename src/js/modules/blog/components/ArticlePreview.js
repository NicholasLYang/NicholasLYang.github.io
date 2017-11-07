import React from "react"
import { Link} from "react-router-dom"

const ArticlePreview = ({ id, title, body }) => (
  <div>
    <Link to={`/blog/` + id}>
      <h2>
        {title}
      </h2>
    </Link>
    <div dangerouslySetInnerHTML={{__html: body}}/>
  </div>
)

export default ArticlePreview;
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-item-container">
      <div>
        <h1 className="title">{title}</h1>
        <p className="desc-date">{description}</p>
      </div>
      <p className="desc-date">{publishedDate}</p>
    </li>
  )
}

export default BlogItem

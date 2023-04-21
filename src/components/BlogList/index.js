import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogItemsList} = props
  return (
    <ul className="list-items-cont">
      {blogItemsList.map(eachItem => (
        <BlogItem key={eachItem.id} blogDetails={eachItem} />
      ))}
    </ul>
  )
}

export default BlogList

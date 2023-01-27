import React from 'react'
import { Link } from 'react-router-dom'
const ArticlesListPage = ({articles}) => {
  return (
    <>
    {articles.map(article=>
      (
          <Link key={article.name} to={`/articles/${article.name}`}>
        <h3 className='text-lg font-bold my-5'>{article.title}</h3>
        <p className='text-sm my-10 mx-10'>{article.content[0].substring(0,150)}...</p>
        </Link>
        
  ))}
    </>
  )
}

export default ArticlesListPage
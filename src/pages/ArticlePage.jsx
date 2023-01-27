import React from 'react'
import articles from './article-content'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound'
const ArticlePage = () => {
  const {articleid}=useParams();
  const article=articles.find(article=>article.name===articleid)
  
  if(!article)
  {
    return <NotFound/>
  }

  return (
    <>
    <h1 className='underline font-bold'>{article.title}</h1>
    {article.content.map(paragraph=>
      (
        <p className='my-4 mx-4 text-lg'>{paragraph}</p>
      ))}
      </>
  )
}

export default ArticlePage
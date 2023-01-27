import React from 'react'
import articles from './article-content'
import { Link } from 'react-router-dom'
import ArticlesListPage from '../components/ArticlesListPage'
const ArticlesList = () => {
  return (
    <>
    <h1 className='font-bold text-4xl underline'>Articles</h1>
    <ArticlesListPage articles={articles}/>
        
 
  </>
  )
}

export default ArticlesList
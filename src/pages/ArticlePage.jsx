import React from 'react'
import articles from './article-content'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound'
import axios from 'axios'
import AddCommentForm from '../components/AddCommentForm'
import { useState,useEffect } from 'react'
import Commentslist from '../components/Commentslist'
const ArticlePage = () => {

  const [articleinfo,setarticleinfo]=useState({upvotes :0,comments:[]});
  const {articleid}=useParams();
  useEffect(()=>
  {
    const loadarticleinfo=async ()=>
    {

      const response=await axios.get(`/api/articles/${articleid}`);
      const newarticleinfo=response.data;
      setarticleinfo(newarticleinfo);

    }
    loadarticleinfo();
    
  },[]
  ); 

  
  const article=articles.find(article=>article.name===articleid)
  
  const addupvote=async ()=>
  {
    const response= await axios.put(`/api/articles/${articleid}/upvote`);
    const updatedarticle=response.data;
    setarticleinfo(updatedarticle);
  }


  if(!article)
  {
    return <NotFound/>
  }

  return (
    <>
    <h1 className='underline font-bold'>{article.title}</h1>
    <button className='text-white border-2px solid rounded-md bg-black my-2 px-3 py-3 border-2px solid' onClick={addupvote}>Upvote</button>
    <p>This article has {articleinfo.upvotes} upvotes</p>
    {article.content.map(paragraph=>
      (
        <p className='my-4 mx-4 text-lg'>{paragraph}</p>
      ))}
      <AddCommentForm articleName={articleid} onArticleUpdated={updatedarticle=>setarticleinfo(updatedarticle)}/>
      <Commentslist comments={articleinfo.comments}/>
      </>
  )
}

export default ArticlePage
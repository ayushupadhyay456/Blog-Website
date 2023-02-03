import React from 'react'

const Commentslist = ({comments}) => {
  return (
    <div>
        <h3 className='font-bold'>Comments:</h3>
    {comments.map(comment=>
        (
            <div className='comment flex justify-center row-auto' key={comment.postedby +':'+comment.text}>
                <h4 className='font-bold'>By-{comment.postedby}</h4>
                <p>-<span className='font-bold'>Comment</span>({comment.text})</p>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                
                </div>
        ))}
    
    </div>
  )
}

export default Commentslist
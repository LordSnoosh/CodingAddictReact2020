import React from 'react'

const BookItem = ({ img, title, author, rating, description }) => {
  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('hello')
  }
  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article
      className='bookItem'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' className='bookImage' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <div>{rating}</div>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        more conplex example
      </button>
      <p>{description}</p>
    </article>
  )
}

export default BookItem

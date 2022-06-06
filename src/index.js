import React from 'react'
import ReactDom from 'react-dom'
//CSS
import './index.css'
import { data } from './books'
import BookItem from './BookItem'

function BookList() {
  return (
    <section className='booklist'>
      {data.map((bookItem, index) => {
        return <BookItem key={bookItem.id} {...bookItem}></BookItem>
      })}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))

import { useState } from "react";

function NewBookForm({addBookToState}) {
  
  const [ newTitle, setTitle ] = useState( '' )
  const [ newAuthor, setAuthor ] = useState( '' )
  const [ newGenre, setGenre ] = useState( '' )
  const [ newYear, setYear ] = useState( '' )
  const [ newImage, setImage ] = useState( '' )
  const [ newReview, setReview ] = useState( '' )

  const handleTitle = e => setTitle( e.target.value )
  const handleAuthor = e => setAuthor( e.target.value )
  const handleGenre = e => setGenre( e.target.value )
  const handleYear = e => setYear( e.target.value )
  const handleImage = e => setImage( e.target.value )
  const handleReview = e => setReview( e.target.value )
  
  const handleSubmit = e => {
    e.preventDefault()

    const newBook = {
      title: newTitle,
      author: newAuthor,
      genre: newGenre,
      year: newYear,
      image: newImage,
      review: newReview
    }

    fetch( 'http://localhost:6001/books', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( newBook )
    } )
      .then( r => r.json() )
      .then( addBookToState )
    e.target.reset()
  }
  
  return (
    <div className="new-book-form">
    <h2>New Book</h2>
    <form onSubmit={ handleSubmit } >
      <input onChange={ handleTitle } type="text" name="title" 
        placeholder="Book title..." />
        <input onChange={ handleAuthor } type="text" name="author" 
        placeholder="Author name..." />
        <input onChange={ handleGenre } type="text" name="genre" 
        placeholder="Genre..." />
        <input onChange={ handleYear } type="text" name="year" 
        placeholder="Year published..." />
        <input onChange={ handleImage } type="text" name="image"
        placeholder="Image URL..." />
        <input onChange={ handleReview } type="text" name="review" 
        placeholder="Your review..." />
      <button type="submit">Add Book</button>
    </form>
  </div>
    );
}

export default NewBookForm;
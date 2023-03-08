import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";


function BookCard({book, removeBookFromState, currentUser, checkOutBook, isMyBooks, handleReturnBookClick}) {

  const [detailToggle, setDetailToggle] = useState(false)

  function bookDetailToggle(){
    setDetailToggle(!detailToggle)
  }


  function handleDelete(id) {
    fetch(`http://localhost:6001/books/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
      .then(r => r.json())
      .then(() => removeBookFromState(id)      )
  }

  function handleCheckOutClick() {
    //Update book to owner=currentUser
    checkOutBook(book);
  }

  const isLoggedIn = currentUser;

  return (
      <div className="bg-white p-4 rounded-lg rounded-tl-[70px]
       w-full max-w-[240px] mx-auto cursor-pointer hover:scale-125 duration-150" onClick={bookDetailToggle}>
        { detailToggle ? (null) : <img className='mb-8 rounded-lg rounded-tl-[40px]'  src={book.image} alt={book.title}/>}     
         <div className="mbflex gap-x-1 text-xsm">
            { detailToggle ? (<div className=" p-4 rounded-lg rounded-tl-[70px]
            w-full max-w-[240px] mx-auto cursor-pointer">Title:{book.title} <div>Author: {book.author}</div> <div>Genre: {book.genre}</div> 
            <div>Published: {book.year}</div> <div className="font-bold text-2l px-2 pt-4">{book.review}</div> </div>) : null}
          </div>

          {(isMyBooks) ? (
            <div key={book.id}>
                <button onClick={() => handleReturnBookClick(book)}>Return Book</button>
            </div>
            ) : (<div>
                { {currentUser} === "admin" ? (<button type="button" onClick={()=>handleDelete(book.id)}>Remove Book</button>) : (null)} 
                { book.owner ? (<div>Checked out to: {book.owner}</div>) : (null)} 
                { (isLoggedIn && !book.owner) ? (<button onClick={handleCheckOutClick}>Check Me Out</button>) : (null)}
                { (!isLoggedIn && !book.owner) ? (<button><NavLink to="/login" exact>Login to Check Out</NavLink></button>) : (null)}
                </div>)}
      </div>
    );
}

export default BookCard;


// max-w-[500px] mx-auto p-4 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14

// const Front = ({ name, image }) => {
//   return (
//       <div>
//           <h1>{ name }</h1>
//           <img src={ image } alt='piggy'/>
//       </div>
//   )
// }

// const Back = ({ hog }) => {
  
//   return (
//       <div>
//           <h1>{ hog.name }</h1>
//           <h3>{ hog.specialty }</h3>
//           <h2>{ hog.weight } kilos</h2>
//           <h4 className="achievementText">
//               { hog["highest medal achieved"] } medal achieved
//           </h4>
//           { hog.greased ? <h1>READY FOR FUN</h1> : <div>no grease</div> }
//       </div>
//   )
// }


// const HogCard = ({ hog }) => {

//   const [ showFront, setShowFront ] = useState( false )
//   const toggleFront = () => setShowFront( showFront => !showFront )

//   return (
//       <div onClick={ toggleFront } 
//           className="ui three wide column image pigTile">
//           { showFront ? 
//               <Front name={ hog.name } image={ hog.image } /> : 
//               <Back hog={ hog } /> 
//           }
//       </div>
//   )
// }
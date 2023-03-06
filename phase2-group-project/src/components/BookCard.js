

function BookCard() {

    return (
        <li className="card">
          <img src='image' alt='name' />
          <h4>Name</h4>
          <p>Price: </p>
          {false ? (
            <button className="primary">In Stock</button>
          ) : (
            <button>Out of Stock</button>
          )}
        </li>
      );
    }
      
    
    
    export default BookCard;
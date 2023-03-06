
function NewBookForm() {

    //adding state to the form
    return (
        <div className="new-plant-form">
          <h2>New Plant</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name"  placeholder="Plant name" onChange={handleNameChange}/>
            <input type="text" name="image" placeholder="Image URL" onChange={handleImageChange}/>
            <input type="number" name="price" step="0.01" placeholder="Price" onChange={handlePriceChange}/>
            <button type="submit">Add Plant</button>
          </form>
        </div>
      );
  }
  
  
  
  export default NewBookForm;
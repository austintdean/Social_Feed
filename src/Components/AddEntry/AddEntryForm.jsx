import React, { useState } from 'react';




const AddEntryForm = (props) => {
    
    
    const [name, setName] = useState('')
    const [post, setPost] = useState('')
    
    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            name : name,
            post: post

        }
        console.log(newEntry)
        props.AddNewEntryProperty(newEntry)
    }


    return (
        <form onSubmit={handleSubmit}>
        <div>
            <div className = 'form-group'>
                <label>Name</label>
                <input type='text' className="form-control" value = {name} onChange={(event) => {setName(event.target.value)}}/>
            </div>
            <div className = 'form-group'>
                <label>Post</label>
                <input type='text' className="form-control" value = {post} onChange={(event) => {setPost(event.target.value)}}/>
            </div>
                <button type = 'submit' className="btn btn-dark btn-lg btn-block"  style={{'marginTop': '1em', width : '100%'}}>Post</button>
        </div>
        </form>
      );
}
 
export default AddEntryForm;
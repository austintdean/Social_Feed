import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import "./App.css"


function App() {

    const [entries, setEntries] = useState([{name : "JJ V.", post: "I have a sense of humor!"  }, {name : "Megan C.", post: "Kirby is the best!"  }])



    function addNewEntry(entry){
        
        let tempEntries = [entry,...entries];
        
        setEntries(tempEntries);


    }
    return (
    <div className='d-flex justify-content-start'>
    <div className='container-fluid'>
        <div className='column'>
            <div className='mainEntrycontainer'>
                <div className='border-box'>
                <AddEntryForm AddNewEntryProperty={addNewEntry}/>
                </div>
            </div>
            <div className='mainEntrycontainer'>
                <div className='border-box'>
                <DisplayEntries parentEntries={entries}/>
                </div>        
            </div>

        </div>
    </div>
     
    </div>
   )   
}

export default App;
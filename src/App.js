import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';



function App() {

    const [entries, setEntries] = useState([{name : "JJ V.", post: "I have a sense of humor!"  }, {name : "Megan C.", post: "Kirby is the best!"  }])



    function addNewEntry(entry){
        
        let tempEntries = [entry,...entries];
        
        setEntries(tempEntries);


    }
    return (
    <div>
        <DisplayEntries parentEntries={entries}/>
        <AddEntryForm AddNewEntryProperty={addNewEntry}/>

    </div>
)
}

export default App;
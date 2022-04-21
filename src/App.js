import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';




function App() {

    const [entries, setEntries] = useState([{name : "JJ V.", post: "I have a sense of humor!"  }, {name : "Megan C.", post: "Kirby is where it is at!"  }])


    return (
    <div>
        <DisplayEntries parentEntries={entries}/>

    </div>
)
}

export default App;
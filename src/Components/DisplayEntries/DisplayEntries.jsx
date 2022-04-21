
const DisplayEntries = (props) => {
    return (  
        <table>
            <thead>
                <tr>
                    <th>Social Post</th>
                </tr>
            </thead>
            <tbody>
                {props.parentEntries.map((entry) => {
                    return (
                        <tr>
                            <td><h4>{entry.name}</h4></td>
                            <td>{entry.post}</td> 
                        </tr>
                        
                    );
                })}
            </tbody>
        </table>

        );
    }
    
export default DisplayEntries;
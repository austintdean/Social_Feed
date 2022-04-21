
const DisplayEntries = (props) => {
    return (  
        <table>
            <thead>
                <tr>
                    <th>Social Post</th>
                </tr>
            </thead>
            <tbody>
                {props.parentEntries.map((entry, index) => {
                    return (
                        <tr key = {index + 1}>
                            <td><h4>{entry.name}</h4></td>
                            <td>{entry.post}</td> 
                        </tr>
                        
                    );
                })}
            </tbody>
            <tfoot>

            </tfoot>
        </table>

        );
    }
    
export default DisplayEntries;
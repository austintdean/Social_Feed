import LikeToggle from "../LikeToggle/LikeToggle";
import DislikeToggle from "../DislikeToggle/DislikeToggle";

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
                            <td> <LikeToggle /></td>
                            <td><DislikeToggle /></td>


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
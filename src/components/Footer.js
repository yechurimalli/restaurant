import React from 'react';
import {Link} from 'react-router-dom';
import Two from './Two';
function Footer()
{
    return(<div style={{display:'flex',flexdirection:'center'}} >
    <p>this is copyright '&copy' </p>
    <nav>
    <Link to="/Two">clickme</Link>
    </nav>
    </div>
    );
}
export default Footer

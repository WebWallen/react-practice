import React from 'react';
import { Link } from 'react-router-dom';

// Note: implicit rendering is done with () and has no return; explicit requires a { and inner return statement
const NotFound = () => (
    <div>
      {/* Links eliminate full page refresh, merely swaps in new content */}
      404 - <Link to="/">Go Home</Link>
    </div>
)

export default NotFound;
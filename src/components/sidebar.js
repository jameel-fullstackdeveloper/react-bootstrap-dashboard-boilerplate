import React from 'react';
import {Link} from 'react-router-dom'

const Sidebar = (props) => {
    return (  
        <React.Fragment>
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">React - Bootstrap </div>
                    <div className="list-group list-group-flush">
                        <Link to="dashboard" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
                        <Link to="#" className="list-group-item list-group-item-action bg-light">Shortcuts</Link>
                        <Link to="#" className="list-group-item list-group-item-action bg-light">Overview</Link>
                        <Link to="#" className="list-group-item list-group-item-action bg-light">Events</Link>
                        <Link to="#" className="list-group-item list-group-item-action bg-light">Profile</Link>
                        <Link to="#" className="list-group-item list-group-item-action bg-light">Status</Link>
                    </div>
            </div>
        </React.Fragment>

    );
}
 
export default Sidebar;
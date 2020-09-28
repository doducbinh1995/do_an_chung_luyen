import React from 'react';
import './layout.scss';
import LeftNavbar from '../left-navbar/left-navbar.view'
function Layout(props) {
    return (
        <div className="row">
            <div className="d-none d-lg-block col-2">
                <LeftNavbar />
            </div>
            <div id="rightMainContent" className="col-10" style={{ height: "100vh", overflow: 'auto' }}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout
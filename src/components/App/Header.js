import React from 'react';

import {Link} from 'react-router';

const Header = () => (
    <header>
        <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
                <li>
                    <Link to="/surveys">Encuestas</Link>
                </li>
                <li>
                    <Link to="/sync">Sincronizar</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;

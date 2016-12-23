import React, {PropTypes} from 'react';
import Header from './Header';
import Footer from './Footer';

const App = ({children}) => (
    <div className="App">
        <Header/>
        {children}
        <Footer/>
    </div>
);

App.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(React.PropTypes.node),
        PropTypes.node
    ])
};

export default App;

import React from 'react';

import Header from '../Header';
import Content from '../Content';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

class App extends React.Component {
    render() {
        return (
            <div styleName="App">
                <Header />
                <Content />
                <Sidebar />
                <Footer />
            </div>
        );
    }
}

export default App;
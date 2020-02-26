import React from "react";
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Count from './Count';
import ResourceList from './ResourceList';


const App = () => {
    return (
    <div className="ui container">
        <BrowserRouter>
        <div>
            <Route path="/" exact component={Count} />
             <Route path="/components/new" exact component={ResourceList} />
        </div>
        </BrowserRouter>
    </div>
    );
};

export default App;
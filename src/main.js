import React from 'react';
import RepoList from './repo-list';

class MyApp extends React.Component {
    render() {
        return (
            <div>
                <h2>open sauce</h2>
                <RepoList />
            </div>
        );
    }
}

React.render(<MyApp />, document.getElementById('myApp'));

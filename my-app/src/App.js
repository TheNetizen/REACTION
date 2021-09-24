import React from 'react';

var count = 1;
class App extends React.Component {
        render() {
                React.Children.map(this.props.children, () => {
                        console.log('child', count++);
                });
                return (<h1>Hello</h1>)
        }
};
export default App;


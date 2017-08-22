const React = require('react');
const ReactDOM = require('react-dom');

class Page extends React.Component {
    render(){
        return(
            <div>
                Hello, world!
            </div>
        )
    }
}


ReactDOM.render(
    <Page/>,
    document.getElementById('root')
);
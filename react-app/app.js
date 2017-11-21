const React = require('react');
const ReactDOM = require('react-dom');

// Presentational component
const Hello = function(props){
    return(
        <div>
            {'Hello, '+props.place+'!'}
        </div>
    )
}

// Compositional component
class Page extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            place: 'World'
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            place: 'Kentucky'
        })
    }

    render(){
        return(
            <div>
                <input type="button" onClick={this.handleClick} value="Change place"/>
                <Hello place={this.state.place} />
            </div>
        )
    }
}


ReactDOM.render(
    <Page />,
    document.getElementById('root')
);
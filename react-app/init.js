window.React = require('react');
window.ReactDOM = require('react-dom');
window.h = require('react-hyperscript');

// Presentational component
var Hello = function(props){
    return h('div', 'Hello, '+props.place+'!')
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
        return h('div', [
            h('input', { type: 'button', onClick: this.handleClick, value: "Change Place" }),
            h(Hello, { place: this.state.place })
        ]);
    }
}


ReactDOM.render(
    h(Page),
    document.getElementById('root')
);
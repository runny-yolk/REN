window.React = require('react');
window.ReactDOM = require('react-dom');
window._ = require('react-hyperscript');

// Presentational component
var Hello = function(props){
    return _('div', 'Hello, '+props.place+'!')
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
        return _('div', [
            _('button', {onClick: this.handleClick}, 'Change Place'),
            _(Hello, { place: this.state.place })
        ]);
    }
}


ReactDOM.render(
    _(Page),
    document.getElementById('root')
);

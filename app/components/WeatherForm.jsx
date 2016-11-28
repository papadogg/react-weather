var React = require('react');

class WeatherForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.onSearch.bind(this)}>
                <input type="search" ref="location" placeholder="Search weather by city"/>
                <button className="button expanded hollow">Get Weather</button>
            </form>
        );
    }
    onSearch(e){
        e.preventDefault();
        let location = this.refs.location.value;
        
        if(location.length > 0){
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    }
}

module.exports = WeatherForm;
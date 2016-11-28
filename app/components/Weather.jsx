var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

class Weather extends React.Component {
    constructor(props){
        super(props);   
        this.state = {
            isLoading: false
        }
    }
    componentDidMount(){
        var location = this.props.location.query.location;
        if(location && location.length > 0){
            this.handleSearch(location);
            window.location.hash = '#/'
        }
    }
    componentWillReceiveProps(newProps){
         var location = newProps.location.query.location;
        if(location && location.length > 0){
            this.handleSearch(location);
            window.location.hash = '#/'
        }
    }
    render() {
        let {isLoading, location, temp,errorMessage} = this.state;
        function renderMessage(){
            
            if(isLoading){
                return <h3 className="text-center">Fetching weather...</h3>
            } else if(temp && location){
                return <WeatherMessage location={location} temp={temp}/>;
            }
        };
        
        function renderError(){
            if(typeof errorMessage === 'string'){
                return(
                    <ErrorModal message={errorMessage}/>
                );
            }
        };
        
        return (
            <div>
                <h1  className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch.bind(this)}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
    handleSearch(location){
        var that = this;
       
        
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            temp: undefined,
            location:undefined
        })
        
        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
        });
        }, function(e){     
            
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
        
    }
    
}

module.exports = Weather;
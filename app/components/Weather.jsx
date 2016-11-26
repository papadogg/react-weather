var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

class Weather extends React.Component {
    constructor(props){
        super(props);   
        this.state = {
            isLoading: false
        }
    }
    render() {
        let {isLoading, location, temp} = this.state;
        function renderMessage(){
            
            if(isLoading){
                return <h3>Fetching weather...</h3>
            } else if(temp && location){
                return <WeatherMessage location={location} temp={temp}/>;
            }
        };
        
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch.bind(this)}/>
                {renderMessage()}
            </div>
        );
    }
    handleSearch(location){
        var that = this;
       
        
        this.setState({
            isLoading: true
        })
        
        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
        });
        }, function(errorMessage){
            alert(errorMessage);
            that.setState({
                isLoading: false
            });
        });
        
    }
    
}

module.exports = Weather;
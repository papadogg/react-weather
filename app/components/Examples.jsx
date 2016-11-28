var React = require('react');
var {Link} = require('react-router');

const Examples = (props)=> {
    
        return (
            <div>
            <h1 className="text-center page-title">Examples</h1>
            <p className="text-center">Here are a few example loacions to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Brest'>Brest, BY</Link>
                </li>
                <li>
                    <Link to='/?location=London'>London</Link>
                </li>
            </ol>
            </div>
        );
    
}

module.exports = Examples;
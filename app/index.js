import React from "react";
import ReactDOM from "react-dom";
import "./index.css";



class App extends React.Component {
    render() {
        return (
            <div className="container">
                Hello from the index file
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

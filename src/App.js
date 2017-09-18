import React, { Component } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Header/>
                            <Main/>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

import React, { Component } from "react";
import Articles from "./articles/Articles";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fakeData: [
                {
                    id: 1,
                    title: "Title",
                    content: "This is Content",
                    author: "Cuong Nguyen"
                },
                {
                    id: 2,
                    title: "Title",
                    content: "This is Content",
                    author: "Cuong Nguyen"
                },
                {
                    id: 3,
                    title: "Title",
                    content: "This is Content",
                    author: "Cuong Nguyen"
                }
            ]
        }
    }

    renderArticle() {
        const data = this.state.fakeData;
        if (data.length === 0) {
            return (
                <p>No Content</p>
            )
        } else {
            return (
                <Articles data={data}/>
            )
        }
    }

    render() {
        return (
            <section className="main">
                {this.renderArticle()}
            </section>
        );
    }
}

export default Main;
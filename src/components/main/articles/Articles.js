import React, { Component } from "react";

class Articles extends Component {
    render() {
        let data = this.props.data;
        return (
            <div className="articles-list">
                {data.map(article => (
                    <article key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                        <span><strong>Author: </strong>{article.author}</span>
                    </article>
                ))}
            </div>
        )
    }
}

export default Articles;
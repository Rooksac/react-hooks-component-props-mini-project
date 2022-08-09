import React from "react";
import Article from "./Article";


function ArticleList({ posts }) {
    console.log(posts)
    const renderArticle = posts.map((post, i) => {
        return (
            // <Article
            //     title={post.title}
            //     date={post.date}
            //     preview={post.preview}
            //     key={post.id}
            // />
            <Article 
                key = {i}
                posts = {post}
            />
        )
    });
    console.log(renderArticle)
    return (
        <main>
            {renderArticle}
        </main>
    )
}

export default ArticleList;
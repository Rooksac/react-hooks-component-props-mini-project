import React from "react";

function Article({posts}) {
    console.log(posts)
    return (
        <article>
            <h3>{posts.title}</h3>
            {posts.date ? <small>{posts.date}</small> : <small>January 1, 1970</small>}
            <p>{posts.preview}</p>
        </article>
    )
}
export default Article;
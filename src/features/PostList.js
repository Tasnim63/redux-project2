import { useSelector } from "react-redux";
import { selectAllPost } from "./posts/postSlice";
import React from "react";
import PostAuthor from "./posts/PostAuthor";
import TimesAgo from "./posts/TimesAgo";
import ReactionButtons from "./posts/ReactionButtons";
export default function PostList() {
  const posts = useSelector(selectAllPost);


const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

  const renderdedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimesAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post}  />
    </article>
  ));
  return (
    <>
      <section>
        <h2>posts</h2>
        {renderdedPosts}
      </section>
    </>
  );
}

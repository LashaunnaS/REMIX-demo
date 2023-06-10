import { Link, useLoaderData } from '@remix-run/react';
import { db } from '~/utils/db.server';

type post = {
  id: string;
  title: string;
  body: string;
  createdAt: Date;
};

export const loader = async () => {
  const data = {
    posts: await db.post.findMany({
      select: { id: true, title: true, createdAt: true },
    }),
  };

  // TODO: Demo where loaders run✨
  // console.log('=== DATA ===');

  return data;
};

function PostItems() {
  const { posts } = useLoaderData();

  return (
    <div>
      <div className="page-header">
        <h1>Posts</h1>
        <Link to="new" className="btn">
          New Post
        </Link>
      </div>
      <ul className="posts-list">
        {posts.map((post: post) => (
          <li key={post.id}>
            <Link to={post.id}>
              <h3>{post.title}</h3>
              {new Date(post.createdAt).toLocaleDateString()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostItems;

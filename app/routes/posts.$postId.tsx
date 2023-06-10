import type { ActionArgs, LoaderArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { Form, Link, useLoaderData } from '@remix-run/react';
import { db } from '~/utils/db.server';

export const loader = async ({ params }: LoaderArgs) => {
  const post = await db.post.findUnique({
    where: { id: params.postId },
  });

  if (!post) throw new Error('Post not found');

  const data = { post };

  return data;
};

export const action = async ({ request, params }: ActionArgs) => {
  const form = await request.formData();

  if (form.get('_method') === 'delete') {
    const post = await db.post.findUnique({
      where: { id: params.postId },
    });

    if (!post) throw new Error('Post not found');

    await db.post.delete({ where: { id: params.postId } });

    return redirect('/posts');
  }
};

function Post() {
  const {
    post: { title, body, imageUrl },
  } = useLoaderData();

  return (
    <div>
      <div className="page-header">
        <h1>{title}</h1>
        <Link to="/posts" className="btn btn-rev">
          Back
        </Link>
      </div>
      <div className="page-content">
        <div className="image-container">
          <img src={imageUrl} alt="" />
        </div>
        <p>{body}</p>
      </div>
      <div className="page-footer">
        <Form method="POST">
          <input type="hidden" name="_method" value="delete" />
          <button className="btn btn-delete">Delete</button>
        </Form>
      </div>
    </div>
  );
}

export default Post;

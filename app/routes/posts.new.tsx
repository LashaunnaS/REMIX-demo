import { redirect } from '@remix-run/node';
import type { ActionArgs } from '@remix-run/node';
import {
  Form,
  Link,
  isRouteErrorResponse,
  useRouteError,
} from '@remix-run/react';
import { db } from '~/utils/db.server';

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const title = form.get('title');
  const body = form.get('body');
  const imageUrl = form.get('imageUrl');

  const fields = { title, imageUrl, body };

  const post = await db.post.create({ data: fields });

  return redirect(`/posts/${post.id}`);
};

function NewPost() {
  return (
    <div>
      <div className="page-header">
        <h1>New Post</h1>
        <Link to="/posts" className="btn btn-reverse">
          Back
        </Link>
      </div>
      <div className="page-content">
        <Form method="POST">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" />
          </div>
          <div className="form-control">
            <label htmlFor="imageUrl">Image URL</label>
            <input type="text" name="imageUrl" />
          </div>
          <div className="form-control">
            <label htmlFor="body">Body</label>
            <textarea name="body" />
          </div>
          <button type="submit" className="btn btn-block">
            Add Post
          </button>
        </Form>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  let error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

export default NewPost;

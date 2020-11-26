export async function getAllPostIds() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: post.id + "",
      },
    };
  });
}

// data pour 1 seul post

export async function getPostData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  console.log(" post ", post);
  return post;
}

export async function getPostsData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
}

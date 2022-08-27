const API = process.env.REACT_APP_API || "http://localhost:3005";

export async function getPostById(postId) {
  return httpFetch("/posts/" + postId);
}

export async function getPosts() {
  return httpFetch("/posts");
}

export async function createNewPost(newPost) {
  return httpFetch("/posts", { method: "post", body: newPost });
}

async function httpFetch(path, params) {
  const res = await fetch(`${API}${path}`, {
    ...params,
    body: params?.body ? JSON.stringify(params.body) : undefined,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = res.json();

  if (!res.ok) return Promise.reject(data);

  return data;
}

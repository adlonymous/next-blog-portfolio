import { getPostsMeta } from "@/lib/posts";
import ListItem from "./ListItem";

export default async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available</p>;
  }

  return (
    <section className="mt-12 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold dark:text-white/90 underline decoration-dashed decoration-sky-500 underline-offset-2">
        My Blog
      </h2>
      <ul className="w-full indent-8 list-none p-0">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}

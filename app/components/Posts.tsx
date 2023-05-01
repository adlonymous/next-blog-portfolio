import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"

export default function Posts() {
    const posts = getSortedPostsData()

    return (
        <section className="mt-12 mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold dark:text-white/90 underline decoration-dashed decoration-sky-500 underline-offset-2">My Blog</h2>
            <ul className="w-full indent-8">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
    )
}
import getFormattedDate from "@/lib/getFormattedDate"
import { getSortedPostsData, getPostData } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"

export async function generateMetadata({ params }: { params: { postId: string }}) {

    const posts = getSortedPostsData()
    const { postId } = params

    const post =  posts.find(post => post.id === postId)

    if(!post){
        return {
            title: 'Post not found'
        }
    }
   
    return {
        title: post.title, 
    }

}

export default async function Post({ params }: { params: { postId: string }}) {

    const posts = getSortedPostsData()
    const { postId } = params

    if (!posts.find(post => post.id === postId)) {
        return notFound()
    }

    const { title,date, contentHtml } = await getPostData(postId)

    const pubDate = getFormattedDate(date)

  return (
    <main className="px-6 py-10 prose prose-xl prose-slate dark:prose-invert mx-auto font-extralight">
        <h1 className="text-3xl mt-4 mb-0 underline decoration-wavy decoration-sky-500 ">{title}</h1>
        <p className="mt-1 font-light">{pubDate}</p>
        <article>
            <section dangerouslySetInnerHTML={{__html: contentHtml}} />
            <p>
                <Link href="/" className="no-underline ">⬅ Back to Home</Link>
            </p>
        </article>
    </main>
  )
}

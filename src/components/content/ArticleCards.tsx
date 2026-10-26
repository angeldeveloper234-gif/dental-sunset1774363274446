import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/content/posts";
export function ArticleCards({ limit = 8 }: { limit?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.slice(0, limit).map((post) => (
        <article
          key={post.slug}
          className="group overflow-hidden rounded-[1.5rem] border border-[#E2E7EF] bg-white"
        >
          <Link href={"/blog/" + post.slug} className="block">
            <div className="aspect-[1.65] overflow-hidden bg-softblue">
              <img
                src={"/images-media/" + post.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="mb-3 text-xs font-medium text-primary">
                {post.category} · 3 min de lectura
              </p>
              <h3 className="text-xl font-bold leading-snug">{post.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                {post.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                Leer artículo <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}

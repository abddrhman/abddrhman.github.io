import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const slug = (await params).slug;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
      <Link
        href="/activity"
        className="inline-flex items-center gap-2 font-display font-bold text-xs sm:text-sm uppercase tracking-wider border-2 border-black px-3 py-2 sm:px-4 sm:py-2 bg-white hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-colors shadow-brutal mb-6 sm:mb-8 group"
      >
        <svg width="14" height="14" className="sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </svg>
        back to activity
      </Link>

      <div className="border-[3px] sm:border-4 border-black bg-white shadow-brutal overflow-hidden">
        <div className="h-48 sm:h-80 lg:h-96 relative border-b-[3px] sm:border-b-4 border-black bg-black">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 960px"
          />
        </div>

        <div className="p-4 sm:p-8 lg:p-10">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider bg-black text-white px-2 py-1 sm:px-3 sm:py-1.5">
              {article.category}
            </span>
            <span className="font-body text-xs sm:text-sm font-medium text-gray-500">
              {article.date}
            </span>
          </div>

          <h1 className="font-display font-bold text-2xl sm:text-5xl lg:text-6xl uppercase leading-[0.9] tracking-tighter mb-2">
            {article.title}
          </h1>

          <div className="w-10 sm:w-16 h-1 sm:h-1.5 bg-accent-500 my-4 sm:my-6" />

          <p className="font-body text-sm sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 border-l-[3px] sm:border-l-4 border-accent-500 pl-3 sm:pl-4 italic">
            {article.excerpt}
          </p>

          <div className="space-y-4 sm:space-y-6">
            {article.content.map((paragraph, i) => (
              <div key={i} className="flex gap-2 sm:gap-4">
                <span className="font-display font-bold text-accent-500 text-[10px] sm:text-sm shrink-0 mt-0.5 sm:mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-sm sm:text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 text-center">
        <Link
          href="/activity"
          className="inline-flex items-center gap-2 font-display font-bold text-xs sm:text-sm uppercase tracking-wider bg-black text-white px-6 py-3 sm:px-8 sm:py-4 border-2 border-black hover:bg-accent-500 hover:border-accent-500 transition-colors shadow-brutal"
        >
          <svg width="14" height="14" className="sm:w-4 sm:h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          back to all articles
        </Link>
      </div>
    </div>
  );
}

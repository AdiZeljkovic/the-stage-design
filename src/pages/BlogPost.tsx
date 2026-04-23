import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { blogApi, BlogPost as ApiBlogPost } from "@/lib/api";
import ReactMarkdown from "react-markdown";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const months = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
  return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<ApiBlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<ApiBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    blogApi.getBySlug(slug)
      .then((p) => {
        setPost(p);
        // Fetch related posts
        blogApi.getAll().then((all) => {
          setRelatedPosts(all.filter(a => a.category === p.category && a.id !== p.id).slice(0, 3));
        }).catch(() => {});
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (notFound) return <Navigate to="/blog" replace />;

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-white">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 pt-32 pb-20 space-y-4">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="h-6 bg-cream rounded animate-pulse" style={{ width: `${60 + i * 8}%` }} />
          ))}
        </div>
      </div>
    );
  }

  if (!post) return null;

  const shareUrl = `https://thestage.ba/blog/${post.slug}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, text: post.excerpt, url: shareUrl });
      } catch { /* ignored */ }
    }
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <SEO
        title={`${post.title} | Blog - The Stage Sarajevo`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        ogType="article"
      />
      <BreadcrumbSchema
        items={[
          { name: "Početna", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` }
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-soft-grey hover:text-gold transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Nazad na blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge className="bg-gold/10 text-gold hover:bg-gold/20 border-0">{post.category}</Badge>
            <span className="flex items-center gap-1 text-soft-grey text-sm">
              <Calendar className="w-4 h-4" /> {formatDate(post.published_at)}
            </span>
            <span className="flex items-center gap-1 text-soft-grey text-sm">
              <Clock className="w-4 h-4" /> {post.read_time} min čitanja
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark-grey mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-soft-grey mb-8 italic border-l-4 border-gold pl-4">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between py-4 border-y border-gold/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-gold font-serif font-bold">TS</span>
              </div>
              <span className="text-dark-grey font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={handleShare} className="text-soft-grey hover:text-gold">
                <Share2 className="w-5 h-5" />
              </Button>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 text-soft-grey hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="p-2 text-soft-grey hover:text-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="blog-content">
            <ReactMarkdown
              components={{
                h2: ({ children }) => <h2 className="text-xl md:text-2xl font-serif font-bold text-dark-grey mt-8 mb-4 pb-2 border-b border-gold/20">{children}</h2>,
                h3: ({ children }) => <h3 className="text-lg md:text-xl font-serif font-semibold text-dark-grey mt-6 mb-3">{children}</h3>,
                p: ({ children }) => <p className="text-base text-soft-grey leading-relaxed mb-4">{children}</p>,
                strong: ({ children }) => <strong className="text-dark-grey font-semibold">{children}</strong>,
                ul: ({ children }) => <ul className="my-4 space-y-2 pl-1">{children}</ul>,
                ol: ({ children }) => <ol className="my-4 space-y-2 pl-1 list-decimal list-inside">{children}</ol>,
                li: ({ children }) => (
                  <li className="text-soft-grey text-base leading-relaxed flex items-start gap-2">
                    <span className="text-gold mt-1.5">•</span>
                    <span className="flex-1">{children}</span>
                  </li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="my-6 py-4 px-5 bg-cream/50 border-l-4 border-gold rounded-r-lg">
                    <div className="text-base text-dark-grey font-serif italic leading-relaxed">{children}</div>
                  </blockquote>
                ),
                a: ({ href, children }) => {
                  if (href?.startsWith('/')) {
                    return <Link to={href} className="text-gold font-semibold underline decoration-gold/30 underline-offset-4 hover:decoration-gold transition-all">{children}</Link>;
                  }
                  return <a href={href} target="_blank" rel="noopener noreferrer" className="text-gold font-semibold underline decoration-gold/30 underline-offset-4 hover:decoration-gold transition-all">{children}</a>;
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          <div className="mt-12 pt-8 border-t border-gold/10">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Badge key={tag} variant="outline" className="border-gold/30 text-soft-grey hover:bg-gold/10">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="py-12 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-dark-grey mb-4">
            Želite organizirati proslavu?
          </h2>
          <p className="text-soft-grey mb-6">Kontaktirajte nas i zajedno ćemo stvoriti nezaboravne trenutke</p>
          <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-warm-white">
            <Link to="/kontakt">Rezervišite Termin</Link>
          </Button>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-dark-grey mb-8">Povezani Članci</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(related => (
                <Link key={related.id} to={`/blog/${related.slug}`} className="group">
                  <article className="bg-cream rounded-xl overflow-hidden hover:shadow-elegant transition-all">
                    <div className="p-5">
                      <Badge className="mb-3 bg-warm-white text-soft-grey border-0 text-xs">{related.category}</Badge>
                      <h3 className="font-serif font-bold text-dark-grey group-hover:text-gold transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-soft-grey text-sm mt-2 line-clamp-2">{related.excerpt}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;

import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('bs-BA', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const shareUrl = `https://thestagesarajevo.com/blog/${post.slug}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <SEO
        title={`${post.title} | Blog - The Stage Sarajevo`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Početna", url: "https://thestagesarajevo.com/" },
          { name: "Blog", url: "https://thestagesarajevo.com/blog" },
          { name: post.title, url: `https://thestagesarajevo.com/blog/${post.slug}` }
        ]}
      />
      
      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": post.image,
          "author": {
            "@type": "Organization",
            "name": post.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "The Stage Sarajevo",
            "logo": {
              "@type": "ImageObject",
              "url": "https://thestagesarajevo.com/logo.png"
            }
          },
          "datePublished": post.publishedAt,
          "dateModified": post.publishedAt,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": shareUrl
          }
        })}
      </script>

      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-soft-grey hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Nazad na blog
          </Link>

          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge className="bg-gold/10 text-gold hover:bg-gold/20">
              {post.category}
            </Badge>
            <span className="flex items-center gap-1 text-soft-grey text-sm">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1 text-soft-grey text-sm">
              <Clock className="w-4 h-4" />
              {post.readTime} min čitanja
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark-grey mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg md:text-xl text-soft-grey mb-8 italic border-l-4 border-gold pl-4">
            {post.excerpt}
          </p>

          {/* Author & Share */}
          <div className="flex items-center justify-between py-4 border-y border-gold/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-gold font-serif font-bold">TS</span>
              </div>
              <span className="text-dark-grey font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleShare}
                className="text-soft-grey hover:text-gold"
              >
                <Share2 className="w-5 h-5" />
              </Button>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-soft-grey hover:text-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-soft-grey hover:text-gold transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-elegant">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="blog-content">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="text-xl md:text-2xl font-serif font-bold text-dark-grey mt-8 mb-4 pb-2 border-b border-gold/20">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-dark-grey mt-6 mb-3">
                    {children}
                  </h3>
                ),
                h4: ({ children }) => (
                  <h4 className="text-base md:text-lg font-serif font-medium text-dark-grey mt-5 mb-2">
                    {children}
                  </h4>
                ),
                p: ({ children }) => (
                  <p className="text-base text-soft-grey leading-relaxed mb-4">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="text-dark-grey font-semibold">{children}</strong>
                ),
                ul: ({ children }) => (
                  <ul className="my-4 space-y-2 pl-1">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="my-4 space-y-2 pl-1 list-decimal list-inside">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="text-soft-grey text-base leading-relaxed flex items-start gap-2">
                    <span className="text-gold mt-1.5">•</span>
                    <span className="flex-1">{children}</span>
                  </li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="my-6 py-4 px-5 bg-cream/50 border-l-3 border-gold rounded-r-lg">
                    <div className="text-base text-dark-grey font-serif italic leading-relaxed">
                      {children}
                    </div>
                  </blockquote>
                ),
                hr: () => (
                  <hr className="my-8 border-none h-px bg-gold/20" />
                ),
                a: ({ href, children }) => {
                  if (href?.startsWith('/')) {
                    return (
                      <Link 
                        to={href} 
                        className="text-gold font-semibold underline decoration-gold/30 underline-offset-4 hover:decoration-gold transition-all duration-300"
                      >
                        {children}
                      </Link>
                    );
                  }
                  return (
                    <a 
                      href={href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gold font-semibold underline decoration-gold/30 underline-offset-4 hover:decoration-gold transition-all duration-300"
                    >
                      {children}
                    </a>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gold/10">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="border-gold/30 text-soft-grey hover:bg-gold/10"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-12 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-dark-grey mb-4">
            Želite organizirati proslavu?
          </h2>
          <p className="text-soft-grey mb-6">
            Kontaktirajte nas i zajedno ćemo stvoriti nezaboravne trenutke
          </p>
          <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-warm-white">
            <Link to="/kontakt">Rezervišite Termin</Link>
          </Button>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-dark-grey mb-8">
              Povezani Članci
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <Link 
                  key={relatedPost.id} 
                  to={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif font-bold text-dark-grey group-hover:text-gold transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-soft-grey text-sm mt-2 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
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

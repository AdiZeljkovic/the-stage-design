import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogApi, BlogPost as ApiBlogPost } from "@/lib/api";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const months = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
  return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
};

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<ApiBlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    blogApi.getAll()
      .then(setPosts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const featuredPosts = useMemo(() => posts.filter(p => p.featured), [posts]);

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;
    const q = searchQuery.toLowerCase();
    return posts.filter(post =>
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.tags.some(tag => tag.toLowerCase().includes(q))
    );
  }, [searchQuery, posts]);

  return (
    <div className="min-h-screen bg-warm-white">
      <SEO
        title="Blog | The Stage Sarajevo - Savjeti za Proslave i Evente"
        description="Otkrijte korisne savjete za organizaciju proslava, djevojačkih večeri, rođendana i više. Inspiracija za vaše posebne trenutke."
        canonical="/blog"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-cream to-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark-grey mb-6 animate-fade-in">
              Blog
            </h1>
            <p className="text-lg md:text-xl text-soft-grey mb-8 animate-fade-in">
              Inspiracija, savjeti i ideje za vaše nezaboravne trenutke
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-soft-grey w-5 h-5" />
              <Input
                type="text"
                placeholder="Pretraži članke..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-base border-soft-grey/30 focus:border-gold rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {loading ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-cream rounded-2xl overflow-hidden animate-pulse">
                <div className="h-48 bg-soft-grey/20" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-soft-grey/20 rounded w-1/3" />
                  <div className="h-6 bg-soft-grey/20 rounded w-full" />
                  <div className="h-4 bg-soft-grey/20 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Featured posts */}
          {!searchQuery && featuredPosts.length > 0 && (
            <section className="py-12 bg-cream">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-serif font-bold text-dark-grey mb-8">Istaknuti članci</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredPosts.slice(0, 2).map((post) => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                      <article className="bg-warm-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 h-full flex flex-col">
                        <div className="p-8 flex flex-col flex-1">
                          <Badge className="w-fit mb-4 bg-gold/10 text-gold border-0 text-xs">
                            {post.category}
                          </Badge>
                          <h3 className="text-xl font-serif font-bold text-dark-grey mb-3 group-hover:text-gold transition-colors leading-snug">
                            {post.title}
                          </h3>
                          <p className="text-soft-grey text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between mt-auto pt-4 border-t border-soft-grey/10">
                            <div className="flex items-center gap-3 text-xs text-soft-grey">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" /> {formatDate(post.published_at)}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" /> {post.read_time} min
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* All posts */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {searchQuery && (
                <p className="text-soft-grey mb-6">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'rezultat' : 'rezultata'} za "{searchQuery}"
                </p>
              )}
              {filteredPosts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-soft-grey text-lg">Nema rezultata za pretragu.</p>
                  <Button variant="ghost" onClick={() => setSearchQuery('')} className="mt-4 text-gold">
                    Prikaži sve članke
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                      <article className="bg-cream rounded-2xl overflow-hidden hover:shadow-elegant transition-all duration-300 h-full flex flex-col">
                        <div className="p-6 flex flex-col flex-1">
                          <Badge className="w-fit mb-3 bg-warm-white text-soft-grey border-0 text-xs">
                            {post.category}
                          </Badge>
                          <h3 className="font-serif font-bold text-dark-grey mb-2 group-hover:text-gold transition-colors leading-snug line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-soft-grey text-sm leading-relaxed flex-1 mb-4 line-clamp-3">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-xs text-soft-grey mt-auto pt-3 border-t border-soft-grey/10">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> {formatDate(post.published_at)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {post.read_time} min
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Blog;

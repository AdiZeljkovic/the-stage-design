import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogPosts, getFeaturedPosts, getPostImage } from "@/data/blogPosts";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPosts = getFeaturedPosts();

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesSearch;
    });
  }, [searchQuery]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const months = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}. ${month} ${year}`;
  };

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

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-soft-grey w-5 h-5" />
              <Input
                type="text"
                placeholder="Pretražite članke..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg bg-white border-gold/20 focus:border-gold rounded-full shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Featured Posts */}
      {!searchQuery && (
        <section className="py-16 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-dark-grey mb-8">
              Istaknuti Članci
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map(post => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-2xl overflow-hidden shadow-elegant hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={getPostImage(post)}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <Badge className="w-fit mb-3 bg-gold/10 text-gold hover:bg-gold/20">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-dark-grey mb-3 group-hover:text-gold transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-soft-grey mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-soft-grey">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.publishedAt)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime} min
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-gold group-hover:translate-x-1 transition-transform">
                          Čitaj više <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-dark-grey mb-8">
            {searchQuery ? `Rezultati pretrage za "${searchQuery}"` : 'Svi članci'}
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-soft-grey text-lg mb-4">
                Nema pronađenih članaka.
              </p>
              <Button 
                onClick={() => setSearchQuery("")}
                className="bg-gold hover:bg-gold/90 text-warm-white"
              >
                Prikaži sve članke
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={getPostImage(post)}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <Badge className="w-fit mb-2 bg-gold/10 text-gold hover:bg-gold/20 text-xs">
                        {post.category}
                      </Badge>
                      <h3 className="text-lg font-serif font-bold text-dark-grey mb-2 group-hover:text-gold transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-soft-grey text-sm mb-4 flex-1 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-soft-grey">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime} min
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

      {/* CTA Section */}
      <section className="py-16 bg-dark-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-white mb-4">
            Spremni za Vašu Proslavu?
          </h2>
          <p className="text-warm-white/80 text-lg mb-8">
            Kontaktirajte nas i pretvorimo vaše ideje u stvarnost
          </p>
          <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-warm-white">
            <Link to="/kontakt">Rezervišite Termin</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

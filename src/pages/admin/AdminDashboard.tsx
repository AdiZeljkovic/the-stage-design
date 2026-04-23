import { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { blogApi, galleryApi, contactApi, BlogPost, ContactSubmission } from '@/lib/api';
import { FileText, Image, MessageSquare, Star, Clock, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const [blogCount, setBlogCount] = useState(0);
  const [galleryCount, setGalleryCount] = useState(0);
  const [unreadContacts, setUnreadContacts] = useState(0);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [recentContacts, setRecentContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      blogApi.getAll(),
      galleryApi.getAll(),
      contactApi.getAll(),
    ]).then(([posts, gallery, contacts]) => {
      setBlogCount(posts.length);
      setGalleryCount(gallery.images.length);
      setUnreadContacts(contacts.unreadCount);
      setRecentPosts(posts.slice(0, 3));
      setRecentContacts(contacts.submissions.slice(0, 3));
    }).catch(console.error).finally(() => setLoading(false));
  }, []);

  const stats = [
    { label: 'Blog postovi', value: blogCount, icon: FileText, to: '/admin/blog', color: 'text-blue-500' },
    { label: 'Slike u galeriji', value: galleryCount, icon: Image, to: '/admin/galerija', color: 'text-green-500' },
    { label: 'Nepročitani upiti', value: unreadContacts, icon: MessageSquare, to: '/admin/kontakti', color: 'text-gold' },
  ];

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-serif font-bold text-dark-grey">Dobrodošli</h2>
          <p className="text-soft-grey mt-1">Pregled stanja The Stage web sajta</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <Link key={stat.to} to={stat.to}>
              <Card className="bg-warm-white shadow-soft border-0 hover:shadow-elegant transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-soft-grey">{stat.label}</p>
                      <p className="text-3xl font-bold text-dark-grey mt-1">
                        {loading ? '—' : stat.value}
                      </p>
                    </div>
                    <div className={`p-3 rounded-full bg-cream ${stat.color}`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent blog posts */}
          <Card className="bg-warm-white shadow-soft border-0">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-serif text-dark-grey">Nedavni postovi</CardTitle>
                <Link to="/admin/blog" className="text-xs text-gold hover:underline flex items-center gap-1">
                  Svi postovi <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {loading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-12 bg-cream rounded animate-pulse" />
                  ))}
                </div>
              ) : recentPosts.length === 0 ? (
                <p className="text-soft-grey text-sm text-center py-4">Nema postova</p>
              ) : (
                recentPosts.map((post) => (
                  <Link key={post.id} to={`/admin/blog/${post.id}`} className="flex items-start gap-3 p-3 rounded-lg hover:bg-cream transition-colors group">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-dark-grey truncate group-hover:text-gold transition-colors">
                        {post.title}
                      </p>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span className="text-xs text-soft-grey">{post.category}</span>
                        {post.featured && (
                          <span className="flex items-center gap-0.5 text-xs text-gold">
                            <Star className="w-3 h-3 fill-current" /> Istaknuto
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-soft-grey flex items-center gap-1 flex-shrink-0">
                      <Clock className="w-3 h-3" /> {post.read_time}min
                    </span>
                  </Link>
                ))
              )}
            </CardContent>
          </Card>

          {/* Recent contacts */}
          <Card className="bg-warm-white shadow-soft border-0">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-serif text-dark-grey">Nedavni upiti</CardTitle>
                <Link to="/admin/kontakti" className="text-xs text-gold hover:underline flex items-center gap-1">
                  Svi upiti <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {loading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-12 bg-cream rounded animate-pulse" />
                  ))}
                </div>
              ) : recentContacts.length === 0 ? (
                <p className="text-soft-grey text-sm text-center py-4">Nema upita</p>
              ) : (
                recentContacts.map((c) => (
                  <div key={c.id} className={`flex items-start gap-3 p-3 rounded-lg ${c.is_read === 0 ? 'bg-gold/5' : ''}`}>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-dark-grey truncate">{c.name}</p>
                        {c.is_read === 0 && (
                          <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-soft-grey truncate">{c.service || c.email}</p>
                    </div>
                    <span className="text-xs text-soft-grey flex-shrink-0">
                      {new Date(c.created_at).toLocaleDateString('bs-BA')}
                    </span>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}

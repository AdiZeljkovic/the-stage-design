import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { blogApi, BlogPost } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Plus, Search, Pencil, Trash2, Star, Clock, Eye } from 'lucide-react';

export default function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filtered, setFiltered] = useState<BlogPost[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<number | null>(null);

  const load = () => {
    setLoading(true);
    blogApi.getAll()
      .then((data) => { setPosts(data); setFiltered(data); })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  useEffect(() => {
    if (!search.trim()) { setFiltered(posts); return; }
    const q = search.toLowerCase();
    setFiltered(posts.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    ));
  }, [search, posts]);

  const handleDelete = async (id: number) => {
    setDeleting(id);
    try {
      await blogApi.delete(id);
      load();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Greška pri brisanju');
    } finally {
      setDeleting(null);
    }
  };

  return (
    <AdminLayout title="Blog">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-grey">Blog postovi</h2>
            <p className="text-soft-grey text-sm mt-0.5">{posts.length} ukupno</p>
          </div>
          <Button asChild className="bg-gold hover:bg-gold/90 text-warm-white">
            <Link to="/admin/blog/novi">
              <Plus className="w-4 h-4 mr-2" /> Novi post
            </Link>
          </Button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-soft-grey" />
          <Input
            placeholder="Pretraži postove..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 border-soft-grey/30 bg-warm-white"
          />
        </div>

        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-20 bg-warm-white rounded-lg animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <Card className="bg-warm-white border-0 shadow-soft">
            <CardContent className="py-12 text-center">
              <p className="text-soft-grey">
                {search ? 'Nema rezultata za pretragu' : 'Nema blog postova'}
              </p>
              {!search && (
                <Button asChild className="mt-4 bg-gold hover:bg-gold/90 text-warm-white">
                  <Link to="/admin/blog/novi">Kreiraj prvi post</Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {filtered.map((post) => (
              <Card key={post.id} className="bg-warm-white border-0 shadow-soft hover:shadow-elegant transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-medium text-dark-grey truncate">{post.title}</h3>
                        {post.featured && (
                          <Star className="w-3.5 h-3.5 text-gold fill-current flex-shrink-0" />
                        )}
                      </div>
                      <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                        <Badge variant="secondary" className="text-xs bg-cream text-soft-grey border-0">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-soft-grey flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.read_time} min
                        </span>
                        <span className="text-xs text-soft-grey">
                          {new Date(post.published_at).toLocaleDateString('bs-BA')}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Button asChild variant="ghost" size="sm" className="text-soft-grey hover:text-dark-grey h-8 w-8 p-0">
                        <a href={`/blog/${post.slug}`} target="_blank" rel="noreferrer">
                          <Eye className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button asChild variant="ghost" size="sm" className="text-soft-grey hover:text-gold h-8 w-8 p-0">
                        <Link to={`/admin/blog/${post.id}`}>
                          <Pencil className="w-4 h-4" />
                        </Link>
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-soft-grey hover:text-red-500 h-8 w-8 p-0">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-warm-white">
                          <AlertDialogHeader>
                            <AlertDialogTitle className="font-serif text-dark-grey">Obriši post?</AlertDialogTitle>
                            <AlertDialogDescription className="text-soft-grey">
                              Ova akcija je nepovratna. Post "{post.title}" će biti trajno obrisan.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="border-soft-grey/30">Odustani</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(post.id)}
                              disabled={deleting === post.id}
                              className="bg-red-500 hover:bg-red-600 text-white"
                            >
                              {deleting === post.id ? 'Briše se...' : 'Obriši'}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

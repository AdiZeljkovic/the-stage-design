import { useEffect, useState, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { blogApi, BlogPost } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Save, Eye } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const CATEGORIES = ['Djevojačke večeri', 'Rođendani', 'Baby Shower', 'Aktivnosti', 'Ljepota', 'Tematske večeri', 'Savjeti', 'Trendovi', 'Korporativno', 'Ostalo'];

const slugify = (text: string) =>
  text.toLowerCase()
    .replace(/[čć]/g, 'c').replace(/[šs]/g, 's')
    .replace(/[žz]/g, 'z').replace(/đ/g, 'd')
    .replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();

export default function AdminBlogEditor() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isNew = id === 'novi';

  const [form, setForm] = useState({
    slug: '',
    title: '',
    excerpt: '',
    content: '',
    category: 'Ostalo',
    author: 'The Stage Tim',
    published_at: new Date().toISOString().split('T')[0],
    read_time: 5,
    featured: false,
    tags: '',
  });
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isNew) return;
    blogApi.getAll()
      .then((posts) => {
        const post = posts.find((p: BlogPost) => p.id === Number(id));
        if (!post) { navigate('/admin/blog'); return; }
        setForm({
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          category: post.category,
          author: post.author,
          published_at: post.published_at,
          read_time: post.read_time,
          featured: post.featured,
          tags: post.tags.join(', '),
        });
      })
      .catch(() => navigate('/admin/blog'))
      .finally(() => setLoading(false));
  }, [id, isNew, navigate]);

  const handleTitleChange = (title: string) => {
    setForm(f => ({
      ...f,
      title,
      slug: isNew ? slugify(title) : f.slug,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSaving(true);

    const payload = {
      ...form,
      tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
    };

    try {
      if (isNew) {
        await blogApi.create(payload);
      } else {
        await blogApi.update(Number(id), payload);
      }
      navigate('/admin/blog');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Greška pri čuvanju');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout title={isNew ? 'Novi post' : 'Uredi post'}>
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title={isNew ? 'Novi post' : 'Uredi post'}>
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/admin/blog')} className="text-soft-grey hover:text-dark-grey">
            <ArrowLeft className="w-4 h-4 mr-2" /> Nazad
          </Button>
          <h2 className="text-2xl font-serif font-bold text-dark-grey">
            {isNew ? 'Novi post' : 'Uredi post'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-5">
              <Card className="bg-warm-white border-0 shadow-soft">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <Label className="text-dark-grey">Naslov *</Label>
                    <Input
                      value={form.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="Naslov blog posta..."
                      required
                      className="border-soft-grey/30 focus:border-gold text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-dark-grey">Slug (URL) *</Label>
                    <Input
                      value={form.slug}
                      onChange={(e) => setForm(f => ({ ...f, slug: e.target.value }))}
                      placeholder="naziv-blog-posta"
                      required
                      className="border-soft-grey/30 focus:border-gold font-mono text-sm"
                    />
                    <p className="text-xs text-soft-grey">/blog/{form.slug || 'naziv-posta'}</p>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-dark-grey">Kratki opis (excerpt)</Label>
                    <Textarea
                      value={form.excerpt}
                      onChange={(e) => setForm(f => ({ ...f, excerpt: e.target.value }))}
                      placeholder="Kratki opis koji se prikazuje u listi postova..."
                      rows={2}
                      className="border-soft-grey/30 focus:border-gold resize-none"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Content editor with preview */}
              <Card className="bg-warm-white border-0 shadow-soft">
                <CardHeader className="pb-0">
                  <CardTitle className="text-base font-serif text-dark-grey">Sadržaj *</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-4">
                  <Tabs defaultValue="edit">
                    <TabsList className="mb-4 bg-cream">
                      <TabsTrigger value="edit" className="data-[state=active]:bg-warm-white">Uredi</TabsTrigger>
                      <TabsTrigger value="preview" className="data-[state=active]:bg-warm-white">
                        <Eye className="w-3.5 h-3.5 mr-1.5" />Pregled
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="edit">
                      <Textarea
                        value={form.content}
                        onChange={(e) => setForm(f => ({ ...f, content: e.target.value }))}
                        placeholder="Sadržaj u Markdown formatu...&#10;&#10;**Podebljano**, *kurziv*, [link](/usluge)"
                        rows={18}
                        required
                        className="border-soft-grey/30 focus:border-gold font-mono text-sm resize-none"
                      />
                      <p className="text-xs text-soft-grey mt-2">Podržan Markdown format. Interne veze: [tekst](/usluge/rodjendani)</p>
                    </TabsContent>
                    <TabsContent value="preview">
                      <div className="min-h-[380px] p-4 bg-cream rounded-lg prose prose-sm max-w-none text-dark-grey">
                        {form.content ? (
                          <ReactMarkdown>{form.content}</ReactMarkdown>
                        ) : (
                          <p className="text-soft-grey italic">Nema sadržaja za pregled...</p>
                        )}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar settings */}
            <div className="space-y-5">
              <Card className="bg-warm-white border-0 shadow-soft">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-serif text-dark-grey">Objava</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {error && (
                    <p className="text-red-500 text-sm bg-red-50 px-3 py-2 rounded-md">{error}</p>
                  )}
                  <div className="flex items-center justify-between">
                    <Label className="text-dark-grey text-sm">Istaknuto</Label>
                    <Switch
                      checked={form.featured}
                      onCheckedChange={(v) => setForm(f => ({ ...f, featured: v }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-dark-grey text-sm">Datum objave</Label>
                    <Input
                      type="date"
                      value={form.published_at}
                      onChange={(e) => setForm(f => ({ ...f, published_at: e.target.value }))}
                      className="border-soft-grey/30 focus:border-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-dark-grey text-sm">Trajanje čitanja (min)</Label>
                    <Input
                      type="number"
                      min={1}
                      max={60}
                      value={form.read_time}
                      onChange={(e) => setForm(f => ({ ...f, read_time: Number(e.target.value) }))}
                      className="border-soft-grey/30 focus:border-gold"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={saving}
                    className="w-full bg-gold hover:bg-gold/90 text-warm-white"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {saving ? 'Čuva se...' : (isNew ? 'Objavi post' : 'Sačuvaj izmjene')}
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-warm-white border-0 shadow-soft">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-serif text-dark-grey">Kategorija i tagovi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-dark-grey text-sm">Kategorija</Label>
                    <Select value={form.category} onValueChange={(v) => setForm(f => ({ ...f, category: v }))}>
                      <SelectTrigger className="border-soft-grey/30">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORIES.map(cat => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-dark-grey text-sm">Tagovi (odvojeni zarezom)</Label>
                    <Input
                      value={form.tags}
                      onChange={(e) => setForm(f => ({ ...f, tags: e.target.value }))}
                      placeholder="sarajevo, proslave, događaji"
                      className="border-soft-grey/30 focus:border-gold"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-dark-grey text-sm">Autor</Label>
                    <Input
                      value={form.author}
                      onChange={(e) => setForm(f => ({ ...f, author: e.target.value }))}
                      className="border-soft-grey/30 focus:border-gold"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

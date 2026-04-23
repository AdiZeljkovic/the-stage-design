import { useEffect, useState, useRef, DragEvent, ChangeEvent } from 'react';
import AdminLayout from './AdminLayout';
import { galleryApi, GalleryImage } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from '@/components/ui/dialog';
import { Upload, Trash2, Pencil, Image as ImageIcon, X } from 'lucide-react';

const CATEGORIES = ['ROĐENDANI', 'DJEVOJAČKE', 'EVENTI', 'PROSTOR', 'MAKEUP', 'OSTALO'];

export default function AdminGallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [filtered, setFiltered] = useState<GalleryImage[]>([]);
  const [activeCategory, setActiveCategory] = useState('SVE');
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [editImage, setEditImage] = useState<GalleryImage | null>(null);
  const [editAlt, setEditAlt] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [uploadCategory, setUploadCategory] = useState('OSTALO');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const load = () => {
    setLoading(true);
    galleryApi.getAll()
      .then((data) => { setImages(data.images); setFiltered(data.images); })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  useEffect(() => {
    if (activeCategory === 'SVE') { setFiltered(images); return; }
    setFiltered(images.filter(img => img.category === activeCategory));
  }, [activeCategory, images]);

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('alt', file.name.replace(/\.[^.]+$/, '').replace(/-/g, ' '));
        formData.append('category', uploadCategory);
        await galleryApi.upload(formData);
      }
      load();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Greška pri uploadu');
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleDelete = async (id: number) => {
    try {
      await galleryApi.delete(id);
      load();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Greška pri brisanju');
    }
  };

  const handleEdit = async () => {
    if (!editImage) return;
    try {
      await galleryApi.update(editImage.id, { alt: editAlt, category: editCategory });
      setEditImage(null);
      load();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Greška pri ažuriranju');
    }
  };

  return (
    <AdminLayout title="Galerija">
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-grey">Galerija</h2>
            <p className="text-soft-grey text-sm mt-0.5">{images.length} slika</p>
          </div>
        </div>

        {/* Upload zone */}
        <Card className="bg-warm-white border-0 shadow-soft">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="space-y-1">
                <Label className="text-dark-grey text-sm">Kategorija za upload</Label>
                <Select value={uploadCategory} onValueChange={setUploadCategory}>
                  <SelectTrigger className="w-44 border-soft-grey/30">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors ${
                dragOver
                  ? 'border-gold bg-gold/5'
                  : 'border-soft-grey/30 hover:border-gold/50 hover:bg-cream'
              }`}
            >
              <Upload className="w-8 h-8 text-soft-grey mx-auto mb-3" />
              <p className="text-dark-grey font-medium">
                {uploading ? 'Upload u toku...' : 'Prevuci slike ovdje ili klikni'}
              </p>
              <p className="text-soft-grey text-sm mt-1">JPG, PNG, WebP do 10MB</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleFiles(e.target.files)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Category filter */}
        <div className="flex gap-2 flex-wrap">
          {['SVE', ...CATEGORIES].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-gold text-warm-white'
                  : 'bg-warm-white text-soft-grey hover:text-dark-grey'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image grid */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="aspect-square bg-warm-white rounded-lg animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16">
            <ImageIcon className="w-12 h-12 text-soft-grey/30 mx-auto mb-3" />
            <p className="text-soft-grey">
              {activeCategory === 'SVE' ? 'Nema slika. Uploadajte prvu sliku.' : `Nema slika u kategoriji "${activeCategory}"`}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filtered.map((img) => (
              <div key={img.id} className="group relative aspect-square rounded-lg overflow-hidden bg-cream">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-dark-grey/0 group-hover:bg-dark-grey/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => { setEditImage(img); setEditAlt(img.alt); setEditCategory(img.category); }}
                    className="w-8 h-8 rounded-full bg-warm-white flex items-center justify-center hover:bg-cream transition-colors"
                  >
                    <Pencil className="w-3.5 h-3.5 text-dark-grey" />
                  </button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button className="w-8 h-8 rounded-full bg-warm-white flex items-center justify-center hover:bg-red-50 transition-colors">
                        <Trash2 className="w-3.5 h-3.5 text-red-500" />
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-warm-white">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="font-serif text-dark-grey">Obriši sliku?</AlertDialogTitle>
                        <AlertDialogDescription className="text-soft-grey">
                          Slika će biti trajno obrisana.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="border-soft-grey/30">Odustani</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete(img.id)} className="bg-red-500 hover:bg-red-600 text-white">
                          Obriši
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
                <Badge className="absolute top-2 left-2 text-xs bg-dark-grey/70 text-warm-white border-0 hidden group-hover:flex">
                  {img.category}
                </Badge>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit dialog */}
      <Dialog open={!!editImage} onOpenChange={(open) => !open && setEditImage(null)}>
        <DialogContent className="bg-warm-white">
          <DialogHeader>
            <DialogTitle className="font-serif text-dark-grey">Uredi sliku</DialogTitle>
          </DialogHeader>
          {editImage && (
            <div className="space-y-4">
              <img src={editImage.url} alt={editImage.alt} className="w-full h-40 object-cover rounded-lg" />
              <div className="space-y-2">
                <Label className="text-dark-grey">Alt tekst (opis za SEO)</Label>
                <Input
                  value={editAlt}
                  onChange={(e) => setEditAlt(e.target.value)}
                  className="border-soft-grey/30 focus:border-gold"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-dark-grey">Kategorija</Label>
                <Select value={editCategory} onValueChange={setEditCategory}>
                  <SelectTrigger className="border-soft-grey/30">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 border-soft-grey/30" onClick={() => setEditImage(null)}>
                  Odustani
                </Button>
                <Button onClick={handleEdit} className="flex-1 bg-gold hover:bg-gold/90 text-warm-white">
                  Sačuvaj
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}

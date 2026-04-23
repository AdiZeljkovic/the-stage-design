import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { servicesApi, ServiceContent, ServiceData, ServicePackage } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Plus, Trash2, Upload, X, GripVertical, Check } from 'lucide-react';

export default function AdminServiceEditor() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [service, setService] = useState<ServiceContent | null>(null);
  const [data, setData] = useState<ServiceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingHero, setUploadingHero] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!slug) return;
    servicesApi.getBySlug(slug)
      .then((s) => {
        setService(s);
        setData(JSON.parse(JSON.stringify(s.data)));
      })
      .catch(() => setError('Usluga nije pronađena'))
      .finally(() => setLoading(false));
  }, [slug]);

  const update = (field: keyof ServiceData, value: ServiceData[keyof ServiceData]) => {
    setData((d) => d ? { ...d, [field]: value } : d);
  };

  const updatePackage = (index: number, field: keyof ServicePackage, value: string | string[]) => {
    setData((d) => {
      if (!d) return d;
      const packages = [...d.packages];
      packages[index] = { ...packages[index], [field]: value };
      return { ...d, packages };
    });
  };

  const addPackage = () => {
    setData((d) => d ? {
      ...d,
      packages: [...d.packages, { title: 'Novi paket', subtitle: '', description: '', items: [] }]
    } : d);
  };

  const removePackage = (index: number) => {
    setData((d) => d ? { ...d, packages: d.packages.filter((_, i) => i !== index) } : d);
  };

  const addItem = (pkgIndex: number) => {
    setData((d) => {
      if (!d) return d;
      const packages = [...d.packages];
      packages[pkgIndex] = { ...packages[pkgIndex], items: [...packages[pkgIndex].items, ''] };
      return { ...d, packages };
    });
  };

  const updateItem = (pkgIndex: number, itemIndex: number, value: string) => {
    setData((d) => {
      if (!d) return d;
      const packages = [...d.packages];
      const items = [...packages[pkgIndex].items];
      items[itemIndex] = value;
      packages[pkgIndex] = { ...packages[pkgIndex], items };
      return { ...d, packages };
    });
  };

  const removeItem = (pkgIndex: number, itemIndex: number) => {
    setData((d) => {
      if (!d) return d;
      const packages = [...d.packages];
      packages[pkgIndex] = {
        ...packages[pkgIndex],
        items: packages[pkgIndex].items.filter((_, i) => i !== itemIndex)
      };
      return { ...d, packages };
    });
  };

  const handleSave = async () => {
    if (!slug || !data) return;
    setSaving(true);
    setError('');
    try {
      const updated = await servicesApi.update(slug, data);
      setService(updated);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Greška pri čuvanju');
    } finally {
      setSaving(false);
    }
  };

  const handleHeroUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !slug) return;
    setUploadingHero(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('image', file);
      const updated = await servicesApi.uploadHeroImage(slug, formData);
      setService(updated);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Greška pri uploadu');
    } finally {
      setUploadingHero(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  if (loading) {
    return (
      <AdminLayout title="Usluge">
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
        </div>
      </AdminLayout>
    );
  }

  if (!data || !service) {
    return (
      <AdminLayout title="Usluge">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {error || 'Usluga nije pronađena'}
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title={service.name}>
      <div className="space-y-6 max-w-3xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/admin/usluge"><ArrowLeft className="w-4 h-4 mr-1" />Natrag</Link>
            </Button>
            <div>
              <h2 className="text-2xl font-serif font-bold text-dark-grey">{service.name}</h2>
            </div>
          </div>
          <Button
            onClick={handleSave}
            disabled={saving}
            className="bg-gold hover:bg-gold/90 text-white gap-2"
          >
            {saving ? (
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : saved ? (
              <Check className="w-4 h-4" />
            ) : null}
            {saved ? 'Sačuvano!' : 'Sačuvaj promjene'}
          </Button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">{error}</div>
        )}

        {/* Hero Image */}
        <section className="bg-white rounded-lg border border-soft-grey/30 p-6 space-y-4">
          <h3 className="font-semibold text-dark-grey text-lg">Hero slika</h3>
          {service.hero_image_url && (
            <img
              src={service.hero_image_url}
              alt="Hero"
              className="w-full h-40 object-cover rounded-lg"
            />
          )}
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleHeroUpload}
            />
            <Button
              variant="outline"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploadingHero}
              className="gap-2"
            >
              {uploadingHero ? (
                <span className="w-4 h-4 border-2 border-gold border-t-transparent rounded-full animate-spin" />
              ) : (
                <Upload className="w-4 h-4" />
              )}
              {service.hero_image_url ? 'Zamijeni hero sliku' : 'Dodaj hero sliku'}
            </Button>
            <p className="text-xs text-soft-grey mt-2">
              Ako ne uploadate sliku, koristi se originalna slika iz projekta.
            </p>
          </div>
        </section>

        {/* Hero Content */}
        <section className="bg-white rounded-lg border border-soft-grey/30 p-6 space-y-4">
          <h3 className="font-semibold text-dark-grey text-lg">Hero sekcija</h3>
          <div className="space-y-3">
            <div>
              <Label>Naslov (H1)</Label>
              <Input
                value={data.heroTitle}
                onChange={(e) => update('heroTitle', e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label>Podnaslov (tagline)</Label>
              <Input
                value={data.heroTagline}
                onChange={(e) => update('heroTagline', e.target.value)}
                className="mt-1"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white rounded-lg border border-soft-grey/30 p-6 space-y-4">
          <h3 className="font-semibold text-dark-grey text-lg">Ključne informacije (3 statiste)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {([1, 2, 3] as const).map((n) => (
              <div key={n} className="space-y-2 p-4 bg-cream/30 rounded-lg">
                <p className="text-xs font-medium text-soft-grey uppercase tracking-wider">Stat {n}</p>
                <div>
                  <Label className="text-xs">Vrijednost</Label>
                  <Input
                    value={data[`stat${n}Value`]}
                    onChange={(e) => update(`stat${n}Value`, e.target.value)}
                    className="mt-1 text-gold font-semibold"
                  />
                </div>
                <div>
                  <Label className="text-xs">Opis</Label>
                  <Input
                    value={data[`stat${n}Label`]}
                    onChange={(e) => update(`stat${n}Label`, e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Description */}
        <section className="bg-white rounded-lg border border-soft-grey/30 p-6 space-y-4">
          <h3 className="font-semibold text-dark-grey text-lg">Glavni opis</h3>
          <Textarea
            value={data.mainDescription}
            onChange={(e) => update('mainDescription', e.target.value)}
            rows={4}
          />
        </section>

        {/* CTA */}
        <section className="bg-white rounded-lg border border-soft-grey/30 p-6 space-y-4">
          <h3 className="font-semibold text-dark-grey text-lg">CTA dugme</h3>
          <div>
            <Label>Tekst dugmeta</Label>
            <Input
              value={data.ctaText}
              onChange={(e) => update('ctaText', e.target.value)}
              className="mt-1"
            />
          </div>
        </section>

        {/* Packages */}
        <section className="bg-white rounded-lg border border-soft-grey/30 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-dark-grey text-lg">Paketi / usluge</h3>
            <Button variant="outline" size="sm" onClick={addPackage} className="gap-1">
              <Plus className="w-4 h-4" /> Dodaj paket
            </Button>
          </div>

          {data.packages.map((pkg, pkgIdx) => (
            <div key={pkgIdx} className="border border-soft-grey/30 rounded-lg p-5 space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <GripVertical className="w-4 h-4 text-soft-grey/50" />
                  <span className="font-medium text-dark-grey text-sm">Paket {pkgIdx + 1}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removePackage(pkgIdx)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 h-7 w-7 p-0"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <Label className="text-xs">Naziv paketa</Label>
                  <Input
                    value={pkg.title}
                    onChange={(e) => updatePackage(pkgIdx, 'title', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label className="text-xs">Podnaslov (opcionalno)</Label>
                  <Input
                    value={pkg.subtitle || ''}
                    onChange={(e) => updatePackage(pkgIdx, 'subtitle', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label className="text-xs">Opis paketa</Label>
                <Textarea
                  value={pkg.description}
                  onChange={(e) => updatePackage(pkgIdx, 'description', e.target.value)}
                  rows={3}
                  className="mt-1"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-xs">Stavke "Paket uključuje"</Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => addItem(pkgIdx)}
                    className="h-6 text-xs gap-1 text-gold hover:text-gold/80"
                  >
                    <Plus className="w-3 h-3" /> Dodaj stavku
                  </Button>
                </div>
                <div className="space-y-2">
                  {pkg.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex gap-2 items-center">
                      <span className="text-soft-grey text-sm w-4 shrink-0">•</span>
                      <Input
                        value={item}
                        onChange={(e) => updateItem(pkgIdx, itemIdx, e.target.value)}
                        className="text-sm"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(pkgIdx, itemIdx)}
                        className="h-8 w-8 p-0 text-soft-grey hover:text-red-500 shrink-0"
                      >
                        <X className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  ))}
                  {pkg.items.length === 0 && (
                    <p className="text-xs text-soft-grey italic">Nema stavki. Kliknite "+ Dodaj stavku".</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Note */}
        <section className="bg-white rounded-lg border border-soft-grey/30 p-6 space-y-4">
          <h3 className="font-semibold text-dark-grey text-lg">Napomena (ispod sadržaja)</h3>
          <Textarea
            value={data.note || ''}
            onChange={(e) => update('note', e.target.value)}
            rows={2}
            placeholder="Npr. *Dodatne opcije: Torta uz doplatu..."
          />
        </section>

        {/* SEO */}
        <section className="bg-white rounded-lg border border-soft-grey/30 p-6 space-y-4">
          <h3 className="font-semibold text-dark-grey text-lg">SEO</h3>
          <div className="space-y-3">
            <div>
              <Label className="text-xs">SEO naslov (title tag)</Label>
              <Input
                value={data.seoTitle || ''}
                onChange={(e) => update('seoTitle', e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label className="text-xs">SEO opis (meta description)</Label>
              <Textarea
                value={data.seoDescription || ''}
                onChange={(e) => update('seoDescription', e.target.value)}
                rows={2}
                className="mt-1"
              />
            </div>
          </div>
        </section>

        <div className="flex justify-end pb-8">
          <Button
            onClick={handleSave}
            disabled={saving}
            size="lg"
            className="bg-gold hover:bg-gold/90 text-white gap-2"
          >
            {saving ? (
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : saved ? (
              <Check className="w-4 h-4" />
            ) : null}
            {saved ? 'Sačuvano!' : 'Sačuvaj promjene'}
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
}

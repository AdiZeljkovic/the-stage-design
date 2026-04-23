import { useEffect, useState, FormEvent } from 'react';
import AdminLayout from './AdminLayout';
import { settingsApi, authApi } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Check, Instagram, Globe, Phone, DollarSign, Lock, Share2 } from 'lucide-react';

type Settings = Record<string, string>;

interface SectionField {
  key: string;
  label: string;
  placeholder?: string;
  type?: string;
}

interface Section {
  title: string;
  icon: React.ElementType;
  fields: SectionField[];
}

const SECTIONS: Section[] = [
  {
    title: 'Opšte informacije',
    icon: Globe,
    fields: [
      { key: 'siteName', label: 'Naziv sajta', placeholder: 'THE STAGE' },
      { key: 'tagline', label: 'Tagline', placeholder: 'Vaša Scena za Nezaboravne Trenutke' },
      { key: 'heroTitle', label: 'Hero naslov', placeholder: 'THE STAGE SARAJEVO' },
      { key: 'heroSubtitle', label: 'Hero podnaslov' },
      { key: 'heroPromo', label: 'Hero promo poruka (opcionalno)', placeholder: 'npr. 20% popusta u januaru' },
    ],
  },
  {
    title: 'Kontakt',
    icon: Phone,
    fields: [
      { key: 'phone', label: 'Telefon', placeholder: '+387 XX XXX XXX' },
      { key: 'email', label: 'Email', placeholder: 'info@thestage.ba', type: 'email' },
      { key: 'address', label: 'Adresa', placeholder: 'Ulica i broj, Sarajevo' },
    ],
  },
  {
    title: 'Društvene mreže',
    icon: Share2,
    fields: [
      { key: 'instagramUrl', label: 'Instagram URL', placeholder: 'https://www.instagram.com/username/' },
      { key: 'instagramHandle', label: 'Instagram handle', placeholder: '@username' },
      { key: 'tiktokUrl', label: 'TikTok URL', placeholder: 'https://www.tiktok.com/@username' },
      { key: 'tiktokHandle', label: 'TikTok handle', placeholder: '@username' },
      { key: 'facebookUrl', label: 'Facebook URL (ostavite prazno ako nemate)', placeholder: 'https://www.facebook.com/username' },
      { key: 'facebookHandle', label: 'Facebook naziv stranice', placeholder: 'The Stage Sarajevo' },
      { key: 'youtubeUrl', label: 'YouTube URL (ostavite prazno ako nemate)', placeholder: 'https://www.youtube.com/@username' },
      { key: 'youtubeHandle', label: 'YouTube naziv kanala', placeholder: '@username' },
    ],
  },
  {
    title: 'Cijene usluga',
    icon: DollarSign,
    fields: [
      { key: 'rodjendaniPrice', label: 'Rođendani — cijena', placeholder: '350 KM' },
      { key: 'rodjendaniCapacity', label: 'Rođendani — kapacitet', placeholder: 'do 10 osoba' },
      { key: 'djevojackePrice', label: 'Djevojačke večeri — cijena', placeholder: '400 KM' },
      { key: 'djevojackeCapacity', label: 'Djevojačke — kapacitet', placeholder: 'do 10 osoba' },
      { key: 'babyShowerPrice', label: 'Baby Shower — cijena', placeholder: '300 KM' },
      { key: 'babyShowerCapacity', label: 'Baby Shower — kapacitet', placeholder: 'do 15 osoba' },
      { key: 'italianNightPrice', label: 'Italian Night — cijena', placeholder: '50 KM po osobi' },
      { key: 'sipPaintPrice', label: 'Sip & Paint — cijena', placeholder: '50 KM po osobi' },
      { key: 'sminkanjePriceParty', label: 'Šminkanje Party', placeholder: '60 KM' },
      { key: 'sminkanjePriceBridal', label: 'Šminkanje Vjenčano', placeholder: '100 KM' },
      { key: 'sminkanjePriceTrial', label: 'Šminkanje Proba', placeholder: '80 KM' },
      { key: 'sminkanjePriceLesson', label: 'Šminkanje Edukacija', placeholder: '80 KM' },
      { key: 'najamSize', label: 'Najam — veličina', placeholder: '75 m²' },
      { key: 'najamCapacity', label: 'Najam — kapacitet', placeholder: 'do 30 osoba' },
    ],
  },
];

export default function AdminSettings() {
  const [settings, setSettings] = useState<Settings>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  // Password change state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordSaved, setPasswordSaved] = useState(false);

  useEffect(() => {
    settingsApi.getAll()
      .then(setSettings)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      await settingsApi.update(settings);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Greška pri čuvanju');
    } finally {
      setSaving(false);
    }
  };

  const handlePasswordChange = async (e: FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    if (newPassword !== confirmPassword) {
      setPasswordError('Lozinke se ne podudaraju');
      return;
    }
    if (newPassword.length < 6) {
      setPasswordError('Nova lozinka mora imati najmanje 6 znakova');
      return;
    }
    setPasswordSaving(true);
    try {
      await authApi.changePassword(currentPassword, newPassword);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setPasswordSaved(true);
      setTimeout(() => setPasswordSaved(false), 3000);
    } catch (err) {
      setPasswordError(err instanceof Error ? err.message : 'Greška pri promjeni lozinke');
    } finally {
      setPasswordSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout title="Postavke">
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Postavke">
      <div className="max-w-3xl space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-grey">Postavke sajta</h2>
            <p className="text-soft-grey text-sm mt-0.5">Kontakt podaci, cijene i opšte informacije</p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          {SECTIONS.map((section) => (
            <Card key={section.title} className="bg-warm-white border-0 shadow-soft">
              <CardHeader className="pb-4">
                <CardTitle className="text-base font-serif text-dark-grey flex items-center gap-2">
                  <section.icon className="w-4 h-4 text-gold" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {section.fields.map((field) => (
                  <div key={field.key} className="space-y-1.5">
                    <Label className="text-dark-grey text-sm">{field.label}</Label>
                    <Input
                      type={field.type || 'text'}
                      value={settings[field.key] || ''}
                      onChange={(e) => setSettings(s => ({ ...s, [field.key]: e.target.value }))}
                      placeholder={field.placeholder}
                      className="border-soft-grey/30 focus:border-gold"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button
            type="submit"
            disabled={saving}
            className="bg-gold hover:bg-gold/90 text-warm-white px-8"
          >
            {saved ? (
              <><Check className="w-4 h-4 mr-2" /> Sačuvano!</>
            ) : (
              <><Save className="w-4 h-4 mr-2" /> {saving ? 'Čuva se...' : 'Sačuvaj postavke'}</>
            )}
          </Button>
        </form>

        {/* Password change */}
        <Card className="bg-warm-white border-0 shadow-soft">
          <CardHeader className="pb-4">
            <CardTitle className="text-base font-serif text-dark-grey flex items-center gap-2">
              <Lock className="w-4 h-4 text-gold" />
              Promjena lozinke
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div className="space-y-1.5">
                <Label className="text-dark-grey text-sm">Trenutna lozinka</Label>
                <Input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                  className="border-soft-grey/30 focus:border-gold"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-dark-grey text-sm">Nova lozinka</Label>
                <Input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="border-soft-grey/30 focus:border-gold"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-dark-grey text-sm">Potvrdite novu lozinku</Label>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="border-soft-grey/30 focus:border-gold"
                />
              </div>
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
              <Button
                type="submit"
                disabled={passwordSaving}
                variant="outline"
                className="border-soft-grey/30"
              >
                {passwordSaved ? (
                  <><Check className="w-4 h-4 mr-2 text-green-500" /> Lozinka promijenjena!</>
                ) : (
                  passwordSaving ? 'Mijenja se...' : 'Promijeni lozinku'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}

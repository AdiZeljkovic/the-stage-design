import { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import { contactApi, ContactSubmission } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from '@/components/ui/dialog';
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { MessageSquare, Mail, Phone, Calendar, Trash2, Eye, CheckCheck } from 'lucide-react';

const SERVICE_LABELS: Record<string, string> = {
  rodjendani: 'Rođendani', djevojacke: 'Djevojačke večeri',
  'baby-shower': 'Baby Shower', 'italian-night': 'Italian Night',
  'sip-paint': 'Sip and Paint', sminkanje: 'Šminkanje',
  najam: 'Najam prostora', ostalo: 'Ostalo',
};

export default function AdminContacts() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [selected, setSelected] = useState<ContactSubmission | null>(null);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    contactApi.getAll()
      .then(({ submissions: data, unreadCount: count }) => {
        setSubmissions(data);
        setUnreadCount(count);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const handleView = async (c: ContactSubmission) => {
    setSelected(c);
    if (!c.is_read) {
      await contactApi.markRead(c.id).catch(console.error);
      load();
    }
  };

  const handleDelete = async (id: number) => {
    await contactApi.delete(id).catch(console.error);
    setSelected(null);
    load();
  };

  const handleMarkAllRead = async () => {
    const unread = submissions.filter(s => !s.is_read);
    await Promise.all(unread.map(s => contactApi.markRead(s.id)));
    load();
  };

  return (
    <AdminLayout title="Kontakti">
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-grey">Kontakt upiti</h2>
            <p className="text-soft-grey text-sm mt-0.5">
              {submissions.length} ukupno
              {unreadCount > 0 && ` · ${unreadCount} nepročitano`}
            </p>
          </div>
          {unreadCount > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleMarkAllRead}
              className="border-soft-grey/30 text-soft-grey hover:text-dark-grey"
            >
              <CheckCheck className="w-4 h-4 mr-2" /> Označi sve kao pročitano
            </Button>
          )}
        </div>

        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map(i => <div key={i} className="h-20 bg-warm-white rounded-lg animate-pulse" />)}
          </div>
        ) : submissions.length === 0 ? (
          <Card className="bg-warm-white border-0 shadow-soft">
            <CardContent className="py-16 text-center">
              <MessageSquare className="w-10 h-10 text-soft-grey/30 mx-auto mb-3" />
              <p className="text-soft-grey">Nema kontakt upita</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {submissions.map((c) => (
              <Card
                key={c.id}
                className={`border-0 shadow-soft cursor-pointer hover:shadow-elegant transition-shadow ${
                  !c.is_read ? 'bg-gold/5' : 'bg-warm-white'
                }`}
                onClick={() => handleView(c)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-medium text-dark-grey">{c.name}</span>
                        {!c.is_read && (
                          <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                        )}
                        {c.service && (
                          <Badge variant="secondary" className="text-xs bg-cream text-soft-grey border-0">
                            {SERVICE_LABELS[c.service] || c.service}
                          </Badge>
                        )}
                      </div>
                      <p className="text-soft-grey text-sm mt-0.5 truncate">{c.message}</p>
                      <div className="flex items-center gap-3 mt-1.5 text-xs text-soft-grey flex-wrap">
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3" /> {c.email}
                        </span>
                        {c.phone && (
                          <span className="flex items-center gap-1">
                            <Phone className="w-3 h-3" /> {c.phone}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(c.created_at).toLocaleDateString('bs-BA', {
                            day: '2-digit', month: '2-digit', year: 'numeric',
                            hour: '2-digit', minute: '2-digit',
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-soft-grey hover:text-gold">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-soft-grey hover:text-red-500"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-warm-white">
                          <AlertDialogHeader>
                            <AlertDialogTitle className="font-serif text-dark-grey">Obriši upit?</AlertDialogTitle>
                            <AlertDialogDescription className="text-soft-grey">
                              Upit od "{c.name}" će biti trajno obrisan.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="border-soft-grey/30">Odustani</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(c.id)}
                              className="bg-red-500 hover:bg-red-600 text-white"
                            >
                              Obriši
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

      {/* Detail dialog */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="bg-warm-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-serif text-dark-grey">Upit od {selected?.name}</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-soft-grey text-xs mb-0.5">Email</p>
                  <a href={`mailto:${selected.email}`} className="text-gold hover:underline">{selected.email}</a>
                </div>
                {selected.phone && (
                  <div>
                    <p className="text-soft-grey text-xs mb-0.5">Telefon</p>
                    <a href={`tel:${selected.phone}`} className="text-dark-grey">{selected.phone}</a>
                  </div>
                )}
                {selected.service && (
                  <div>
                    <p className="text-soft-grey text-xs mb-0.5">Usluga</p>
                    <p className="text-dark-grey">{SERVICE_LABELS[selected.service] || selected.service}</p>
                  </div>
                )}
                <div>
                  <p className="text-soft-grey text-xs mb-0.5">Datum</p>
                  <p className="text-dark-grey">
                    {new Date(selected.created_at).toLocaleDateString('bs-BA', {
                      day: '2-digit', month: '2-digit', year: 'numeric',
                      hour: '2-digit', minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-soft-grey text-xs mb-1.5">Poruka</p>
                <div className="bg-cream rounded-lg p-4 text-sm text-dark-grey whitespace-pre-wrap">
                  {selected.message}
                </div>
              </div>

              <div className="flex gap-3">
                <Button asChild className="flex-1 bg-gold hover:bg-gold/90 text-warm-white">
                  <a href={`mailto:${selected.email}`}>Odgovori emailom</a>
                </Button>
                {selected.phone && (
                  <Button asChild variant="outline" className="border-soft-grey/30">
                    <a href={`tel:${selected.phone}`}>Pozovi</a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { servicesApi, ServiceContent } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { ChevronRight, Layers } from 'lucide-react';

export default function AdminServices() {
  const [services, setServices] = useState<ServiceContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    servicesApi.getAll()
      .then(setServices)
      .catch(() => setError('Greška pri učitavanju usluga'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AdminLayout title="Usluge">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-serif font-bold text-dark-grey">Upravljanje uslugama</h2>
          <p className="text-soft-grey mt-1">Uredite sadržaj, cijene i opise svih usluga</p>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">{error}</div>
        )}

        {!loading && !error && (
          <div className="grid gap-4">
            {services.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-lg border border-soft-grey/30 shadow-sm p-5 flex items-center justify-between hover:border-gold/40 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
                    <Layers className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-grey">{service.name}</h3>
                    <div className="flex items-center gap-3 mt-0.5">
                      <span className="text-sm text-gold font-medium">{service.data.stat1Value}</span>
                      <span className="text-soft-grey text-xs">·</span>
                      <span className="text-sm text-soft-grey">{service.data.heroTagline}</span>
                    </div>
                  </div>
                </div>
                <Button asChild variant="outline" size="sm" className="gap-1">
                  <Link to={`/admin/usluge/${service.slug}`}>
                    Uredi <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

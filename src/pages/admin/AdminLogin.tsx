import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Eye, EyeOff } from 'lucide-react';

export default function AdminLogin() {
  const { login } = useAdminAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(username, password);
      navigate('/admin');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Greška pri prijavi');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-dark-grey tracking-widest">
            THE STAGE
          </h1>
          <p className="text-soft-grey mt-1 text-sm tracking-wide">Admin Panel</p>
        </div>

        <Card className="bg-warm-white shadow-elegant border-0">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-serif text-dark-grey">Prijava</CardTitle>
            <CardDescription className="text-soft-grey">
              Unesite vaše podatke za pristup
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-dark-grey">Korisničko ime</Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  required
                  className="border-soft-grey/30 focus:border-gold"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-dark-grey">Lozinka</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="border-soft-grey/30 focus:border-gold pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-soft-grey hover:text-dark-grey"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm bg-red-50 px-3 py-2 rounded-md">{error}</p>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gold hover:bg-gold/90 text-warm-white font-medium"
              >
                {loading ? 'Prijava...' : 'Prijavite se'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

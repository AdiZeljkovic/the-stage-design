import { useState, useEffect } from 'react';
import { settingsApi } from '@/lib/api';

let cachedSettings: Record<string, string> | null = null;
let fetchPromise: Promise<Record<string, string>> | null = null;

function getSettings(): Promise<Record<string, string>> {
  if (cachedSettings) return Promise.resolve(cachedSettings);
  if (fetchPromise) return fetchPromise;
  fetchPromise = settingsApi.getAll().then((s) => {
    cachedSettings = s;
    return s;
  });
  return fetchPromise;
}

export function useSiteSettings() {
  const [settings, setSettings] = useState<Record<string, string>>(cachedSettings ?? {});
  const [loading, setLoading] = useState(!cachedSettings);

  useEffect(() => {
    if (cachedSettings) return;
    getSettings()
      .then(setSettings)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return { settings, loading };
}

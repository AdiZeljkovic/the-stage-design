import { useEffect, useState } from 'react';
import { servicesApi, ServiceContent } from '@/lib/api';

export function useServiceContent(slug: string) {
  const [content, setContent] = useState<ServiceContent | null>(null);

  useEffect(() => {
    servicesApi.getBySlug(slug).then(setContent).catch(() => null);
  }, [slug]);

  return content;
}

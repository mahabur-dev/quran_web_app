import { api } from '@/lib/api';
import { LeftNavigationClient } from './LeftNavigationClient';

export async function LeftNavigation() {
  const surahs = await api.getSurahs();
  return <LeftNavigationClient surahs={surahs} />;
}

import { getMyWebhook } from '@/api/profile';
import { useQuery } from '@tanstack/react-query';

export const useWebhookQuery = () => {
  return useQuery({
    queryKey: ['webhook'],
    queryFn: getMyWebhook,
    select: (res) => res.data,
  });
};

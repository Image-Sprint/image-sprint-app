import { getMyProfile } from '@/api/profile';
import { useQuery } from '@tanstack/react-query';

export const useProfileQuery = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: getMyProfile,
    select: (res) => res.data,
  });
};

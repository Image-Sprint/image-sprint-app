import { registerWebhook } from '@/api/profile';
import { useMutation } from '@tanstack/react-query';

const useWebhookRegisterMutation = () => {
  const registerMutation = useMutation({
    mutationFn: registerWebhook,
    onSuccess: () => {},
    onError(error) {
      console.error('웹훅 테스트에 실패했습니다.', error);
    },
  });

  return { mutateRegister: registerMutation.mutate };
};

export default useWebhookRegisterMutation;

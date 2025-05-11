import { toast } from 'react-toastify';

import { useMutation } from '@tanstack/react-query';

import { getDayFullName } from '~/utils/day';
import { fetchPost } from '~/utils/fetch';

export type SendEmailAdapter = {
  email: string;
  dayId?: number;
  time?: string;
  templateId: string;
  priceWithDiscount: number;
};

export function useSendEmail(showNotifications = false) {
  const { mutateAsync, isError, isPending, isSuccess } = useMutation<
    any,
    Error,
    SendEmailAdapter
  >({
    mutationKey: ['sendEmail'],
    onSuccess: () => {
      showNotifications &&
        toast.success('Potvrzovací email úspěšně odeslán.', {
          autoClose: 3000,
          hideProgressBar: true,
        });
    },
    onError: () => {
      showNotifications &&
        toast.error(
          'Nepodařilo se zaslat potvrzovací email. Zkuste to prosím znovu, nebo nás kontaktujte.'
        );
    },
    mutationFn: ({ email, dayId, time, priceWithDiscount, templateId }) => {
      return fetchPost('/api/email', {
        email,
        templateId,
        day: dayId && `${getDayFullName(dayId)} ${time}`,
        price: priceWithDiscount,
      });
    },
  });

  function sendEmail({
    email,
    templateId,
    dayId,
    time,
    priceWithDiscount,
  }: SendEmailAdapter) {
    return mutateAsync({
      email,
      templateId,
      dayId,
      time,
      priceWithDiscount,
    });
  }

  return {
    sendEmail,
    isError,
    isLoading: isPending,
    isSuccess,
  };
}

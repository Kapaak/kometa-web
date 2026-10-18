import { toast } from 'react-toastify';

import { useMutation } from '@tanstack/react-query';

import { SwimmingCategoryTranslation } from '~/types';
import { getDayFullName } from '~/utils/day';
import { fetchPost } from '~/utils/fetch';

import type { ClientResponse } from '@sendgrid/mail';

export type SendEmailAdapter = {
  email: string;
  firstName?: string;
  lastName?: string;
  dayId?: number;
  time?: string;
  templateId: string;
  priceWithDiscount: number;
  category?: SwimmingCategoryTranslation;
};

type SendGridResult = [ClientResponse, object];

export type SendEmailResponse = {
  data: SendGridResult;
  email: SendGridResult;
};

export function useSendEmail(showNotifications = false) {
  const { mutateAsync, isError, isPending, isSuccess } = useMutation<
    SendEmailResponse,
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
    mutationFn: ({
      email,
      firstName,
      lastName,
      dayId,
      time,
      priceWithDiscount,
      templateId,
      category,
    }) => {
      return fetchPost<SendEmailResponse>('/api/email', {
        email,
        firstName,
        lastName,
        templateId,
        day: dayId && `${getDayFullName(dayId)} ${time}`,
        price: priceWithDiscount,
        category,
      });
    },
  });

  function sendEmail({
    email,
    firstName,
    lastName,
    templateId,
    dayId,
    time,
    priceWithDiscount,
    category,
  }: SendEmailAdapter) {
    return mutateAsync({
      email,
      firstName,
      lastName,
      templateId,
      dayId,
      time,
      priceWithDiscount,
      category,
    });
  }

  return {
    sendEmail,
    isError,
    isLoading: isPending,
    isSuccess,
  };
}

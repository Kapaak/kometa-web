import { useMutation, useQuery } from '@tanstack/react-query';

export function useGetGoogleSheetById(sheetId: string) {
  const { data, isError, isLoading, isSuccess } = useQuery<string[]>({
    queryKey: ['googleSheet', sheetId],
    enabled: Boolean(sheetId),
    queryFn: async () => {
      const params = new URLSearchParams({
        gid: sheetId,
      });

      const response = await fetch(`/api/sheets?${params.toString()}`);

      if (!response.ok) {
        throw new Error('Failed to fetch Google Sheet data');
      }

      const data = await response.json();
      return data;
    },
  });

  return {
    data,
    isError,
    isSuccess,
    isLoading,
  };
}

export function useAppendGoogleSheetById(sheetId: number) {
  const {
    isPending: isLoading,
    isError,
    mutateAsync,
  } = useMutation({
    mutationFn: async (values: string[]) => {
      const params = new URLSearchParams({
        gid: String(sheetId),
      });

      const response = await fetch(`/api/sheets?${params.toString()}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ values }),
      });

      if (!response.ok) {
        throw new Error('Failed to post data to Google Sheet');
      }

      const data = await response.json();
      return data;
    },
  });

  const handleAppendGoogleSheet = async (values: any[]) => {
    return await mutateAsync(values);
  };

  return {
    appendGoogleSheetById: handleAppendGoogleSheet,
    isError,
    isLoading,
  };
}

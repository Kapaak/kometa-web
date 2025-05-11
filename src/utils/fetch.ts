export async function fetchGet<T>(
  url: string,
  params?: Record<string, string>
): Promise<T> {
  const queryString = params
    ? `?${new URLSearchParams(params).toString()}`
    : '';
  const response = await fetch(`${url}${queryString}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`GET request failed: ${response.statusText}`);
  }

  return response.json();
}

export async function fetchPost<T>(
  url: string,
  body: Record<string, any>,
  params?: Record<string, string>
): Promise<T> {
  const queryString = params
    ? `?${new URLSearchParams(params).toString()}`
    : '';
  const response = await fetch(`${url}${queryString}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`POST request failed: ${response.statusText}`);
  }

  return response.json();
}

const DEFAULT_HEADERS = {
  Accept: "application/json",
};

export async function apiFetch<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, {
      headers: DEFAULT_HEADERS,
      next: {
        revalidate: 30,
      },
    });

    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`);
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error(error);
    return null;
  }
}

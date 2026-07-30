export interface FearGreedData {
  value: string;
  classification: string;
}

export async function getFearGreedIndex(): Promise<FearGreedData> {
  try {
    const res = await fetch(
      "https://api.alternative.me/fng/?limit=1",
      {
        next: {
          revalidate: 300,
        },
      }
    );

    const json = await res.json();

    return {
      value: json.data[0].value,
      classification: json.data[0].value_classification,
    };
  } catch {
    return {
      value: "--",
      classification: "Unknown",
    };
  }
}

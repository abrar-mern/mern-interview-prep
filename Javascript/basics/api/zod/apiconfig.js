const BASE_URL = "https://json-placeholder.mock.beeceptor.com";

export async function apiClient(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Network Error ${response.status}`);
  }
  return response.json();
}

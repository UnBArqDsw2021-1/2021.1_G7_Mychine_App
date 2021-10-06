const api = (endpoint: RequestInfo, options: RequestInit) =>
  fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL + endpoint}/api`, options).then(
    (res) => {
      if (res.ok) {
        return res.json();
      }
      return res.text().then((text) => {
        throw new Error(text);
      });
    }
  );

export default api;

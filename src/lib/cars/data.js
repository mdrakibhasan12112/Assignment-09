export const fetchExploreCars = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/explore-car`);
  const data = await res.json();
  return data || [];
};

export const fetchTopExploreCars = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/top-cars`);
  const data = await res.json();
  return data || [];
};

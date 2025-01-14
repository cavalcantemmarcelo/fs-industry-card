export const fetchCompanies = async () => {
  const response = await fetch(
    "https://fs-industry-card.onrender.com/api/companies"
  );
  return response.json();
};

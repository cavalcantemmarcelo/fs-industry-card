export const fetchCompanies = async () => {
  const response = await fetch("http://localhost:3000/api/companies");
  return response.json();
};

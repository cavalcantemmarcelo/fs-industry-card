import React, { useEffect, useState } from "react";
import IndustryCard from "./components/IndustryCard";

const App = () => {
  const [industries, setIndustries] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCompanies = async () => {
      try {
        const response = await fetch(
          "https://fs-industry-card.onrender.com/api/companies"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const categorized = data.reduce((acc, company) => {
          company.industries.forEach(({ name }) => {
            if (!acc[name]) acc[name] = [];
            acc[name].push(company);
          });
          return acc;
        }, {});

        Object.keys(categorized).forEach((industry) => {
          categorized[industry].sort((a, b) => a.name.localeCompare(b.name));
        });

        setIndustries(categorized);
      } catch (err) {
        console.error("Error loading companies:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadCompanies();
  }, []);

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-4 text-red-500">Error: {error}</div>;
  }

  if (Object.keys(industries).length === 0) {
    return <div className="text-center mt-4">No data available</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen container mx-auto p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {Object.entries(industries).map(([industry, companies]) => (
        <IndustryCard
          key={industry}
          industryName={industry}
          companies={companies}
        />
      ))}
    </div>
  );
};

export default App;

import React from "react";

const IndustryCard = ({ industryName, companies }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">{industryName}</h2>
        <span className="text-gray-500 font-medium">{companies.length}</span>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="text-sm font-medium text-gray-600 pb-2">Name</th>
            <th className="text-sm font-medium text-gray-600 pb-2 text-right">
              Total jobs available
            </th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.uuid} className="border-t">
              <td className="flex items-center py-2">
                <img
                  src={company.images["32x32"]}
                  alt={company.name}
                  className="w-6 h-6 rounded-full mr-3"
                />
                <span className="text-sm text-gray-800">{company.name}</span>
              </td>
              <td className="text-sm text-gray-800 text-right">
                {company.total_jobs_available}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IndustryCard;

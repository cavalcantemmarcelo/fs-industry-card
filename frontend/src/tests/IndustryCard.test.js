test("renders industry name and company count", () => {
  const mockData = [
    {
      uuid: "1",
      name: "Company A",
      images: { "32x32": "logoA.png" },
      total_jobs_available: 10,
    },
    {
      uuid: "2",
      name: "Company B",
      images: { "32x32": "logoB.png" },
      total_jobs_available: 5,
    },
  ];

  render(<IndustryCard industryName="Tech" companies={mockData} />);
  expect(screen.getByText("Tech")).toBeInTheDocument();
  expect(screen.getByText("2")).toBeInTheDocument();
});

test("renders company details in the table", () => {
  const mockData = [
    {
      uuid: "1",
      name: "Company A",
      images: { "32x32": "logoA.png" },
      total_jobs_available: 10,
    },
    {
      uuid: "2",
      name: "Company B",
      images: { "32x32": "logoB.png" },
      total_jobs_available: 5,
    },
  ];

  render(<IndustryCard industryName="Tech" companies={mockData} />);
  expect(screen.getByText("Company A")).toBeInTheDocument();
  expect(screen.getByText("Company B")).toBeInTheDocument();
  expect(screen.getByText("10")).toBeInTheDocument();
  expect(screen.getByText("5")).toBeInTheDocument();
});

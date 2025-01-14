global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        items: [
          {
            uuid: "1",
            name: "Company A",
            industries: [{ id: 1, name: "Tech" }],
            images: { "32x32": "logoA.png" },
            total_jobs_available: 10,
          },
          {
            uuid: "2",
            name: "Company B",
            industries: [{ id: 2, name: "Social" }],
            images: { "32x32": "logoB.png" },
            total_jobs_available: 5,
          },
        ],
      }),
  })
);

test("renders cards with industries and companies", async () => {
  render(<App />);
  expect(await screen.findByText("Tech")).toBeInTheDocument();
  expect(await screen.findByText("Social")).toBeInTheDocument();
});

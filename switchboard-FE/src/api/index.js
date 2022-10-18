const url = "http://localhost:8000/v1/contributions/find";

const _getData = async (data) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseData = await response.json();

  return responseData.documents;
};

export const getRecentContributions = (name) => {
  const data = {
    sort: { paid_at: 1 },
    filter: {
      status: "approved",
    },
    limit: 10,
  };

  if (name) {
    data.filter.donor_firstname = { $regex: name, $options: "i" };
  }
  return _getData(data);
};

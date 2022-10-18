import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { getRecentContributions } from "../../api";

const RecentContributions = ({ name }) => {
  const [contributions, setContributions] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const data = await getRecentContributions(name);
      setContributions(data);
    })();
  }, [name]);

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography
          sx={{ fontSize: 14, mb: 2 }}
          color="text.secondary"
          gutterBottom
        >
          10 Recent Contributions
        </Typography>
        {contributions.map((contribution) => (
          <Typography
            variant="body2"
            sx={{ fontSize: 14 }}
            key={contribution.id}
          >
            {contribution.donor_firstname +
              " contributed $" +
              contribution.amount}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentContributions;

import * as React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import RecentContributions from "./components/RecentContributions";

function App() {
  const [name, setName] = React.useState("");
  const [debouncedName, setDeboundedName] = React.useState("");

  const handleOnNameChange = (e) => {
    setName(e.target.value);
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDeboundedName(name);
    }, 200);

    return () => clearTimeout(timeout);
  }, [name]);

  return (
    <Layout>
      <Typography variant="h3">ActBlue Fundraising Dashboard</Typography>

      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={handleOnNameChange}
      />

      <RecentContributions name={debouncedName} />
    </Layout>
  );
}

export default App;

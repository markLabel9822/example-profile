import * as React from "react";
import { useProfile } from "../hooks/useProfile";
import { useState, useEffect } from "react";
import { Typography, Grid, Card, CardContent, TextField } from "@mui/material";
const Profile = () => {
  const { getProfile } = useProfile();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");

  const handleProfile = async () => {
    const result = await getProfile();
    setFirstName(result.firstName);
    setLastName(result.lastName);
    setNickName(result.nickName);
  };

  useEffect(() => {
    handleProfile();
  }, []);
  return (
    <Grid container spacing={6}>
      <Grid
        item
        xs={12}
        sm={12}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Typography sx={{ fontSize: "18px", fontWeight: "700", pt: "0.5rem" }}>
          Profile
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  value={firstName}
                  label="firstName"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  value={lastName}
                  label="lastName"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  value={nickName}
                  label="nickName"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Profile;

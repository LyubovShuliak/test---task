import React, { useState } from "react";

import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type {} from "@mui/lab/themeAugmentation";
import { Link, useParams } from "react-router-dom";
import createTheme from "@mui/material/styles/createTheme";
import { ThemeProvider } from "@emotion/react";
import { User } from "../../app/users/usersSlice";

interface StandardComponentProps {
  user: User;
  // myRef?: React.Ref<HTMLDivElement> | null;
}

const theme = createTheme({
  components: {
    MuiCardMedia: {
      styleOverrides: {
        img: {
          maxWidth: "220px",
          objectFit: "scale-down",
          padding: "20px",
          backgroundColor: "cornsilk",
          margin: "auto",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "16px 16px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          paddingLeft: "8px",
        },
        button: {
          paddingLeft: "16px",
        },
      },
    },
  },
});

export const CardItem = ({ user }: StandardComponentProps) => {
  const { picture, name, location } = user;
  return (
    <div>
      {/* <ThemeProvider theme={theme}> */}
        {/* <Card
          sx={{
            height: 300,
            display: "flex",
            width: 400,
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "20px",
          }}
        >
          <div>
            <CardMedia
              component="img"
              height="140"
              image={`${picture}`}
              alt={`${name}`}
              sx={{ height: 150 }}
            />

            <CardContent
              sx={{
                display: "flex",
                justifyItems: "end",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  justifySelf: "flex-end",
                  fontSize: "20px",
                  color: "blue",
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {name}
              </Typography>
            </CardContent>
          </div>

          <div>
            <Typography
              sx={{
                justifySelf: "flex-end",
                fontSize: "14px",
                color: "black",
                backgroundColor: "burlywood",
              }}
              variant="body2"
            >
              {location.city}
            </Typography>
          </div>
        </Card> */}
      {/* </ThemeProvider> */}
    </div>
  );
};

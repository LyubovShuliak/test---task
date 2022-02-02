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
import { margin } from "@mui/system";

interface StandardComponentProps {
  image: string;
  title: string;
  description: string;
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
          margin: 'auto'
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

export default function CardItem({
  image,
  title,
  description,
}: StandardComponentProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Card
          sx={{
            height: 300,
            display: "flex",
            width: 400,
            flexDirection: "column",
            justifyContent: "space-between",
            margin: '20px'
          }}
        >
          <div>
            <CardMedia
              component="img"
              height="140"
              image={`${image}`}
              alt={`${title}`}
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
                {title}
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
              {description}
            </Typography>
          </div>
        </Card>
      </ThemeProvider>
    </>
  );
}

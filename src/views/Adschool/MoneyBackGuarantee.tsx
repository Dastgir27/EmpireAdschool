"use client"; // If using Next.js

import React from "react";
import { Box, Button, Card, CardContent, Chip, Typography } from "@mui/material";

export default function MoneyBackGuarantee() {
  return (
      <Card sx={{ maxWidth: 1200, mx: "auto", p: 3, boxShadow: 3, borderRadius: 3 }}>
        <CardContent sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: 3 }}>

          {/* Left Side: Text Content */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="subtitle1" color="textSecondary">
              No Questions Asked!
            </Typography>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              100% Money Back Guarantee
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              If you are unhappy with the course because we couldn’t teach you anything new, you may qualify for our{" "}
              <strong>strong 100% money back guarantee</strong> and get a full refund within 7 days of your purchase as per our Refund Policy.
            </Typography>

            {/* Guarantee Badges */}
            <Box sx={{ display: "flex", gap: 1, my: 2 }}>
              <Chip label="✔ 100% Refund Available" color="default" variant="outlined" />
              <Chip label="✔ 7 Day Refund Policy" color="default" variant="outlined" />
            </Box>

            {/* CTA Button */}
            <Button variant="contained" color="primary" sx={{ mt: 2, px: 4, borderRadius: 2 }}>
              Get a 75% Discount
            </Button>
          </Box>

          {/* Right Side: Image Section */}
          <Box sx={{ position: "relative", flex: 1, textAlign: "center" }}>
            <img
                src="https://source.unsplash.com/400x300/?happy,person" // Replace with your image URL
                alt="Happy customer"
                style={{ width: "100%", maxWidth: 350, borderRadius: 8 }}
            />

            {/* Money Back Badge */}
            <Box sx={{
              position: "absolute",
              top: 10,
              right: 10,
              width: 80,
              height: 80,
              backgroundImage: "url(https://i.imgur.com/J0zrRZ7.png)", // Replace with your badge image URL
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat"
            }} />
          </Box>

        </CardContent>
      </Card>
  );
}

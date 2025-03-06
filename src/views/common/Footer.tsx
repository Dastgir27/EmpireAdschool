import React from "react";
import { Box, Container, Grid, Typography, Link, TextField, Button } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
      <Box sx={{ bgcolor: "#222", color: "white", py: 5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* About Section */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" fontWeight="bold">
                About Us
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "#bbb" }}>
                MasterCamp Academy provides world-class education and career-transforming courses.
              </Typography>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" fontWeight="bold">
                Quick Links
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Link href="#" color="inherit" underline="hover" display="block">Courses</Link>
                <Link href="#" color="inherit" underline="hover" display="block">Admissions</Link>
                <Link href="#" color="inherit" underline="hover" display="block">Scholarships</Link>
                <Link href="#" color="inherit" underline="hover" display="block">Contact</Link>
              </Box>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" fontWeight="bold">
                Contact Us
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "#bbb" }}>
                📍 123 Academy Street, NY, USA <br />
                📧 info@mastercamp.com <br />
                📞 +1 234 567 890
              </Typography>
            </Grid>

            {/* Newsletter Subscription */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" fontWeight="bold">
                Subscribe to Newsletter
              </Typography>
              <Box sx={{ mt: 1, display: "flex", gap: 1 }}>
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Your Email"
                    sx={{ bgcolor: "white", borderRadius: 1, flexGrow: 1 }}
                />
                <Button variant="contained" color="primary">Subscribe</Button>
              </Box>
            </Grid>
          </Grid>

          {/* Social Media Links */}
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>Follow us on</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Link href="#" color="inherit"><Facebook /></Link>
              <Link href="#" color="inherit"><Twitter /></Link>
              <Link href="#" color="inherit"><Instagram /></Link>
              <Link href="#" color="inherit"><LinkedIn /></Link>
            </Box>
          </Box>

          {/* Copyright */}
          <Box sx={{ textAlign: "center", mt: 3, borderTop: "1px solid #444", pt: 2 }}>
            <Typography variant="body2" color="textSecondary">
              © {new Date().getFullYear()} MasterCamp Academy. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
  );
}

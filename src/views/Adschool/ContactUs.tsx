"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Typography,
} from "@mui/material";
import { MailOutline, Phone, ChatBubbleOutline } from "@mui/icons-material";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    employeeCount: "",
    helpType: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
      <Grid container minHeight="100vh">
        {/* Left Section */}
        <Grid item xs={12} md={6} sx={{ p: { xs: 4, md: 6 }, bgcolor: "purple.50" }}>
          <Typography variant="h3" fontWeight="bold" color="purple.900" mb={2}>
            Contact Us
          </Typography>

          <Typography variant="h6" color="text.secondary" mb={3}>
            Looking to design employee benefits for your team? Leave your details, and our experts will reach out
            within 24 hours.
            <a href="#" style={{ color: "#E91E63", textDecoration: "underline" }}>
              Solution articles here
            </a>
          </Typography>

          {/* Contact Options */}
          <Grid container spacing={2} mb={6}>
            <ContactOption
                icon={<MailOutline fontSize="small" color="warning" />}
                title="Write to us at"
                subtitle="Share your queries here"
                contact="support@pazcare.com"
                link="mailto:support@pazcare.com"
            />
            <ContactOption
                icon={<ChatBubbleOutline fontSize="small" color="success" />}
                title="Chat with us at"
                subtitle="Instantly access policy here"
                contact="+91-8197379596"
                link="tel:+918197379596"
            />
            <ContactOption
                icon={<Phone fontSize="small" color="primary" />}
                title="Call us at"
                subtitle="Available 24 x 7"
                contact="+91-8037834753"
                link="tel:+918037834753"
            />
          </Grid>

          <Typography variant="h4" fontWeight="bold" color="purple.900" mb={2}>
            Our Offices
          </Typography>

          <Grid container spacing={2}>
            <OfficeIcon />
            <OfficeIcon />
          </Grid>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="center" p={6}>
          <Box maxWidth="400px" width="100%">
            <Typography variant="h4" fontWeight="bold" mb={3} borderLeft={4} pl={2} borderColor="pink.500">
              Get a call back today!
            </Typography>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
              />

              <TextField
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
              />

              <TextField
                  label="Work email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  InputProps={{
                    startAdornment: <MailOutline sx={{ color: "gray", mr: 1 }} />,
                  }}
              />

              <TextField
                  label="Mobile number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  InputProps={{
                    startAdornment: <Phone sx={{ color: "gray", mr: 1 }} />,
                  }}
              />

              <FormControl fullWidth required margin="normal">
                <InputLabel>Company Employee Count</InputLabel>
                <Select
                    name="employeeCount"
                    value={formData.employeeCount}
                    onChange={handleSelectChange}
                >
                  <MenuItem value="1-10">1-10</MenuItem>
                  <MenuItem value="11-50">11-50</MenuItem>
                  <MenuItem value="51-200">51-200</MenuItem>
                  <MenuItem value="201-500">201-500</MenuItem>
                  <MenuItem value="501+">501+</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth required margin="normal">
                <InputLabel>How can Pazcare help you today?</InputLabel>
                <Select
                    name="helpType"
                    value={formData.helpType}
                    onChange={handleSelectChange}
                >
                  <MenuItem value="health-insurance">Health Insurance</MenuItem>
                  <MenuItem value="term-life">Term Life Insurance</MenuItem>
                  <MenuItem value="employee-benefits">Employee Benefits</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>

              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    py: 1.5,
                    bgcolor: "pink.500",
                    "&:hover": { bgcolor: "pink.600" },
                  }}
              >
                Get Quote
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
  );
}

// Contact Info Box Component
function ContactOption({ icon, title, subtitle, contact, link }: any) {
  return (
      <Grid item xs={12} sm={4}>
        <Box sx={{ p: 2, bgcolor: "white", borderRadius: 2, boxShadow: 1 }}>
          <Box sx={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "grey.100", borderRadius: "50%", mb: 2 }}>
            {icon}
          </Box>
          <Typography variant="subtitle1" fontWeight="bold">{title}</Typography>
          <Typography variant="body2" color="text.secondary" mb={1}>{subtitle}</Typography>
          <a href={link} style={{ fontSize: "0.875rem", fontWeight: "bold", textDecoration: "underline", color: "black" }}>
            {contact}
          </a>
        </Box>
      </Grid>
  );
}

// Placeholder Office Icon Component
function OfficeIcon() {
  return (
      <Grid item xs={6}>
        <Box sx={{ p: 3, bgcolor: "white", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: 1 }}>
          <Box sx={{ width: 60, height: 60, bgcolor: "grey.300", borderRadius: "50%" }} />
        </Box>
      </Grid>
  );
}

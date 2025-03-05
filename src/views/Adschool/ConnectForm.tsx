import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";

// Define the form state interface
interface FormState {
  name: string;
  email: string;
  mobile: string;
  programme: string;
  consent: boolean;
}

// Initial form data
const initialFormData: FormState = {
  name: "",
  email: "",
  mobile: "",
  programme: "",
  consent: true,
};

export default function ConnectForm() {
  const [formData, setFormData] = useState<FormState>(initialFormData);

  // Handle input changes (TextField & Select)
  const handleChange = (
      event: any
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: event.target.checked }));
  };

  // Handle form submission (Placeholder for now)
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
      <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            backgroundImage:
                "url(https://source.unsplash.com/1600x900/?business,people)", // Replace with actual image
            backgroundSize: "cover",
            backgroundPosition: "center",
            p: 2,
          }}
      >
        <Card
            sx={{
              maxWidth: 450,
              width: "100%",
              p: 3,
              borderRadius: 3,
              boxShadow: 4,
              bgcolor: "rgba(255, 255, 255, 0.9)",
            }}
        >
          <CardContent>
            <Typography variant="h4" fontWeight="bold" textAlign="center">
              Connect with us
            </Typography>
            <Typography variant="body1" color="textSecondary" textAlign="center" mb={3}>
              Fill the form to know more about MasterCamp
            </Typography>

            {/* FORM START */}
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  variant="outlined"
                  margin="normal"
              />

              {/* Email Input */}
              <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  variant="outlined"
                  margin="normal"
              />

              {/* Mobile Input */}
              <TextField
                  fullWidth
                  label="Mobile Number"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter Your Mobile Number"
                  variant="outlined"
                  margin="normal"
              />

              {/* Programme Select Dropdown */}
              <FormControl fullWidth margin="normal">
                <InputLabel>Select your Programme</InputLabel>
                <Select name="programme" value={formData.programme} onChange={handleChange}>
                  <MenuItem value="MasterCamp AI">MasterCamp AI</MenuItem>
                  <MenuItem value="MasterCamp Web">MasterCamp Web</MenuItem>
                  <MenuItem value="MasterCamp Data Science">MasterCamp Data Science</MenuItem>
                </Select>
              </FormControl>

              {/* Checkbox */}
              <FormControlLabel
                  control={<Checkbox checked={formData.consent} onChange={handleCheckboxChange} />}
                  label="I authorize MasterCamp to contact me with updates via Calls, SMS, WhatsApp and Emails. This will override my registry on DND/NDNC."
              />

              {/* Submit Button */}
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    py: 1.5,
                    borderRadius: 3,
                    background: "linear-gradient(to right, gold, black)",
                    color: "black",
                    fontWeight: "bold",
                    "&:hover": {
                      background: "linear-gradient(to right, black, gold)",
                      color: "white",
                    },
                  }}
              >
                GET IN TOUCH
              </Button>
            </form>
            {/* FORM END */}
          </CardContent>
        </Card>
      </Box>
  );
}
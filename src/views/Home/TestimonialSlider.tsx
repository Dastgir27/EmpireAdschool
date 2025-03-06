import React, { useState } from "react";
import { Box, Card, Typography, Avatar, Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Testimonial Data
const testimonials = [
  {
    quote:
        "GMC + wellness plan is of great help to my team during these tough times. We are surely a happy client. Great job guys!",
    name: "Nikunj Verma",
    title: "CEO, Cutshort",
    companyLogo: "https://via.placeholder.com/20", // Replace with actual logo
    image: "https://via.placeholder.com/100", // Replace with actual image
  },
  {
    quote:
        "This platform has transformed our workflow, making operations smoother than ever. Highly recommended!",
    name: "John Doe",
    title: "CTO, TechCorp",
    companyLogo: "https://via.placeholder.com/20",
    image: "https://via.placeholder.com/100",
  },
  {
    quote:
        "A game-changer for our business! The efficiency and ease of use are unparalleled.",
    name: "Jane Smith",
    title: "Founder, StartupX",
    companyLogo: "https://via.placeholder.com/20",
    image: "https://via.placeholder.com/100",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { quote, name, title, companyLogo, image } = testimonials[currentIndex];

  return (
      <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "50vh",
            background: "#3a0d63",
            color: "white",
            padding: 4,
          }}
      >
        <Card
            sx={{
              maxWidth: 700,
              width: "100%",
              p: 4,
              borderRadius: 3,
              boxShadow: 4,
              textAlign: "center",
              bgcolor: "rgba(255, 255, 255, 0.1)",
            }}
        >
          <Typography variant="h5" fontWeight="bold">
            Impact we made
          </Typography>
          <Box
              sx={{
                my: 3,
                fontStyle: "italic",
                fontSize: "1.2rem",
                color: "#ddd",
              }}
          >
            “{quote}”
          </Box>
          <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                mt: 2,
              }}
          >
            <Avatar src={image} alt={name} sx={{ width: 60, height: 60 }} />
            <Box>
              <Typography fontWeight="bold">{name}</Typography>
              <Typography variant="body2">{title}</Typography>
              <img src={companyLogo} alt="company logo" width={50} />
            </Box>
          </Box>

          {/* Navigation Buttons */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3, gap: 2 }}>
            <Button
                onClick={prevSlide}
                variant="contained"
                sx={{
                  minWidth: 40,
                  bgcolor: "rgba(255,255,255,0.3)",
                  color: "white",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.5)" },
                }}
            >
              <ArrowBackIos fontSize="small" />
            </Button>
            <Button
                onClick={nextSlide}
                variant="contained"
                sx={{
                  minWidth: 40,
                  bgcolor: "rgba(255,255,255,0.3)",
                  color: "white",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.5)" },
                }}
            >
              <ArrowForwardIos fontSize="small" />
            </Button>
          </Box>
        </Card>
      </Box>
  );
}

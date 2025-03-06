"use client";

// @ts-ignore
import { PlayArrow } from "@mui/icons-material";
import { Box, Button, Grid, Typography, Chip } from "@mui/material";

const technologies = [
  ["Martech", "Metaverse"],
  ["Blockchain", "Edtech"],
  ["Fintech", "AI/ML"],
];

export default function StartupWeekend() {
  return (
      <Box sx={{ px: 4, py: 12, maxWidth: "1200px", mx: "auto" }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} lg={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Startup Weekend
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
              Bridge gaps, share ideas & develop your best prototypes with your peers in under 48 hours.
            </Typography>

            {/* Technologies */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {technologies.map((row, i) => (
                  <Box key={i} sx={{ display: "flex", gap: 1 }}>
                    {row.map((tech) => (
                        <Chip key={tech} label={tech} sx={{ bgcolor: "rgba(0,0,0,0.1)", px: 2 }} />
                    ))}
                  </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Image Section */}
          <Grid item xs={12} lg={6}>
            <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/9",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
            >
              <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-03%20at%2020.57.18-hAPRVCsLfm0GlSO5G1KDpJuhvZpYRv.jpeg"
                  alt="Startup Weekend participants"
                  style={{ objectFit: "cover" }}
              />
              {/* Play Button Overlay */}
              <Button
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 64,
                    height: 64,
                    minWidth: "unset",
                    borderRadius: "50%",
                    bgcolor: "rgba(0,0,0,0.5)",
                    "&:hover": { bgcolor: "rgba(0,0,0,0.75)" },
                    backdropFilter: "blur(4px)",
                  }}
              >
                <PlayArrow sx={{ fontSize: 40, color: "white" }} />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
  );
}

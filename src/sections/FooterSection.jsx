import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { footerData } from "../utils/constants";

const FooterSection = ({ id }) => (
  <Box component="footer" id={id} sx={{ bgcolor: "#102038", color: "#e6f0f3", pt: { xs: 8, md: 10 }, pb: 4 }}>
    <Container maxWidth="lg">
      <Grid container spacing={5} sx={{ pb: 7 }}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ color: "#65d6bc", fontSize: 14, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>
            Let's connect
          </Typography>
          <Typography component="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 800, lineHeight: 1.2, mt: 1, maxWidth: 550 }}>
            Have a product or engineering challenge in mind?
          </Typography>
          <Typography sx={{ color: "#b9cbd3", mt: 2, maxWidth: 520 }}>
            I enjoy collaborating on useful mobile, backend and AI-powered products. Reach out to talk about an idea or opportunity.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "grid", gap: 1.6, justifyContent: { md: "end" } }}>
            <Link href={`mailto:${footerData.contact.email}`} sx={{ color: "#ffffff", fontSize: { xs: "1.15rem", md: "1.4rem" }, fontWeight: 700, textDecorationColor: "#65d6bc", overflowWrap: "anywhere" }}>
              {footerData.contact.email}
            </Link>
            <Link href={`tel:${footerData.contact.phoneHref}`} sx={{ color: "#e6f0f3", textDecoration: "none", fontSize: "1.1rem" }}>
              {footerData.contact.phone}
            </Link>
            <Typography sx={{ color: "#b9cbd3" }}>{footerData.contact.location}</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 1 }}>
              {footerData.social.map((social) => (
                <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" sx={{ color: "#65d6bc", fontWeight: 700 }}>
                  {social.name} ↗
                </Link>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ borderTop: "1px solid #35506a", pt: 3, display: "flex", justifyContent: "space-between", gap: 2, flexWrap: "wrap" }}>
        <Typography sx={{ color: "#9eb3bf", fontSize: 14 }}>© {footerData.copyright.year} {footerData.brand.name}</Typography>
        <Typography sx={{ color: "#9eb3bf", fontSize: 14 }}>{footerData.brand.tagline} · Sri Lanka</Typography>
      </Box>
    </Container>
  </Box>
);

export default FooterSection;

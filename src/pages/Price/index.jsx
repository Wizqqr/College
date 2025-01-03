import React from "react";
import { AppBar, Box, Container, Typography, Divider, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Price = () => {
    const { t } = useTranslation();

    return (
        <>
            <AppBar position="static">
                <Box
                    sx={{
                        backgroundColor: "#5a738f",
                        padding: { xs: "60px 20px", sm: "90px" },
                        textAlign: "center",
                        boxShadow: "none",
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                color: "#fff",
                                fontWeight: "bold",
                                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                                fontSize: { xs: "2.5rem", sm: "3rem" },
                            }}
                        >
                            {t("price.tuition_info.title")}
                        </Typography>
                    </motion.div>
                </Box>
            </AppBar>

            <Container sx={{ padding: { xs: "20px", sm: "40px" }, marginTop: "40px" }}>
                <Paper sx={{ padding: "20px", borderRadius: "8px", boxShadow: 3 }}>
                    <Typography variant="h5" component="h2" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
                        {t("price.contact_info.title")}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "10px", lineHeight: "1.6" }}>
                        <strong>{t("price.contact_info.address")}</strong>
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "10px", lineHeight: "1.6" }}>
                        <strong>{t("price.contact_info.phones.title")}</strong>
                        <br />
                        {t("price.contact_info.phones.phone1")}
                        <br />
                        {t("price.contact_info.phones.phone2")}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "20px", lineHeight: "1.6" }}>
                        <strong>{t("price.contact_info.email")}</strong> info@salymbekov.com
                    </Typography>

                    <Divider sx={{ marginBottom: "20px" }} />

                    <Typography variant="h5" component="h2" sx={{ marginBottom: "10px", fontWeight: "bold" }}>
                        {t("price.tuition_info.description")}
                    </Typography>

                    <Typography variant="h6" sx={{ marginTop: "30px", marginBottom: "10px", fontWeight: "bold" }}>
                        {t("price.courses.title")}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Paper sx={{ padding: "15px", borderRadius: "8px", boxShadow: 2 }}>
                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                    {t("price.courses.software_development.title")}
                                </Typography>
                                <Typography variant="body2">{t("price.courses.software_development.price")}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper sx={{ padding: "15px", borderRadius: "8px", boxShadow: 2 }}>
                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                    {t("price.courses.mobile_app_development.title")}
                                </Typography>
                                <Typography variant="body2">{t("price.courses.mobile_app_development.price")}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper sx={{ padding: "15px", borderRadius: "8px", boxShadow: 2 }}>
                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                    {t("price.courses.multimedia_app_development.title")}
                                </Typography>
                                <Typography variant="body2">{t("price.courses.multimedia_app_development.price")}</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
};

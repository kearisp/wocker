import React from "react";
import {Link} from "react-router-dom";
import {Container, Typography, Box, Button} from "@mui/material";
import {useTranslation} from "react-i18next";
import {
    LiquidEther,
    MarkdownScreen
} from "../../blocks";
import {ROUTES} from "../../../env";


const HomePage: React.FC = () => {
    const [t] = useTranslation();

    return (
        <>
            <Box
              position="relative"
              width="100%"
              height={600}>
                <LiquidEther
                  colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                  mouseForce={65}
                  cursorSize={40}
                  isViscous={false}
                  viscous={30}
                  iterationsViscous={32}
                  iterationsPoisson={32}
                  resolution={0.5}
                  isBounce={false}
                  autoDemo={true}
                  autoSpeed={0.5}
                  autoIntensity={2.2}
                  takeoverDuration={0.25}
                  autoResumeDelay={3000}
                  autoRampDuration={0.6}>
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      display="flex"
                      margin="auto"
                      maxWidth={550}
                      flexDirection="column"
                      gap={3}
                      alignItems="center"
                      justifyContent="center">
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Typography variant="h1">
                                {t("home.title")}
                            </Typography>

                            <Typography variant="body1" color="textSecondary">
                                {t("home.description")}
                            </Typography>
                        </Box>

                        <Button
                          component={Link}
                          variant="contained"
                          color="primary"
                          to={ROUTES.docs}>
                            {t("home.docs")}
                        </Button>
                    </Box>
                </LiquidEther>
            </Box>

            <Container>
                <MarkdownScreen
                  path="index.md" />
            </Container>
        </>
    );
};


export default HomePage;

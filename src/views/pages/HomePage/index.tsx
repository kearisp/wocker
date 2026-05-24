import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {LiquidEther, MarkdownScreen, Button} from "src/views/blocks";
import {Router} from "src/env";


const HomePage: React.FC = () => {
    const [t] = useTranslation();

    return (
        <>
            <div className="relative w-full h-[600px]">
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
                    <div className="absolute inset-0 flex flex-col items-start justify-center gap-8 max-w-(--breakpoint-sm) mx-auto px-6">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                                {t("home.title")}
                            </h1>

                            <p className="text-lg text-muted-foreground">
                                {t("home.description")}
                            </p>
                        </div>

                        <Button
                          as={Link}
                          variant="primary"
                          className="px-6 h-12"
                          to={Router.url("docs")}>
                            {t("home.docs")}
                        </Button>
                    </div>
                </LiquidEther>
            </div>

            <div className="px-6">
                <MarkdownScreen
                  path="index.md" />
            </div>
        </>
    );
};


export default HomePage;

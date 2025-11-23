import { useEffect } from 'react';

declare global {
    interface Window {
        tsParticles: any;
    }
}

const ParticleBackground = () => {
    useEffect(() => {
        const initParticles = async () => {
            if (!window.tsParticles) return;

            const getThemeColors = () => {
                const isDark = document.documentElement.getAttribute('data-theme') === 'dark' ||
                    !document.documentElement.getAttribute('data-theme');

                if (isDark) {
                    return {
                        particles: "#00D4FF",
                        links: "#00D4FF",
                        particlesOpacity: 0.6,
                        linksOpacity: 0.3
                    };
                } else {
                    return {
                        particles: "#2b6cb0",
                        links: "#2b6cb0",
                        particlesOpacity: 0.4,
                        linksOpacity: 0.2
                    };
                }
            };

            const getParticleConfig = () => {
                const colors = getThemeColors();

                return {
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse"
                            },
                            onClick: {
                                enable: true,
                                mode: "push"
                            },
                            resize: true
                        },
                        modes: {
                            repulse: {
                                distance: 100,
                                duration: 0.4
                            },
                            push: {
                                quantity: 4
                            }
                        }
                    },
                    particles: {
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                area: 800
                            }
                        },
                        color: {
                            value: colors.particles
                        },
                        shape: {
                            type: "circle"
                        },
                        opacity: {
                            value: colors.particlesOpacity,
                            random: false,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false
                            }
                        },
                        size: {
                            value: { min: 1, max: 3 },
                            random: true,
                            anim: {
                                enable: true,
                                speed: 2,
                                size_min: 0.5,
                                sync: false
                            }
                        },
                        links: {
                            enable: true,
                            distance: 150,
                            color: colors.links,
                            opacity: colors.linksOpacity,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 1.5,
                            direction: "none",
                            random: false,
                            straight: false,
                            outModes: {
                                default: "bounce"
                            }
                        }
                    },
                    detectRetina: true
                };
            };

            const loadParticles = async () => {
                const config = getParticleConfig();
                await window.tsParticles.load("tsparticles", config);
            };

            // Initial load
            await loadParticles();

            // Theme change listener
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                        loadParticles();
                    }
                });
            });

            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['data-theme']
            });

            return () => {
                observer.disconnect();
            };
        };

        // Check if tsParticles is loaded, if not wait a bit or rely on window load
        if (window.tsParticles) {
            initParticles();
        } else {
            window.addEventListener('load', initParticles);
            return () => window.removeEventListener('load', initParticles);
        }
    }, []);

    return (
        <div
            id="tsparticles"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                background: 'transparent',
                pointerEvents: 'none'
            }}
        />
    );
};

export default ParticleBackground;

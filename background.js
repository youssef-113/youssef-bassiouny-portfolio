// background.js - Theme-aware tsParticles background

class ParticleBackground {
    constructor() {
        this.particlesInstance = null;
        this.currentTheme = 'dark';
        this.init();
    }

    init() {
        // Wait for DOM and tsParticles to be ready
        document.addEventListener('DOMContentLoaded', () => {
            if (window.tsParticles) {
                this.setupParticles();
                this.setupThemeListener();
            }
        });
    }

    getThemeColors() {
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
    }

    getParticleConfig() {
        const colors = this.getThemeColors();
        
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
    }

    async setupParticles() {
        const config = this.getParticleConfig();
        
        // Load particles for main background
        this.particlesInstance = await tsParticles.load("tsparticles", config);
        
        // Load particles for services section
        if (document.getElementById('tsparticles-services')) {
            await tsParticles.load("tsparticles-services", config);
        }
        
        // Load particles for social section  
        if (document.getElementById('tsparticles-social')) {
            await tsParticles.load("tsparticles-social", config);
        }
    }

    async updateTheme() {
        const config = this.getParticleConfig();
        
        // Update main background
        if (this.particlesInstance) {
            await tsParticles.load("tsparticles", config);
        }
        
        // Update services section
        if (document.getElementById('tsparticles-services')) {
            await tsParticles.load("tsparticles-services", config);
        }
        
        // Update social section
        if (document.getElementById('tsparticles-social')) {
            await tsParticles.load("tsparticles-social", config);
        }
    }

    setupThemeListener() {
        // Listen for theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                    this.updateTheme();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });
    }
}

// Initialize the particle background
const particleBackground = new ParticleBackground();
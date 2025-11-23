import React, { useEffect } from 'react';

declare global {
  interface Window {
    tsParticles: any;
  }
}

const DynamicBackground: React.FC = () => {
  useEffect(() => {
    const loadParticles = async () => {
      if (!window.tsParticles) return;

      // Check for 'dark' class on html element or data-theme attribute
      const isDark = document.documentElement.classList.contains('dark') || 
                     document.documentElement.getAttribute('data-theme') === 'dark';
      
      // Theme colors based on provided specification
      const colors = isDark 
        ? {
            particles: "#00D4FF",
            links: "#00D4FF",
            particlesOpacity: 0.6,
            linksOpacity: 0.3
          }
        : {
            particles: "#2b6cb0",
            links: "#2b6cb0", 
            particlesOpacity: 0.4,
            linksOpacity: 0.2
          };

      const config = {
        fpsLimit: 60,
        fullScreen: { enable: false }, // We manage container styling manually
        background: {
            color: "transparent"
        },
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

      await window.tsParticles.load("tsparticles", config);
    };

    // Initial check loop in case script loads asynchronously
    const checkInterval = setInterval(() => {
        if (window.tsParticles) {
            loadParticles();
            clearInterval(checkInterval);
        }
    }, 100);

    // Theme listener
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && (mutation.attributeName === 'class' || mutation.attributeName === 'data-theme')) {
          loadParticles();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme']
    });

    return () => {
        clearInterval(checkInterval);
        observer.disconnect();
    };
  }, []);

  return (
    <div id="tsparticles" className="fixed inset-0 -z-10 pointer-events-none bg-transparent" />
  );
};

export default DynamicBackground;
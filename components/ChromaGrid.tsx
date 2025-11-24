import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

interface ChromaGridItem {
    image: string;
    title: string;
    subtitle: string;
    handle?: string;
    borderColor: string;
    gradient: string;
    url?: string;
    onClick?: () => void;
}

interface ChromaGridProps {
    items: ChromaGridItem[];
    radius?: number;
    damping?: number;
    fadeOut?: number;
    ease?: string;
}

const ChromaGrid: React.FC<ChromaGridProps> = ({
    items,
    radius = 300,
    damping = 0.45,
    fadeOut = 0.6,
    ease = 'power3.out'
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePos({ x, y });

            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                const cardRect = card.getBoundingClientRect();
                const cardCenterX = cardRect.left + cardRect.width / 2 - rect.left;
                const cardCenterY = cardRect.top + cardRect.height / 2 - rect.top;

                const distance = Math.sqrt(
                    Math.pow(x - cardCenterX, 2) + Math.pow(y - cardCenterY, 2)
                );

                const maxDistance = radius;
                const normalizedDistance = Math.min(distance / maxDistance, 1);

                // Calculate displacement
                const angle = Math.atan2(y - cardCenterY, x - cardCenterX);
                const force = (1 - normalizedDistance) * 50 * damping;
                const dx = Math.cos(angle) * force;
                const dy = Math.sin(angle) * force;

                // Calculate rotation
                const rotateX = ((y - cardCenterY) / maxDistance) * 15 * (1 - normalizedDistance);
                const rotateY = ((x - cardCenterX) / maxDistance) * -15 * (1 - normalizedDistance);

                // Calculate opacity
                const opacity = 1 - (normalizedDistance * fadeOut);

                gsap.to(card, {
                    x: dx,
                    y: dy,
                    rotateX: rotateX,
                    rotateY: rotateY,
                    opacity: Math.max(opacity, 0.3),
                    scale: 1 - (normalizedDistance * 0.1),
                    duration: 0.6,
                    ease: ease
                });
            });
        };

        const handleMouseLeave = () => {
            cardsRef.current.forEach((card) => {
                if (!card) return;
                gsap.to(card, {
                    x: 0,
                    y: 0,
                    rotateX: 0,
                    rotateY: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power2.out'
                });
            });
        };

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [radius, damping, fadeOut, ease]);

    const handleCardClick = (item: ChromaGridItem) => {
        if (item.onClick) {
            item.onClick();
        } else if (item.url) {
            window.open(item.url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full"
            style={{ perspective: '1000px' }}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
                {items.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => { cardsRef.current[index] = el; }}
                        onClick={() => handleCardClick(item)}
                        className="relative cursor-pointer group"
                        style={{
                            transformStyle: 'preserve-3d',
                            willChange: 'transform, opacity'
                        }}
                    >
                        <div
                            className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300"
                            style={{
                                background: item.gradient,
                                border: `2px solid ${item.borderColor}`,
                                boxShadow: `0 0 30px ${item.borderColor}40`
                            }}
                        >
                            {/* Image Section */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: `linear-gradient(180deg, transparent 0%, ${item.borderColor}80 100%)`
                                    }}
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-6 bg-gradient-to-b from-transparent to-black/60">
                                <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-200 mb-2 drop-shadow-md">
                                    {item.subtitle}
                                </p>
                                {item.handle && (
                                    <p className="text-xs font-mono text-gray-300 opacity-80">
                                        {item.handle}
                                    </p>
                                )}
                            </div>

                            {/* Chroma Border Effect */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{
                                    boxShadow: `inset 0 0 20px ${item.borderColor}80, 0 0 40px ${item.borderColor}60`
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChromaGrid;

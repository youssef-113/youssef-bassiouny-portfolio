import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface ImageGalleryModalProps {
    images: string[];
    isOpen: boolean;
    onClose: () => void;
    initialIndex?: number;
    projectTitle?: string;
}

const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({
    images,
    isOpen,
    onClose,
    initialIndex = 0,
    projectTitle = 'Gallery'
}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') handlePrevious();
            if (e.key === 'ArrowRight') handleNext();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
            onClick={onClose}
        >
            {/* Modal Content */}
            <div
                className={`relative ${isFullscreen ? 'w-full h-full' : 'w-11/12 h-5/6'} max-w-7xl flex flex-col`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-md rounded-t-2xl border-b border-gray-700">
                    <div>
                        <h3 className="text-xl font-bold text-white">{projectTitle}</h3>
                        <p className="text-sm text-gray-400">Image {currentIndex + 1} of {images.length}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleFullscreen}
                            className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300 text-gray-300 hover:text-white"
                            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                        >
                            <Maximize2 size={20} />
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300 text-gray-300 hover:text-white"
                            title="Close (Esc)"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Main Image Display */}
                <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950 p-8 relative overflow-hidden">
                    {/* Navigation Buttons */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={handlePrevious}
                                className="absolute left-4 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 text-white shadow-lg hover:scale-110"
                                title="Previous (←)"
                            >
                                <ChevronLeft size={28} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-4 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 text-white shadow-lg hover:scale-110"
                                title="Next (→)"
                            >
                                <ChevronRight size={28} />
                            </button>
                        </>
                    )}

                    {/* Image */}
                    <div className="w-full h-full flex items-center justify-center">
                        <img
                            src={images[currentIndex]}
                            alt={`${projectTitle} - Image ${currentIndex + 1}`}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-fade-in"
                            style={{ animationDuration: '0.3s' }}
                        />
                    </div>
                </div>

                {/* Thumbnail Strip */}
                {images.length > 1 && (
                    <div className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-md p-4 rounded-b-2xl border-t border-gray-700">
                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 border-2 ${currentIndex === idx
                                            ? 'border-blue-500 ring-2 ring-blue-400/50 scale-110'
                                            : 'border-transparent hover:border-gray-500 opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt={`Thumbnail ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Keyboard Hints */}
                <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-xs text-gray-300 pointer-events-none">
                    Use ← → arrow keys to navigate • ESC to close
                </div>
            </div>
        </div>
    );
};

export default ImageGalleryModal;

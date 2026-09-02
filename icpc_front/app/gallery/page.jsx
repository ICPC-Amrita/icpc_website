'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Lenis from 'lenis';

// Photos from /public/ICPC_Photos/ICPC_25/Day-1
const allPhotos = [
  { id: '1', url: '/ICPC_Photos/ICPC_25/Day-1/arena.jpg' },
  { id: '2', url: '/ICPC_Photos/ICPC_25/Day-1/first.jpg' },
  { id: '3', url: '/ICPC_Photos/ICPC_25/Day-1/second.jpg' },
  { id: '4', url: '/ICPC_Photos/ICPC_25/Day-1/third.jpg' },
  { id: '5', url: '/ICPC_Photos/ICPC_25/Day-1/Team photo .jpg' },
  { id: '6', url: '/ICPC_Photos/ICPC_25/Day-1/Women only team .jpg' },
  { id: '7', url: '/ICPC_Photos/ICPC_25/Day-1/IMG_2543.JPG' },
  { id: '8', url: '/ICPC_Photos/ICPC_25/Day-1/IMG_2545.JPG' },
  { id: '9', url: '/ICPC_Photos/ICPC_25/Day-1/IMG_2547.JPG' },
  { id: '10', url: '/ICPC_Photos/ICPC_25/Day-1/IMG_2549.JPG' },
  { id: '11', url: '/ICPC_Photos/ICPC_25/Day-1/IMG_2550.JPG' },
  { id: '12', url: '/ICPC_Photos/ICPC_25/Day-1/IMG_2552.JPG' },
  { id: '13', url: '/ICPC_Photos/ICPC_25/Day-1/IMG_2555.JPG' },
  { id: '14', url: '/ICPC_Photos/ICPC_25/Day-1/IMG_2557.JPG' },
  { id: '15', url: '/ICPC_Photos/ICPC_25/Day-1/IMG_2603.JPG' },
  { id: '16', url: '/ICPC_Photos/ICPC_25/Day-1/IMG_2783.JPG' },
  { id: '17', url: '/ICPC_Photos/ICPC_25/Day-1/Image 2.JPG' },
  { id: '18', url: '/ICPC_Photos/ICPC_25/Day-1/Image 3.JPG' },
  { id: '19', url: '/ICPC_Photos/ICPC_25/Day-1/Image 4.jpeg' },
  { id: '20', url: '/ICPC_Photos/ICPC_25/Day-1/Image 5.JPG' },
  { id: '21', url: '/ICPC_Photos/ICPC_25/Day-1/Image 6.jpeg' },
  { id: '22', url: '/ICPC_Photos/ICPC_25/Day-1/Image 7.JPG' },
  { id: '23', url: '/ICPC_Photos/ICPC_25/Day-1/Image 8.JPG' },
  { id: '24', url: '/ICPC_Photos/ICPC_25/Day-1/Image 9.png' },
  { id: '25', url: '/ICPC_Photos/ICPC_25/Day-1/Image 10.png' },
  { id: '26', url: '/ICPC_Photos/ICPC_25/Day-1/Image 11.png' },
  { id: '27', url: '/ICPC_Photos/ICPC_25/Day-1/Image 12.png' },
  { id: '28', url: '/ICPC_Photos/ICPC_25/Day-1/Image 13.JPG' },
  { id: '29', url: '/ICPC_Photos/ICPC_25/Day-1/Image 14.JPG' },
  { id: '30', url: '/ICPC_Photos/ICPC_25/Day-1/Image 15.JPG' },
  { id: '31', url: '/ICPC_Photos/ICPC_25/Day-1/Image 16.jpg' },
  { id: '32', url: '/ICPC_Photos/ICPC_25/Day-1/Image 17.JPG' },
  { id: '33', url: '/ICPC_Photos/ICPC_25/Day-1/Image 18.JPG' },
  { id: '34', url: '/ICPC_Photos/ICPC_25/Day-1/Image 19.jpeg' },
  { id: '35', url: '/ICPC_Photos/ICPC_25/Day-1/Image 20.jpg' },
  { id: '36', url: '/ICPC_Photos/ICPC_25/Day-1/Image 21.JPG' },
];

// -------------------------------------------------------------
// INTRO — Full-screen hero image with parallax scroll-away
// -------------------------------------------------------------
function Intro() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <div ref={container} className="h-screen overflow-hidden relative bg-neutral-900">
      {/* Parallax Image Container */}
      <motion.div style={{ y: yImage }} className="relative w-full h-[125%] -top-[5%]">
        <Image
          src="/ICPC_Photos/ICPC_25/Day-1/arena.jpg"
          fill
          alt="ICPC Gallery Hero"
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Title Overlay with upward parallax & fade out */}
      <motion.div
        style={{ y: yText, opacity }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-4"
      >
        <p className="text-5xl sm:text-7xl lg:text-8xl  tracking-tight text-white uppercase text-center drop-shadow-2xl">
          Gallery
        </p>
        <p className="mt-4 text-2xl sm:text-xl text-white tracking-wide text-center drop-shadow-lg">
          ICPC 2025 Regional Contest | Day 1
        </p>
      </motion.div>

      {/* Subtle bottom shadow overlay */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />
    </div>
  );
}

// -------------------------------------------------------------
// SECTION — Background parallax with title text (Smooth, non-blocking)
// -------------------------------------------------------------
function ParallaxSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden bg-neutral-950"
    >
      {/* Parallax Background Image */}
      <div className="absolute -top-[20%] left-0 h-[140%] w-full pointer-events-none">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src="/ICPC_Photos/ICPC_25/Day-1/Team photo .jpg"
            fill
            alt="ICPC Team"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </div>

      {/* Overlay Text Content */}
      <div className="relative z-10 p-10 sm:p-20 text-white w-full h-full flex flex-col justify-between pointer-events-none">
        <p className="w-full sm:w-[50vw] text-base sm:text-[2vw] self-end uppercase leading-relaxed text-white/85 drop-shadow-lg">
          Capturing the spirit of competitive programming : teamwork, intensity, and the pursuit of excellence at ICPC 2025.
        </p>
        <p className="text-4xl sm:text-[5vw] uppercase tracking-tight text-white drop-shadow-2xl ">
          Event Highlights
        </p>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// MAIN GALLERY PAGE
// -------------------------------------------------------------
export default function GalleryPage() {
  const [activeItem, setActiveItem] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const [dragConstraints, setDragConstraints] = useState(0);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const openModal = (photo, idx) => {
    setActiveIndex(idx);
    setActiveItem(photo);
  };

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    const nextIdx = (activeIndex - 1 + allPhotos.length) % allPhotos.length;
    setActiveIndex(nextIdx);
    setActiveItem(allPhotos[nextIdx]);
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    const nextIdx = (activeIndex + 1) % allPhotos.length;
    setActiveIndex(nextIdx);
    setActiveItem(allPhotos[nextIdx]);
  };

  useEffect(() => {
    if (activeItem) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const handleKeyDown = (e) => {
      if (!activeItem) return;
      if (e.key === 'Escape') setActiveItem(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, activeIndex]);

  useEffect(() => {
    if (activeItem && carouselRef.current) {
      const element = carouselRef.current;
      const viewportHeight = element.offsetHeight;
      const scrollHeight = element.scrollHeight;
      setDragConstraints(viewportHeight - scrollHeight);
    }
  }, [activeItem, carouselRef]);

  return (
    <div className="w-full bg-white min-h-screen">
      {/* 1. Intro — Full-screen hero with parallax scroll-away */}
      <Intro />

      {/* 2. Parallax Section — Background parallax with text overlay */}
      <ParallaxSection />

      {/* 3. Masonry Photo Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {allPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              layoutId={`img-container-${photo.id}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: (index % 4) * 0.04 }}
              onClick={() => openModal(photo, index)}
              className="group relative break-inside-avoid overflow-hidden rounded-none bg-neutral-100 border border-neutral-200 cursor-pointer shadow-xs hover:shadow-md transition-all duration-200"
            >
              <div className="relative w-full overflow-hidden">
                <Image
                  src={photo.url}
                  alt="ICPC Photo"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. LIGHTBOX SLIDER MODAL */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              aria-label="Close"
              className="absolute top-4 right-4 z-50 p-3 rounded-none bg-neutral-900/80 text-white border border-neutral-700 hover:bg-neutral-800 transition-colors"
            >
              <X className="size-5" />
            </button>

            {/* Modal Content */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl h-[85vh] flex flex-col md:flex-row items-center gap-4"
            >
              {/* Main Image Stage */}
              <div className="relative flex-1 w-full h-full flex items-center justify-center bg-neutral-950/70 rounded-none border border-neutral-800 p-2 sm:p-6 overflow-hidden">

                {/* Navigation Buttons */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 size-11 rounded-none bg-black/60 text-white border border-white/10 flex items-center justify-center hover:bg-black/80 active:scale-95 transition-all"
                >
                  <ChevronLeft className="size-6" />
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Next"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 size-11 rounded-none bg-black/60 text-white border border-white/10 flex items-center justify-center hover:bg-black/80 active:scale-95 transition-all"
                >
                  <ChevronRight className="size-6" />
                </button>

                {/* Main Preview Image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <div className="relative w-full h-[75vh] flex items-center justify-center">
                      <Image
                        src={activeItem.url}
                        alt="ICPC Photo"
                        fill
                        className="object-contain rounded-none"
                        priority
                        sizes="(max-width: 1200px) 100vw, 80vw"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Draggable Vertical Thumbnail Strip */}
              <div
                ref={carouselRef}
                className="hidden md:flex flex-col w-32 h-full bg-neutral-900/70 rounded-none border border-neutral-800 p-2 overflow-hidden"
              >
                <motion.div
                  drag="y"
                  dragConstraints={{ top: dragConstraints, bottom: 0 }}
                  dragElastic={0.2}
                  dragTransition={{ bounceDamping: 30 }}
                  className="flex flex-col gap-2 cursor-grab active:cursor-grabbing"
                >
                  {allPhotos.map((thumb, idx) => {
                    const isCurrent = thumb.id === activeItem.id;
                    return (
                      <div
                        key={thumb.id}
                        onClick={() => {
                          setActiveIndex(idx);
                          setActiveItem(thumb);
                        }}
                        className={`relative rounded-none overflow-hidden shrink-0 h-20 border-2 cursor-pointer transition-all ${
                          isCurrent
                            ? 'border-blue-500 opacity-100'
                            : 'border-transparent opacity-50 hover:opacity-90'
                        }`}
                      >
                        <Image
                          src={thumb.url}
                          alt="thumb"
                          fill
                          className="object-cover pointer-events-none"
                          sizes="130px"
                        />
                      </div>
                    );
                  })}
                </motion.div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import React, { useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carouselImage from "../assets/carousel image5.png"
/**
 * "Fitur Rumah" (House Features) carousel section — Tailwind version.
 *
 * - Infinite loop: images repeat forever in both directions. Clones of
 *   the first/last items are appended/prepended to the track; once the
 *   smooth-scroll animation for a click fully finishes, we check if we
 *   landed on a clone and, if so, silently re-point the scroll position
 *   to the matching real slide. Because clone and real slide are pixel
 *   identical, this re-point is invisible — it never looks like a snap.
 * - Responsive: 1 card on small screens, 2 on medium, 4 on large+.
 * - Hover overlay: every card shows title/subtitle/price/CTA on hover
 *   (or focus, for keyboard users).
 *
 * Requires: tailwindcss, lucide-react (npm install lucide-react)
 */

const DEFAULT_ITEMS = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=1200&auto=format&fit=crop",
    title: "Ruang Tamu",
    subtitle: "Rumah minimalist Type-A1",
    price: "IDR.150jt",
    cta: "Lihat Rumah",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
    title: "Kamar Tidur",
    subtitle: "Rumah minimalist Type-A2",
    price: "IDR.200jt",
    cta: "Lihat Rumah",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
    title: "Dapur",
    subtitle: "Rumah minimalist Type-A3",
    price: "IDR.180jt",
    cta: "Lihat Rumah",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    title: "Ruang Keluarga",
    subtitle: "Rumah minimalist Type-A4",
    price: "IDR.220jt",
    cta: "Lihat Rumah",
  },
  {
    id: 5,
    image: carouselImage
      ,
    title: "Kamar Mandi",
    subtitle: "Rumah minimalist Type-A5",
    price: "IDR.130jt",
    cta: "Lihat Rumah",
  },
];

// Cards visible at once on the widest breakpoint (lg = 4-per-view).
// We need at least this many clones on each side so there's always a
// full screen of "real-looking" cards to show while mid-wrap.
const CLONE_COUNT = 4;

export default function FiturRumah({ items = DEFAULT_ITEMS, onViewAll, onViewHouse }) {
  const trackRef = useRef(null);
  const isAnimatingRef = useRef(false); // true while a click-triggered smooth scroll is in flight

  const headClones = items.slice(-CLONE_COUNT).map((it) => ({ ...it, _key: `head-${it.id}` }));
  const tailClones = items.slice(0, CLONE_COUNT).map((it) => ({ ...it, _key: `tail-${it.id}` }));
  const realSlides = items.map((it) => ({ ...it, _key: `real-${it.id}` }));
  const slides = [...headClones, ...realSlides, ...tailClones];

  const realStartIndex = CLONE_COUNT;
  const realEndIndex = CLONE_COUNT + items.length - 1;

  const getCardWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const firstCard = track.querySelector("[data-card]");
    if (!firstCard) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0");
    return firstCard.getBoundingClientRect().width + gap;
  }, []);

  // Position the track on the first real slide before the browser paints,
  // so the user never sees the head clones on initial load.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = getCardWidth();
    if (cardWidth) {
      track.style.scrollBehavior = "auto";
      track.scrollLeft = cardWidth * realStartIndex;
      track.style.scrollBehavior = "";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-point to the matching real slide if we ended up on a clone.
  // Called only once a click's smooth-scroll animation has fully settled,
  // so this never interrupts or fights an in-progress animation.
  const resolveIfOnClone = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = getCardWidth();
    if (!cardWidth) return;

    const index = Math.round(track.scrollLeft / cardWidth);

    if (index < realStartIndex) {
      const distanceFromHeadStart = index;
      const targetIndex = realEndIndex - (CLONE_COUNT - 1 - distanceFromHeadStart);
      track.style.scrollBehavior = "auto";
      track.scrollLeft = cardWidth * targetIndex;
      track.style.scrollBehavior = "";
    } else if (index > realEndIndex) {
      const distanceFromTailStart = index - (realEndIndex + 1);
      const targetIndex = realStartIndex + distanceFromTailStart;
      track.style.scrollBehavior = "auto";
      track.scrollLeft = cardWidth * targetIndex;
      track.style.scrollBehavior = "";
    }
  }, [getCardWidth, realStartIndex, realEndIndex]);

  // Detect when a smooth-scroll (triggered by an arrow click) has
  // finished, by waiting for scroll events to stop firing.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let settleTimer;
    const onScroll = () => {
      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        if (isAnimatingRef.current) {
          isAnimatingRef.current = false;
          resolveIfOnClone();
        }
      }, 100);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      clearTimeout(settleTimer);
    };
  }, [resolveIfOnClone]);

  const scrollByPage = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    isAnimatingRef.current = true;
    track.scrollBy({ left: dir * track.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="bg-emerald-50 px-4 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 font-sans">
      {/* header */}
      <div className="flex items-center justify-between mb-6 sm:mb-7">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-700 tracking-tight">
          Fitur Rumah
        </h2>
        <button
          type="button"
          onClick={onViewAll}
          className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg bg-emerald-600 px-3.5 py-2.5 sm:px-5 sm:py-3.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-emerald-700 whitespace-nowrap"
        >
          Lihat Semua..
          <ChevronRight size={16} />
        </button>
      </div>

      {/* carousel */}
      <div className="relative">
        <button
          type="button"
          aria-label="Sebelumnya"
          onClick={() => scrollByPage(-1)}
          className="absolute left-0 sm:-left-4 lg:-left-5 top-1/2 z-10 flex h-9 w-9 sm:h-11 sm:w-11 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md transition-transform hover:scale-105 hover:bg-emerald-700"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={trackRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((item) => (
            <div
              data-card
              key={item._key}
              className="
                group relative shrink-0 overflow-hidden rounded-lg bg-gray-200
                h-[280px] sm:h-[360px] lg:h-[420px]
                w-full
                sm:w-[calc((100%-1rem)/2)]
                lg:w-[calc((100%-3*1rem)/4)]
              "
              style={{ scrollSnapAlign: "start" }}
              tabIndex={0}
            >
              <img
                src={item.image}
                alt={item.title || "Fitur rumah"}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                draggable={false}
              />

              {/* hover/focus overlay — present on every card, hidden until interaction */}
              <div
                className="
                  absolute inset-0 flex flex-col items-center justify-end
                  bg-gradient-to-b from-transparent via-black/50 to-black/75
                  px-4 pb-6 text-center text-white
                  opacity-0 transition-opacity duration-300
                  group-hover:opacity-100 group-focus-within:opacity-100
                "
              >
                <h3 className="mb-1 text-lg sm:text-xl lg:text-2xl font-bold">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="mb-0.5 text-xs opacity-90">{item.subtitle}</p>
                )}
                {item.price && (
                  <p className="mb-3 text-base sm:text-lg font-semibold">{item.price}</p>
                )}
                {item.cta && (
                  <button
                    type="button"
                    onClick={() => onViewHouse?.(item)}
                    className="rounded-md bg-emerald-600 px-5 py-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                  >
                    {item.cta}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Selanjutnya"
          onClick={() => scrollByPage(1)}
          className="absolute right-0 sm:-right-4 lg:-right-5 top-1/2 z-10 flex h-9 w-9 sm:h-11 sm:w-11 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md transition-transform hover:scale-105 hover:bg-emerald-700"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
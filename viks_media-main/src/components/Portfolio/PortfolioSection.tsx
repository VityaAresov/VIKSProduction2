import React, {useState, useEffect} from 'react';
import styles from './PortfolioSection.module.css';
import PortfolioCard from './PortfolioCard';


import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import type SwiperCore from 'swiper';


import 'swiper/css';

// SVG Arrow Icons
const ArrowLeftIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 12H5M12 5L5 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ArrowRightIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

interface PortfolioItem {
    id: string;
    category: string;
    imageUrl: string;
    title: string;
    description: string;
    clientInfo: string | null;
    detailsLink: string;
}

const portfolioItems: PortfolioItem[] = [
    {
        id: 'item1',
        category: 'webdev',
        imageUrl: '/images/blog_image.png',
        title: "3WH Boosts OzParty's Bucks Bookings by 36%",
        description: "A series of landing page redesigns...",
        clientInfo: null,
        detailsLink: '#'
    },
    {
        id: 'item6',
        category: 'video',
        imageUrl: '/images/blog_image.png',
        title: "3WH Boosts OzParty's Bucks Bookings by 36%",
        description: "A series of landing page redesigns...",
        clientInfo: null,
        detailsLink: '#'
    },
    {
        id: 'item2',
        category: 'marketing',
        imageUrl: '/images/blog_image.png',
        title: "3WH's Successful Google Analytics 4 Implementation for Convertr",
        description: "3WH's Google Analytics 4 rollout...",
        clientInfo: "Convertr. 2023",
        detailsLink: '#'
    },
    {
        id: 'item3',
        category: 'branding',
        imageUrl: '/images/blog_image.png',
        title: "The Lead Management Operating System",
        description: "A comprehensive system designed...",
        clientInfo: "Lead OS Inc. 2024",
        detailsLink: '#'
    },
    {
        id: 'item4',
        category: 'webdev',
        imageUrl: '/images/blog_image.png',
        title: "Another UI/UX Project Showcase",
        description: "Leveraging modern design principles...",
        clientInfo: "AppDev Co. 2023",
        detailsLink: '#'
    },
    {
        id: 'item5',
        category: 'webdev',
        imageUrl: '/images/blog_image.png',
        title: "Third UI/UX Example Card",
        description: "Focusing on user experience flow...",
        clientInfo: "UX Masters. 2024",
        detailsLink: '#'
    },

];

const uniqueCats = Array.from(
  new Set(portfolioItems.map(i => i.category))
);

// 3) И только после этого строим фильтры на их основе
const filters = [
  { 
    id: 'all', 
    label: 'All Work', 
    count: portfolioItems.length 
  },
  ...uniqueCats.map(cat => ({
    id: cat,
    label: {
      video:      'Videography',
      marketing: 'Digital Marketing',
      branding:  'Branding',
      webdev:    'Web Development'
    }[cat] ?? cat,
    count: portfolioItems.filter(i => i.category === cat).length
  }))
];


const PortfolioSection: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

    const [slidesPerViewValue, setSlidesPerViewValue] = useState<number>(1);

    const filteredItems = activeFilter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter);


    useEffect(() => {

        if (swiperInstance?.params?.slidesPerView) {
            const currentSlidesPerView = swiperInstance.params.slidesPerView;

            const numValue = typeof currentSlidesPerView === 'number'
                ? currentSlidesPerView
                : 1;
            setSlidesPerViewValue(numValue);
        } else if (!swiperInstance) {

            setSlidesPerViewValue(1);
        }


    }, [swiperInstance]);


    const handlePrev = () => {
        swiperInstance?.slidePrev();
    };

    const handleNext = () => {
        swiperInstance?.slideNext();
    };

    return (
        <section className={styles.portfolioSection}>
            <div className={styles.container}>

                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Real-world examples of how we have helped companies achieve their marketing objectives.
                    </h2>
                    <div className={styles.filters}>
                        {filters.map(filter => (
                            <button
                                key={filter.id}
                                className={`${styles.filterButton} ${activeFilter === filter.id ? styles.active : ''}`}
                                onClick={() => setActiveFilter(filter.id)}
                            >
                                {filter.label} [{filter.count}]
                            </button>
                        ))}
                    </div>
                </div>


                <div className={styles.sliderArea}>
                    {filteredItems.length > 0 ? (
                        <Swiper
                            onSwiper={setSwiperInstance}
                            modules={[Navigation, Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={filteredItems.length > 1}
                            className={styles.swiperInstance}
                            breakpoints={{

                                769: {
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                },
                            }}
                        >
                            {filteredItems.map(item => (
                                <SwiperSlide key={item.id} className={styles.swiperSlide}>
                                    <PortfolioCard item={item}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <p className={styles.noItemsMessage}>
                            Нет работ для отображения в этой категории.
                        </p>
                    )}


                    {filteredItems.length > slidesPerViewValue && (
                        <div className={styles.customNavigation}>
                            <button
                                className={`${styles.navButton} ${styles.navButtonPrev}`}
                                onClick={handlePrev}
                                aria-label="Previous work"
                            >
                                <ArrowLeftIcon />
                            </button>
                            <button
                                className={`${styles.navButton} ${styles.navButtonNext}`}
                                onClick={handleNext}
                                aria-label="Next work"
                            >
                                <ArrowRightIcon />
                            </button>
                        </div>
                    )}

                </div>

            </div>
        </section>
    );
};

export default PortfolioSection;

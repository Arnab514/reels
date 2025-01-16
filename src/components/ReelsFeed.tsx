
import React from 'react';
import VideoReel from './VideoReel';
import { useIsMobile } from '@/hooks/use-mobile';
import { GradientBackground } from './GradientBackground';
import Header  from './Header';

// Placeholder data
const reelsData = [
  {
    id: '1',
    videoUrl: '/video 4.mp4',  // Path relative to public folder
    productInfo: {
      id: 'prod1',
      name: 'Urban Street Jacket',
      price: 129.99,
      description: 'Premium street-style jacket perfect for any casual occasion.',
    },
  },
  {
    id: '2',
    videoUrl: '/video 2.mp4',  // Using same video for demo
    productInfo: {
      id: 'prod2',
      name: 'Designer Denim Collection',
      price: 89.99,
      description: 'High-quality denim with modern cuts and premium finish.',
    },
  },
  {
    id: '3',
    videoUrl: '/video 3.mp4',  // Using same video for demo
    productInfo: {
      id: 'prod3',
      name: 'Winter Collection Coat',
      price: 199.99,
      description: 'Warm and stylish winter coat with premium materials.',
    },
  },
  {
    id: '4',
    videoUrl: '/video 5.mp4',  // Using same video for demo
    productInfo: {
      id: 'prod3',
      name: 'Winter Collection Coat',
      price: 199.99,
      description: 'Warm and stylish winter coat with premium materials.',
    },
  },
  {
    id: '3',
    videoUrl: '/video 6.mp4',  // Using same video for demo
    productInfo: {
      id: 'prod3',
      name: 'Winter Collection Coat',
      price: 199.99,
      description: 'Warm and stylish winter coat with premium materials.',
    },
  },
];

const ReelsFeed = () => {
  const isMobile = useIsMobile();
  
  // Create an infinite array by repeating the reelsData
  const infiniteReels = [...reelsData, ...reelsData, ...reelsData];

  return (
    <div className="h-screen overflow-hidden relative">
      <GradientBackground />
      
      {/* Modern Header - Hidden on Mobile */}
      {!isMobile && <Header />}

      {/* Reels Feed */}
      <div className={`h-full ${!isMobile ? 'pt-24 pb-4 w-full mx-auto' : ''}`}>
        <div className="h-full snap-y snap-mandatory overflow-y-auto no-scrollbar">
          {infiniteReels.map((reel, index) => (
            <div 
              key={`${reel.id}-${index}`}
              className={`snap-start ${isMobile ? 'h-screen' : 'h-[calc(100vh-6.5rem)]'}`}
            >
              <div className={`h-full ${!isMobile && 'max-w-[400px] mx-auto px-4 pb-4'}`}>
                <VideoReel 
                  videoUrl={reel.videoUrl} 
                  productInfo={reel.productInfo} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReelsFeed;



// const styles = `
//   .hide-scrollbar::-webkit-scrollbar {
//     display: none;
//   }
  
//   .hide-scrollbar {
//     -ms-overflow-style: none;
//     scrollbar-width: none;
//   }
// `;
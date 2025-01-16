// import React, { useRef, useEffect, useState } from 'react';
// import { useInView } from 'react-intersection-observer';
// import { Heart, Share2, Volume2, VolumeX, ShoppingBag, Play, Pause } from 'lucide-react';
// import { cn } from "@/lib/utils";
// import { useIsMobile } from '@/hooks/use-mobile';

// interface VideoReelProps {
//   videoUrl: string;
//   thumbnailUrl?: string;
//   title?: string;
//   productInfo: {
//     id: string;
//     name: string;
//     price: number;
//     description: string;
//   };
// }

// const VideoReel: React.FC<VideoReelProps> = ({ videoUrl, thumbnailUrl, title, productInfo }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);
//   const [showProduct, setShowProduct] = useState(false);
//   const [isLiked, setIsLiked] = useState(false);
//   const [progress, setProgress] = useState(0);
  
//   const { ref: inViewRef, inView } = useInView({
//     threshold: 0.5,
//   });

//   const isMobile = useIsMobile();

//   useEffect(() => {
//     if (videoRef.current) {
//       if (inView) {
//         videoRef.current.play().catch(() => {
//           console.log("Autoplay failed");
//         });
//         setIsPlaying(true);
//       } else {
//         videoRef.current.pause();
//         setIsPlaying(false);
//       }
//     }
//   }, [inView]);

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play().catch(() => {
//           console.log("Play failed");
//         });
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const toggleMute = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   const toggleLike = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     setIsLiked(!isLiked);
//   };

//   const shareVideo = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     console.log('Sharing video...');
//   };

//   const handleTimeUpdate = () => {
//     if (videoRef.current) {
//       const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
//       setProgress(progress);
//     }
//   };

//   return (
//     <div 
//       ref={inViewRef}
//       className={`relative w-full h-full ${!isMobile && 'max-w-3xl mx-auto'} overflow-hidden bg-black ${!isMobile && 'rounded-2xl shadow-xl'}`}
//     >
//       <div className="video-wrapper relative flex justify-center items-center h-full">
//         <video
//           ref={videoRef}
//           src={videoUrl}
//           className={`w-full h-full object-cover ${!isMobile && 'rounded-2xl'}`}
//           loop
//           muted={isMuted}
//           playsInline
//           onClick={togglePlay}
//           onTimeUpdate={handleTimeUpdate}
//         />
        
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
//           {!isPlaying ? (
//             <Play
//               className="absolute top-4 left-4 w-6 h-6 text-white cursor-pointer"
//               onClick={togglePlay}
//             />
//           ) : (
//             <Pause
//               className="absolute top-4 left-4 w-6 h-6 text-white cursor-pointer"
//               onClick={togglePlay}
//             />
//           )}
          
//           <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6">
//             <button
//               onClick={toggleLike}
//               className={cn(
//                 "p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors",
//                 isLiked && "text-red-500"
//               )}
//             >
//               <Heart className={cn("w-6 h-6", isLiked ? "fill-current" : "text-white")} />
//             </button>
            
//             <button
//               onClick={shareVideo}
//               className="p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors"
//             >
//               <Share2 className="w-6 h-6 text-white" />
//             </button>
            
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setShowProduct(!showProduct);
//               }}
//               className="p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors"
//             >
//               <ShoppingBag className="w-6 h-6 text-white" />
//             </button>
            
//             <button
//               onClick={toggleMute}
//               className="p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors"
//             >
//               {isMuted ? (
//                 <VolumeX className="w-6 h-6 text-white" />
//               ) : (
//                 <Volume2 className="w-6 h-6 text-white" />
//               )}
//             </button>
//           </div>
          
//           <div className="absolute bottom-0 left-0 right-0">
//             {title && (
//               <p className="text-white px-4 py-2">{title}</p>
//             )}
//             <div className="w-full bg-gray-200/20 h-1">
//               <div
//                 className="bg-red-500 h-full transition-all duration-100"
//                 style={{ width: `${progress}%` }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {showProduct && (
//         <div 
//           className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-md animate-slide-up rounded-t-3xl"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="max-w-lg mx-auto">
//             <h3 className="text-xl font-semibold mb-2">{productInfo.name}</h3>
//             <p className="text-lg font-medium mb-2">${productInfo.price}</p>
//             <p className="text-gray-600 mb-4">{productInfo.description}</p>
//             <button 
//               onClick={() => window.location.href = `/product/${productInfo.id}`}
//               className="w-full py-3 px-6 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition-colors"
//             >
//               View Product
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideoReel;




import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Heart, Share2, Volume2, VolumeX, ShoppingBag, Play, Pause } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useIsMobile } from '@/hooks/use-mobile';

interface VideoReelProps {
  videoUrl: string;
  thumbnailUrl?: string;
  title?: string;
  productInfo: {
    id: string;
    name: string;
    price: number;
    description: string;
  };
}

const VideoReel: React.FC<VideoReelProps> = ({ videoUrl, thumbnailUrl, title, productInfo }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showProduct, setShowProduct] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.7,
    rootMargin: '-10% 0px',
  });

  const isMobile = useIsMobile();

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleLoadedData = () => {
        setIsVideoLoaded(true);
        if (inView) {
          attemptPlay();
        }
      };

      video.addEventListener('loadeddata', handleLoadedData);
      return () => video.removeEventListener('loadeddata', handleLoadedData);
    }
  }, []);

  useEffect(() => {
    if (videoRef.current && isVideoLoaded) {
      if (inView) {
        attemptPlay();
      } else {
        pauseVideo();
      }
    }
  }, [inView, isVideoLoaded]);

  const attemptPlay = async () => {
    if (videoRef.current) {
      try {
        videoRef.current.muted = true;
        setIsMuted(true);
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Playback failed:", error);
        setIsPlaying(false);
      }
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMainClick = (e: React.MouseEvent) => {
    // Check if the click is on a button or its children
    const target = e.target as HTMLElement;
    if (target.closest('button')) {
      return;
    }
    
    // Toggle play/pause
    if (isPlaying) {
      pauseVideo();
    } else {
      attemptPlay();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const shareVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Sharing video...');
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  return (
    <div 
      ref={inViewRef}
      className="relative w-full h-full overflow-hidden lg:rounded-xl md:rounded-xl bg-black"
      onClick={handleMainClick}
    >
      <div className="relative flex justify-center items-center h-full w-full">
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full object-cover"
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          {!isPlaying && (
            <Play
              className="absolute top-4 left-4 w-6 h-6 text-white cursor-pointer"
            />
          )}
          
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6">
            <button
              onClick={toggleLike}
              className={cn(
                "p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors",
                isLiked && "text-red-500"
              )}
            >
              <Heart className={cn("w-6 h-6", isLiked ? "fill-current" : "text-white")} />
            </button>
            
            <button
              onClick={shareVideo}
              className="p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors"
            >
              <Share2 className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowProduct(!showProduct);
              }}
              className="p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors"
            >
              <ShoppingBag className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={toggleMute}
              className="p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6 text-white" />
              ) : (
                <Volume2 className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0">
            {title && (
              <p className="text-white px-4 py-2">{title}</p>
            )}
            <div className="w-full bg-gray-200/20 h-1">
              <div
                className="bg-red-500 h-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {showProduct && (
        <div 
          className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-md animate-slide-up rounded-t-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-lg mx-auto">
            <h3 className="text-xl font-semibold mb-2">{productInfo.name}</h3>
            <p className="text-lg font-medium mb-2">${productInfo.price}</p>
            <p className="text-gray-600 mb-4">{productInfo.description}</p>
            <button 
              onClick={() => window.location.href = `/product/${productInfo.id}`}
              className="w-full py-3 px-6 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition-colors"
            >
              View Product
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoReel;
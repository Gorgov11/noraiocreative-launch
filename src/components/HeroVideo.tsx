import { useRef, useEffect } from 'react';

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video is muted for autoplay
      video.muted = true;
      video.loop = true;
      video.play().catch(console.error);
    }
  }, []);

  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        playsInline
        muted
        loop
        autoPlay
      >
        <source src="/Noraio website 1110.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-blue-500"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-blue-500"></div>
    </div>
  );
};

export default HeroVideo;

"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

interface VideoPlayerProps {
  url: string;
  onEnded?: () => void;
  onProgress?: (progress: { played: number; playedSeconds: number }) => void;
}

export default function VideoPlayer({ url, onEnded, onProgress }: VideoPlayerProps) {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  if (!hasWindow) return (
    <div className="aspect-video w-full bg-zinc-900 animate-pulse rounded-2xl flex items-center justify-center">
       <div className="text-zinc-700 font-bold tracking-tighter text-3xl italic">DhanPulse LMS</div>
    </div>
  );

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls={true}
        playing={false}
        onEnded={onEnded}
        onProgress={onProgress}
        config={{
          youtube: {
            playerVars: { showinfo: 1 }
          }
        }}
      />
    </div>
  );
}

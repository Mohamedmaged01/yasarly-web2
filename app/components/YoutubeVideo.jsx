import { useRef, useState } from "react";
import Youtube from "react-youtube";
import { Button } from "@mui/material";

const YoutubeVideo = ({ videoId, onPause, playerRef, watermarkText }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);

  const handleReady = (event) => {
    playerRef.current = event.target;
  };

  const handlePlay = () => {
    playerRef.current?.playVideo();
  };

  const handlePause = () => {
    playerRef.current?.pauseVideo();
  };

  const handleSeekForward = (seconds) => {
    if (playerRef.current) {
      const newTime = (playerRef.current.getCurrentTime() || 0) + seconds;
      playerRef.current.seekTo(newTime, true);
    }
  };

  const handleSeekBackward = (seconds) => {
    if (playerRef.current) {
      const newTime = (playerRef.current.getCurrentTime() || 0) - seconds;
      playerRef.current.seekTo(newTime, true);
    }
  };

  const handleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  const handleOverlayClick = () => {
    handlePlay();
  };

  const handlePlaybackRateChange = (rate) => {
    if (playerRef.current) {
      playerRef.current.setPlaybackRate(rate);
      setPlaybackRate(rate);
    }
  };

  const buttonVariant = isFullscreen
    ? "bg-gray-800 text-white"
    : "bg-gray-300 text-black";

  return (
    <div
      className={
        isFullscreen
          ? "fixed z-50 top-0 left-0 w-screen h-screen flex flex-col gap-2"
          : ""
      }
    >
      <div className="relative w-full h-full">
        {watermarkText && (
          <div
            className={
              isFullscreen
                ? "absolute top-1/2 right-8 transform -translate-y-1/2 z-20 pointer-events-none select-none text-white text-lg font-bold opacity-60 bg-black bg-opacity-30 px-4 py-1 rounded"
                : "absolute top-2 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none select-none text-white text-lg font-bold opacity-60 bg-black bg-opacity-30 px-4 py-1 rounded"
            }
            style={isFullscreen
              ? { maxWidth: '40%', textAlign: 'right' }
              : { maxWidth: '90%', textAlign: 'center' }}
          >
            {watermarkText}
          </div>
        )}
        <div
          className="absolute top-0 left-0 w-full h-full bg-transparent z-10"
          onClick={handleOverlayClick}
        ></div>
        <Youtube
          videoId={videoId}
          onReady={handleReady}
          opts={{
            width: "100%",
            height: isFullscreen ? `${window.innerHeight}px` : "300px",
          }}
        />
      </div>
      <div
        className={`flex items-center gap-2 mb-[100px] ${
          isFullscreen
            ? "fixed left-1/2 bottom-4 transform -translate-x-1/2 z-50"
            : ""
        }`}
      >
        {isFullscreen ? (
          <>
            <Button
              className={`${buttonVariant} p-2 rounded`}
              onClick={() => handleSeekForward(10)}
            >
              Forward 10s
            </Button>
            <Button
              className={`${buttonVariant} p-2 rounded`}
              onClick={() => handleSeekBackward(10)}
            >
              Backward 10s
            </Button>
            <Button
              className={`${buttonVariant} p-2 rounded`}
              onClick={handlePlay}
            >
              Play
            </Button>
            <Button
              className={`${buttonVariant} p-2 rounded`}
              onClick={() => onPause(playerRef.current)}
            >
              Pause
            </Button>
            <Button
              className={`${buttonVariant} p-2 rounded`}
              onClick={handleFullscreen}
            >
              Exit Fullscreen
            </Button>
            <div className="flex gap-2">
              <Button
                className={`${buttonVariant} p-2 rounded`}
                onClick={() => handlePlaybackRateChange(1)}
              >
                1x
              </Button>
              <Button
                className={`${buttonVariant} p-2 rounded`}
                onClick={() => handlePlaybackRateChange(1.5)}
              >
                1.5x
              </Button>
              <Button
                className={`${buttonVariant} p-2 rounded`}
                onClick={() => handlePlaybackRateChange(1.75)}
              >
                1.75x
              </Button>
              <Button
                className={`${buttonVariant} p-2 rounded`}
                onClick={() => handlePlaybackRateChange(2)}
              >
                2x
              </Button>
            </div>
          </>
        ) : (
          <>
            <Button
              className={`${buttonVariant} p-2 rounded`}
              onClick={() => handleSeekForward(10)}
            >
              Forward 10s
            </Button>
            <Button
              className={`${buttonVariant} p-2 rounded`}
              onClick={() => handleSeekBackward(10)}
            >
              Backward 10s
            </Button>
            <Button
              className={`${buttonVariant} p-2 rounded`}
              onClick={handlePlay}
            >
              Play
            </Button>
            <Button
              className={`${buttonVariant} p-2 rounded`}
              onClick={() => onPause(playerRef.current)}
            >
              Pause
            </Button>
            <Button
              className={`${buttonVariant} p-2 rounded`}
              onClick={handleFullscreen}
            >
              Fullscreen
            </Button>
            <div className="flex gap-2">
              <Button
                className={`${buttonVariant} p-2 rounded`}
                onClick={() => handlePlaybackRateChange(1)}
              >
                1x
              </Button>
              <Button
                className={`${buttonVariant} p-2 rounded`}
                onClick={() => handlePlaybackRateChange(1.5)}
              >
                1.5x
              </Button>
              <Button
                className={`${buttonVariant} p-2 rounded`}
                onClick={() => handlePlaybackRateChange(1.75)}
              >
                1.75x
              </Button>
              <Button
                className={`${buttonVariant} p-2 rounded`}
                onClick={() => handlePlaybackRateChange(2)}
              >
                2x
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default YoutubeVideo;

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

const birthdaMessage = [
  "Happy Birthday, my beautiful queen! 🎉✨ Today is all about you—the most incredible, loving, and breathtaking person in my life. From the moment we met, you have filled my world with so much love, joy, and warmth. I still can’t believe I get to call you mine. Every smile of yours lights up my heart, every laugh of yours is my favorite melody, and every moment with you feels like pure magic. You are my greatest love, my sweetest dream, and my forever home. On this special day, I just want to remind you how deeply I love and cherish you. You deserve all the happiness in the world, and I promise to do everything I can to make you feel as loved and special as you truly are—not just today, but every single day. I can’t wait to hold you, celebrate with you, and create even more beautiful memories together. Happy Birthday, my love! You are my heart, my happiness, and my forever. ",
];

export default function BirthdayGift() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [songFinished, setSongFinished] = useState(false);
  const [showCake, setShowCake] = useState(false);
  const audioRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [fadeCandles, setFadeCandles] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleSongEnd = () => {
    setPlaying(false);
    setSongFinished(true);
    setShowCake(true);
  };

  const handleVideoEnd = () => {
    setShowVideo(false);
    setVideoEnded(true);
  };

  const handleFadeClick = () => {
    setFadeCandles(true);
    setButtonVisible(false);
    setTimeout(() => {
      setShowMessage(true);
    }, 1500);
  };

  // Balloon Animation
  const balloons = [...Array(10)].map((_, i) => ({
    id: i,
    x: Math.random() * 100, // Random horizontal position
    delay: Math.random() * 5, // Random delay
  }));

  return (
    <div className="flex items-center justify-center h-screen relative bg-blue-100 overflow-hidden w-full">
      {/* Happy Birthday Banner */}

      {/* Floating Balloons */}
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className="absolute w-12 h-16 bg-red-400 rounded-full"
          style={{ left: `${balloon.x}%` }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
            delay: balloon.delay,
          }}
        />
      ))}

      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="px-6 py-3 text-xl font-bold text-white bg-pink-500 rounded-lg shadow-lg hover:bg-pink-600 transition-all"
        >
          🎁 Click to Open
        </button>
      ) : (
        <>
          {!songFinished && (
            <>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="relative p-6 bg-white shadow-xl rounded-2xl text-center max-w-sm z-10"
              >
                <h1 className="text-lg font-bold text-pink-600">
                  🎉 Happy Birthday 24th My Love! 💖
                </h1>
                <p className="mt-4 text-gray-700">
                  You are the most amazing person in my life. Wishing you love,
                  happiness, and all your heart desires! 🎂🥳
                </p>

                {/* Play Music Button */}
                <button
                  onClick={toggleMusic}
                  className="mt-6 px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-all"
                >
                  {playing ? "🔇 Stop Music" : "🎵 Play Birthday Song"}
                </button>

                <audio ref={audioRef} loop={false} onEnded={handleSongEnd}>
                  <source src="/music/hbd.mp3" type="audio/mp3" />
                </audio>
              </motion.div>
            </>
          )}

          {/* Confetti Animation */}
          {playing && (
            <>
              <Confetti width={window.innerWidth} height={window.innerHeight} />

              <motion.div
                className="fixed top-0  bg-pink-500 text-white text-3xl font-bold py-3 px-6 rounded-b-lg shadow-lg"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                🎉 Happy Birthday, My Love! 💖
              </motion.div>
            </>
          )}

          {/* Show Cake Animation after song finishes */}
          {songFinished && !showMessage && (
            <motion.div>
              <motion.div
                className="relative w-96 h-60 bg-red-200 rounded-xl flex flex-col justify-center items-center shadow-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <motion.div className="relative w-full h-20 bg-red-300 rounded-t-xl" />
                <motion.div className="relative w-full h-20 bg-red-200" />
                <motion.div className="relative w-full h-10 bg-red-100 rounded-b-xl" />

                {/* Candles */}
                <div className="absolute top-0 left-24">
                  <motion.div
                    className="w-2 h-10 bg-yellow-400 rounded-md"
                    animate={{ opacity: fadeCandles ? 0 : [1, 0.8, 1] }}
                    transition={{
                      duration: 0.3,
                      repeat: fadeCandles ? 0 : Infinity,
                    }}
                  />
                </div>
                <div className="absolute top-0 right-24">
                  <motion.div
                    className="w-2 h-10 bg-yellow-400 rounded-md"
                    animate={{ opacity: fadeCandles ? 0 : [1, 0.8, 1] }}
                    transition={{
                      duration: 0.3,
                      repeat: fadeCandles ? 0 : Infinity,
                    }}
                  />
                </div>

                <motion.div className="absolute bottom-0 w-full h-12 bg-brown-700 rounded-b-xl" />
              </motion.div>

              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mt-10 flex flex-col items-center">
                {!showVideo && !videoEnded && (
                  <>
                    <h1 className="text-center mb-2 text-xl font-medium">
                      Click here before you blow the candle
                    </h1>

                    <motion.button
                      className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold shadow-lg"
                      onClick={() => setShowVideo(true)}
                    >
                      Click Here to Watch Video
                    </motion.button>
                  </>
                )}

                {videoEnded && buttonVisible && !showMessage && (
                  <>
                    <motion.h1 className="text-center mb-2 text-xl font-medium">
                      Now Blow the Candle
                    </motion.h1>
                    <motion.button
                      className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold shadow-lg"
                      onClick={handleFadeClick}
                    >
                      Click Here
                    </motion.button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </>
      )}

      {/* Video Modal */}
      {showVideo && (
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-70"
          initial={{ opacity: 1 }}
          animate={{ opacity: videoEnded ? 0 : 1 }}
        >
          <video
            controls
            autoPlay={true}
            className="w-1/2 h-1/2 object-cover"
            onEnded={handleVideoEnd}
          >
            <source src="/video/video.mp4" type="video/mp4" />
          </video>
        </motion.div>
      )}

      {showMessage && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative p-7 bg-white shadow-xl rounded-2xl text-center max-w-2xl z-10 "
        >
          <h1 className="font-monkey text-2xl mb-2">My Love, Aloha Amor 💖</h1>
          <div className="font-dancing text-2xl text-justify m-1">
            <p className="">{birthdaMessage}</p>
            <h1 className=" mt-2 text-left">With all love,</h1>
            <h1 className=" mt-2 text-left">Forever your bebeboy!!!</h1>
          </div>
        </motion.div>
      )}
    </div>
  );
}

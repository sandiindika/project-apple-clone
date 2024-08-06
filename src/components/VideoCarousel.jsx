import {hightlightsSlides} from "../constants/index.js";
import {useEffect, useRef, useState} from "react";
import { gsap } from "gsap";
import {pauseImg, playImg, replayImg} from "../utils/index.js";
import {useGSAP} from "@gsap/react";

export const VideoCarousel = () => {

    const  videoRef = useRef([]);
    const  videoSpanRef = useRef([]);
    const  videoDivRef = useRef([]);

    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false,
    });

    const [loadedData, setLoadedData] = useState([]);

    const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

    useGSAP(() => {
        gsap.to("#video", {
            scrollTrigger: {
                trigger: "#video",
                toggleActions: "restart none none none",
            },
            onComplete: () => {
                setVideo((pre) => ({
                    ...pre,
                    startPlay: true,
                    isPlaying: true}));
            }
        })
    }, [isEnd, videoId])

    useEffect(() => {
        if (loadedData.length > 3) {
            if (!isPlaying) {
                videoRef.current[videoId].pause();
            } else {
                startPlay && videoRef.current[videoId].play();
            }
        }
    }, [startPlay, videoId, isPlaying, loadedData]);

    const handleLoadedMetadata = (index, event) => setLoadedData((pre) => [...pre, event]);

    useEffect(() => {
        const currentProgress = 0;
        let span = videoSpanRef.current;

        if (span[videoId]) {
            let anim = gsap.to(span[videoId], {
                onUpdate: () => {

                },

                onComplete: () => {

                }
            })
        }
    }, [videoId, startPlay]);

    const handleProcess = (type, index) => {
        switch (type) {
            case 'video-end':
                setVideo((pre) => ({...pre, isEnd: true, videoId: index + 1}))
                break;

            case 'video-last':
                setVideo((pre) => ({...pre, isLastVideo: true}))
                break;

            case 'video-reset':
                setVideo((pre) => ({...pre, isLastVideo: false, videoId: 0}))
                break;

            case 'play':
                setVideo((pre) => ({...pre, isPlaying: !pre.isPlaying}))
                break;

            default:
                return video;

        }
    }

    return (
        <>
            <div className="flex items-center">
                {hightlightsSlides.map((list, index) => (
                    <div key={index} id="slider" className="sm:pr-20 pr-10">
                        <div className="video-carousel_container">
                            <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                                <video
                                    id="video"
                                    playsInline={true}
                                    preload="auto"
                                    muted
                                    ref={(element) => videoRef.current[index] = element}
                                    onPlay={() => {
                                        setVideo((prevVideo) => ({
                                            ...prevVideo, isPlaying: true
                                        }))
                                    }}
                                    onLoadedMetadata={(event) =>
                                        handleLoadedMetadata(index, event)}
                                >
                                    <source src={list.video} type="video/mp4" />
                                </video>
                            </div>

                            <div className="absolute top-12 left-[5%] z-10">
                                {list.textLists.map((text, index) => (
                                    <p key={index} className="md:text-2xl text-xl font-medium">
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative flex-center mt-10">
                <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
                    {videoRef.current.map((_, index) => (
                        <span
                            key={index}
                            ref={(element) => videoDivRef.current[index] = element}
                            className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
                        >
                            <span
                                className="absolute h-full w-full rounded-full"
                                ref={(element) => videoSpanRef.current[index] = element}
                            />
                        </span>
                    ))}
                </div>

                <button className="control-btn">
                    <img
                        src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
                        alt={isLastVideo ? "replay" : !isPlaying? "play" : "pause"}
                        onClick={isLastVideo ? () => handleProcess('video-reset') : !isPlaying ? () => handleProcess('play') : () => handleProcess('pause')}
                    />
                </button>
            </div>
        </>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';
import Time from '../loader/Time';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { abbreviateNumber } from 'js-abbreviation-number';

const Video = ({ video, key }) => {

  return (
    <div key={key}>
      <Link to={`/video/${video.videoId}`}>
        <div>
          <div className="relative h-48 md:h-56 md: rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img className="h-full w-full" src={video?.thumbnails[0]?.url} alt={video?.title} />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className="flex space-x-2 mt-3">
            <div>
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <img className="h-full w-full rounded-full overflow-hidden" src={video?.author?.avatar[0].url} alt={video?.author?.title} />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold line-clamp-2">{video?.title}</span>
              <span className="flex items-center mt-2">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (<BsFillCheckCircleFill className="text-gray-600 ml-2 text-[14px]"/>)}
              </span>
              <div className="flex items-center text-gray-600 text-[13px]">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,2
                )} Views`}</span>
                <span className="flex text-[26px] leading-none font-bold relative top-[-6px] mx-2">.</span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Video
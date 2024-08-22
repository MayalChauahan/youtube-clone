import React from 'react';
import { BiVideo } from 'react-icons/bi';
import { BsFire } from 'react-icons/bs';
import { CgPlayList } from 'react-icons/cg';
import { FaChevronRight, FaYoutube } from 'react-icons/fa6';
import { GiLinkedRings, GiTrophyCup } from 'react-icons/gi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { IoNewspaperOutline, IoSettingsOutline } from 'react-icons/io5';
import { LiaFlagSolid } from 'react-icons/lia';
import { MdOutlinePodcasts, MdOutlineSubscriptions, MdWatchLater } from 'react-icons/md';
import { PiLightbulbLight, PiMusicNoteThin } from 'react-icons/pi';
import { RiFeedbackLine, RiLiveLine, RiMovieLine } from 'react-icons/ri';
import { SiYoutubegaming, SiYoutubekids, SiYoutubemusic, SiYoutubeshorts, SiYoutubestudio } from 'react-icons/si';
import { SlHome } from "react-icons/sl";
import { VscHistory } from 'react-icons/vsc';


const Sidebar = () => {

    const currentYear = new Date().getFullYear();

    const sidebarItems = [
        {
            id: 1,
            name: "Home",
            icon: <SlHome />
        },
        {
            id: 2,
            name: "Shorts",
            icon: <SiYoutubeshorts />
        },
        {
            id: 3,
            name: "Subscriptions",
            icon: <MdOutlineSubscriptions />
        },
    ];

    const sidebarItems2 = [
        {
            id: 1,
            name: "Your Channel",
            icon: <SlHome />
        },
        {
            id: 2,
            name: "History",
            icon: <VscHistory />
        },
        {
            id: 3,
            name: "Playlists",
            icon: <CgPlayList />
        },
        {
            id: 4,
            name: "Your Video",
            icon: <BiVideo />
        },
        {
            id: 5,
            name: "Watch later",
            icon: <MdWatchLater />
        },
        {
            id: 6,
            name: "Liked videos",
            icon: <GiLinkedRings />
        },
    ];

    const sidebarItems3 = [
        {
            id: 1,
            name: "Trending",
            icon: <BsFire />
        },
        {
            id: 2,
            name: "Shopping",
            icon: <HiOutlineShoppingBag />
        },
        {
            id: 3,
            name: "Music",
            icon: <PiMusicNoteThin />
        },
        {
            id: 4,
            name: "Movies",
            icon: <RiMovieLine />
        },
        {
            id: 5,
            name: "Live",
            icon: <RiLiveLine />
        },
        {
            id: 6,
            name: "Gaming",
            icon: <SiYoutubegaming />
        },
        {
            id: 7,
            name: "News",
            icon: <IoNewspaperOutline />
        },
        {
            id: 8,
            name: "Sports",
            icon: <GiTrophyCup />
        },
        {
            id: 9,
            name: "Courses",
            icon: <PiLightbulbLight />
        },
        {
            id: 10,
            name: "Fashion & Beauty",
            icon: <GiLinkedRings />
        },
        {
            id: 11,
            name: "Podcasts",
            icon: <MdOutlinePodcasts />
        },
    ];

    const sidebarItems4 = [
        {
            id: 1,
            name: "YouTube Premium",
            icon: <FaYoutube />
        },
        {
            id: 2,
            name: "YouTube Studio",
            icon: <SiYoutubestudio />
        },
        {
            id: 3,
            name: "YouTube Music",
            icon: <SiYoutubemusic />
        },
        {
            id: 4,
            name: "YouTube Kids",
            icon: <SiYoutubekids />
        },
    ];

    const sidebarItems5 = [
        {
            id: 1,
            name: "Settings",
            icon: <IoSettingsOutline />
        },
        {
            id: 2,
            name: "Report history",
            icon: <LiaFlagSolid />
        },
        {
            id: 3,
            name: "Help",
            icon: <IoIosHelpCircleOutline />
        },
        {
            id: 4,
            name: "Send feedback",
            icon: <RiFeedbackLine />
        },
    ];

    return (
        <>
            <div className="px-4 w-[33%] h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-hidden">
                {/* Home  */}
                <div className="space-y-3 items-center mb-4">
                    {sidebarItems.map((item, index) => (
                        <div key={index} className="flex items-center space-x-5 cursor-pointer hover:bg-gray-200 duration-300 rounded-lg px-3 py-2 font-semibold text-md">
                            <div className="text-[22px]">{item.icon}</div>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                <hr />
                {/* Your  */}
                <div className="space-y-3 items-center my-4">
                    <div className="flex items-center space-x-2">
                        <h3 className="font-bold text-lg">You</h3>
                        <FaChevronRight />
                    </div>
                    {sidebarItems2.map((item, index) => (
                        <div key={index} className="flex items-center space-x-5 cursor-pointer hover:bg-gray-200 duration-300 rounded-lg px-3 py-2 font-semibold text-md">
                            <div className="text-[22px]">{item.icon}</div>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                <hr />
                {/* Explore  */}
                <div className="space-y-3 items-center my-4">
                    <div className="items-center space-x-2">
                        <h3 className="font-bold text-lg">Explore</h3>
                    </div>
                    {sidebarItems3.map((item, index) => (
                        <div key={index} className="flex items-center space-x-5 cursor-pointer hover:bg-gray-200 duration-300 rounded-lg px-3 py-2 font-semibold text-md">
                            <div className="text-[22px]">{item.icon}</div>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                <hr />
                {/* More from YouTube  */}
                <div className="space-y-3 items-center my-4">
                    <div className="items-center space-x-2">
                        <h3 className="font-bold text-lg">More from YouTube</h3>
                    </div>
                    {sidebarItems4.map((item, index) => (
                        <div key={index} className="flex items-center space-x-5 cursor-pointer hover:bg-gray-200 duration-300 rounded-lg px-3 py-2 font-semibold text-md">
                            <div className="text-[22px] text-red-600">{item.icon}</div>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                <hr />
                {/* Last Menu  */}
                <div className="space-y-3 items-center my-4">
                    {sidebarItems5.map((item, index) => (
                        <div key={index} className="flex items-center space-x-5 cursor-pointer hover:bg-gray-200 duration-300 rounded-lg px-3 py-2 font-semibold text-md">
                            <div className="text-[22px]">{item.icon}</div>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                <hr />
                <div className="mb-4">
                    <p className='text-md pt-4 text-[#606060] ms-3 items-center'>About Press Copyright Contact usCreators Advertise Developers</p>
                    <p className='text-md py-4 text-[#606060] ms-3 items-center'>TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</p>
                    <span className="text-gray-400">© {currentYear} Google LLC</span>
                </div>
            </div>
        </>
    )
}

export default Sidebar
"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Room from '../../../public/images/room.jpg'
import LightRoom from '../../../public/images/lightroom.jpg'
import Collapse from '../custom-collapse/Collapse'

const Rooms = () => {

    const RoomColorsFlat = [
        '#F5F5F5', '#FAFAFA', '#ECEFF1', '#EFEBE9', '#E8EAF6',
        '#FFECB3', '#FFCCBC', '#D7CCC8', '#F8BBD0', '#FFE0B2',
        '#B2EBF2', '#C8E6C9', '#BBDEFB', '#E1BEE7', '#B3E5FC',
        '#DCE775', '#D7FFAB', '#BCAAA4', '#A5D6A7', '#CCFF90',
        '#FF8A80', '#FFD180', '#CE93D8', '#80DEEA', '#C5E1A5',
        '#7986CB', '#9575CD', '#80CBC4', '#A1887F', '#5C6BC0'
    ];
    // Track selected wall and colors for each wall
    const [selectedWall, setSelectedWall] = useState<string | null>(null);
    const [wallColors, setWallColors] = useState({
        left: 'transparent',
        top: 'transparent',
        center: 'transparent',
        right: 'transparent',
    });

    const handleWallSelection = (wall: string) => {
        setSelectedWall(wall);
    };

    const handleColorSelection = (color: string) => {
        if (selectedWall) {
            setWallColors(prev => ({
                ...prev,
                [selectedWall]: color
            }));
        }
    };

    const getWallColor = (wall: string) => {
        return wallColors[wall as keyof typeof wallColors];
    };

    const [ImageRoom, setImageRoom] = useState(false)


    return (
        <div className="flex flex-col lg:flex-row lg:justify-between  gap-4 p-4  ">
            {/* Filter Sidebar */}
            <div className="bg-gray-300 w-full lg:w-1/4 rounded-lg p-4 flex flex-col items-center gap-4">
                <p className="font-bold text-2xl border-b-2 w-full text-center">
                    كتالوج الألوان
                </p>
                <div className="flex flex-col gap-2 w-full ">
                    
                    <Collapse title='Colors Category'>
                        <div className='flex gap-4 flex-wrap'>
                            {RoomColorsFlat.map((color) => (
                                <div
                                    key={color}
                                    className='w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer'
                                    style={{ backgroundColor: color }}
                                    title={color}
                                    onClick={() => handleColorSelection(color)}
                                ></div>
                            ))}
                        </div>
                    </Collapse>
                </div>
            </div>

            {/* Products Content */}
            <div className="flex flex-col gap-6 w-full relative">
                <div className='relative w-full'>
                    <svg id="product-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 1920 1100"
                        className='relative z-40'
                    >
                        <path
                            className="wall-path"
                            onClick={() => handleWallSelection('left')}
                            strokeWidth="2"
                            stroke="#3fa9f5"
                            strokeOpacity="0.5"
                            id="svg_left"
                            d="M0,0H251.733c4.253,8.811,23.8,23.677,32,29.872L297.6,44.807c17.218,13.019,30.787,29.665,48,42.674l13.867,14.936c9.814,7.42,17.986,16.031,26.666,24.537l9.6,7.468V657.174h-1.066v1.066c-4.843.375-6.307,2.228-9.6,3.2h-12.8c-1.771.356-11.289,3.383-17.067,2.134-2.129-.461-8.206-2.142-10.667-2.134-7.385.024-15.8,3.2-27.733,3.2-4.865-10.106-12.246-17.943-18.133-26.671-7,2.812-16.384,13.577-22.4,12.8-11.234-8-9.506-13.485-27.734-17.07q-1.6,2.667-3.2,5.334c-2.47-1.632-12.158-9.2-14.933-6.4-2.506,1.959-3.927,7.018-6.4,8.535-5.744,3.522-10.823,2.175-18.133,4.267-26.856,7.687-42.064,2.4-72.534,2.134-1.322,3.851-1.142,10.544-1.066,16,0.966,1.474,8.243,24.9,8.533,26.671l-21.333,2.133c-2.685-7.967-1.154-22.127-1.067-32-2.127-3.822.2-47-1.067-58.676L76.8,599.564v-23.47c4.113-1.41,11.322-1.145,17.067-1.067,3.821,2.5,14.467,1.067,20.266,1.067l50.134-1.067c4.677,0,21.188-.161,22.4-2.134V548.356c33.162,0.148,62.725,12.283,97.066,12.8,2.1-6.383,1.067-17.441,1.067-25.6V291.247c-14.036-7.231-28.454-16.387-41.6-24.537-2.963-1.837-5.558-.311-8.533-2.134-8.493-5.2-18.239-11.8-26.667-17.069h-4.267c-11.252-7.088-30.457-22-46.933-22.4-4.624,14.057-1.067,44.862-1.067,61.877V423.536c-24.215-.145-47.81-6.092-73.6-6.4C82.105,411.644,81,409.492,80,405.4H75.733c-3.436-2.337-10.022-.58-13.867,0v10.669L0,415V0ZM0,573.96l65.067,1.067c2.04,6.016,1.15,16.743,1.067,24.537C53.84,599.85,39.39,600.6,25.6,600.631c-2.02,6.092-1.067,16.682-1.067,24.537v55.476c-3.585,5.923-1.374,17.377-2.133,25.6-1.509,16.349,2.9,60.815-4.267,71.479-3.361,2.2-12.874,1.205-18.133,1.066V573.96ZM0,804.4H19.2l-1.067,8.534A13.532,13.532,0,0,0,13.867,814c3.113,9.176-.876,21.481-1.067,36.273C-0.848,849.7,1.453,837.5,2.133,823.6c-0.858-1.09-.379-0.293-1.067-2.134,2.214-.4,2.053-0.258,3.2-1.067H0v-16Zm10.667,10.668c0.41,2.792-.792,1.4,2.133,2.134v-2.134H10.667ZM6.4,817.2c-1.089.858-.292,0.378-2.133,1.066v1.067H8.533V817.2H6.4ZM2.133,851.339l9.6,2.133v9.6C4.132,862.485,1.712,860.231,2.133,851.339ZM0,864.141c5.2,0.866,6.565,3.266,11.733,4.267-0.462,6.509-.206,10.094,0,17.069C6.621,886.591,5.209,889.415,0,890.812V864.141Zm12.8,27.737c0.084,11.722-.024,20.644-1.067,29.872-4.256,1.589-6.9,4.08-11.733,5.334V897.213C4.785,895.005,6.238,892.382,12.8,891.878Zm-1.067,34.139v24.538c-10.206-.915-10.271-6.67-9.6-18.137-0.858-1.089-.379-0.292-1.067-2.133C5.172,928.663,6.134,926.618,11.733,926.017ZM12.8,972.958c-4.685-.084-7.935-1.208-9.6-4.267-2.2-3.362-1.205-12.876-1.067-18.136H4.267c2.112,1.832,5.211,2.506,7.467,4.267C13.938,958.184,12.939,967.7,12.8,972.958Zm18.133-12.8-1.067,12.8c-2.579,1.39-3.022,1.922-7.467,2.134-1.258.856-1.793,0.825-4.267,1.067v-16a15.1,15.1,0,0,1,4.267-1.067C24.2,960.308,27.623,960.227,30.933,960.156Zm-22.4,21.337c-5.013.289-4.542,1.241-8.533,2.134v-9.6H2.133C5.171,977.363,7.648,975.426,8.533,981.493Z"
                            fill={getWallColor('left')}
                        ></path>
                        <path
                            className="wall-path"
                            onClick={() => handleWallSelection('top')}
                            strokeWidth="2"
                            stroke="#3fa9f5"
                            strokeOpacity="0.5"
                            id="svg_top"
                            d="M973.867,0V134.422c-12.484,4.171-34.384,1.157-49.067,1.067-8.175-11.1-4.45-54.162-4.267-73.612-0.857-1.089-.378-0.292-1.066-2.134-14-3.7-22.345-4.369-37.334-1.067-5.365,10.417-2.235,60.016-2.133,76.813H850.133V100.283l-3.2-1.067c-5.491-5.2-27.464-4.62-33.066,0-2.96,4.637-1.189,28.523-1.067,36.273l-419.2-1.067c-9.2-12.275-23.741-21.813-35.2-32-25.654-22.82-49.013-48.644-74.667-71.479C275,23.164,255.506,10.151,250.667,0h723.2ZM979.2,0h724.27V1.067h-1.07c-14.5,15.352-32.13,29.884-49.07,42.674q-4.26,4.8-8.53,9.6c-17.28,13.062-31.8,28.573-49.07,41.607-13.51,10.2-24.54,23.833-38.4,34.139l-4.26,5.334h-412.8V99.216c-1.07-.355-2.14-0.711-3.2-1.067-6.88-5.545-26.97-1.542-33.07,1.067-2.96,8.81-1.15,24.43-1.07,35.206H1075.2V59.743c-13.7-4.339-22.45-4.392-37.33-1.067-7.08,11.709-3.34,53.959-3.2,72.545h-2.14c-9.4,7.011-38.16,3.353-53.33,3.2,1.05-13.734.8-37.7,0-44.807-0.936-8.325.8-23.323,1.067-27.738C981.165,47.033,979.157,24.08,979.2,0Z"
                            fill={getWallColor('top')}
                        ></path>
                        <path
                            className="wall-path"
                            onClick={() => handleWallSelection('center')}
                            strokeWidth="2"
                            stroke="#3fa9f5"
                            strokeOpacity="0.5"
                            id="svg_right"
                            d="M812.8,134.422v78.946c3.291,2.077,3.659,3.08,9.6,3.2,2.021,1.622,3.829,1.908,7.467,2.133v34.139h-2.134c-1.712,2.868-1.023,8.412-1.066,12.8H757.333c-6.354-1.259-20.448-.894-25.6,0-11.32,1.966-28.288-1.374-36.266,0-23.842,4.106-51.308-3.289-70.4,0-27.105,4.67-66.637-3.572-87.467,0-5.294.908-12.652-1.018-14.933,0-2.439,3.948-1.067,14.376-1.067,20.27v243.24c-3.85,1.322-10.542,1.142-16,1.067-5.321-3.377-24.209-2.117-30.933-2.134-0.375-2.182-1.011-5.909-2.134-7.468-1.8-1.218-5.222-1.137-8.533-1.067v7.468c-8.246,2.777-22.892,1.154-33.067,1.067-5.555,3.324-17.322-.223-22.4,3.2-2.687,4.292-1.066,16.074-1.066,22.4v56.543c17.468,5.968,39.188.111,58.666,0v16c-4.918,1.678-13.651,1.148-20.266,1.067v1.067c-3.7,5.771-1.21,23.795-1.067,32-5.111-1.084-4.145-3.237-9.6-4.267-1.968,5.568-9.435,6.829-16,7.468V655.04c-2.579-1.389-3.022-1.922-7.467-2.134-3.543,3.825-11.66,3.508-17.066,5.334V133.355h0c3.924,2.359,23.073,1.067,32,1.067H812.8Zm37.333,0H880V183.5c2.987,1.1,2.238,1.619,6.4,2.133,1.144,0.8,1.009,0.642,3.2,1.067-0.119,18.091-2.087,40.35,1.067,56.543,4.668,1.258,2.814,2.964,7.466,4.267v14.936h-60.8v-1.067h-1.066c-0.138-6.2-1.982-6.575-3.2-9.6v-32h1.066V218.7c6.727-.16,10.642-2.194,16-3.2v-81.08Zm74.667,0h48v101.35l-8.533,1.067v2.133c-3.134,4.255-4.344,8.578-4.267,16-7.186-.266-34.175-9.635-36.267-13.869,3.5-5.621,1.067-21.922,1.067-29.872V134.422Zm54.4,0h46.93v80.013c0,7.507,2.01,26.492,0,29.871-5.83,4.2-25.16,10.491-33.063,11.736,0.081-9.379-2.6-11.648-4.267-19.2-13.518-.977-9.6-13.259-9.6-26.671V134.422Zm96,0h27.73V215.5c3.53,1.038,4.41,1.974,9.6,2.133,1.66,1.12,4.36,1.1,7.47,1.067v33.072c-2.07,4.611-4.02.749-4.27,10.669h-58.66c-0.01-4.578-.99-12.086,1.06-14.936,1.07-.356,2.14-0.711,3.2-1.067V187.764a35.116,35.116,0,0,0,12.8-3.2V183.5h1.07V134.422Zm65.07,0h412.8V655.04H1552v1.067a25.2,25.2,0,0,0-8.53,1.067c1.64,17.881.14,35.007,0,57.609a16.789,16.789,0,0,1-5.34,1.067c-2.98-1.934-33.62-1.213-42.66-1.067V798c0,17.323-.79,38.289,2.13,52.275-12.78.3-25.63-.788-40.53,0l-9.6,1.067c-5.13-1.465-9.97-5.292-16-6.4V265.643c-35.2-2.4-75.03-1.067-112-1.067H1126.4c-0.02-9.6-1.21-7.863-3.2-12.8V218.7c5.99-.283,11.29-1.946,16-3.2v-1.067h1.07V134.422ZM960,262.443H908.8v-17.07c19.545-.676,34.865,7.428,51.2,13.869v3.2Zm82.13-17.07v17.07H993.067c0.4-2.215.258-2.053,1.066-3.2C1001.65,253.941,1029.44,245.512,1042.13,245.373Zm3.2,0c8.92,0.7,9.14,6.015,8.54,16a26.813,26.813,0,0,1-8.54,1.067v-17.07ZM471.467,610.233c19.134-.09,33.6,2.042,51.2,2.133v72.545H502.4c-3.151-1.492-4.378-3.65-9.6-4.267V627.3H472.533C471.123,623.188,471.389,615.978,471.467,610.233Z"
                            fill={getWallColor('center')}
                        ></path>
                        <path
                            className="wall-path"
                            onClick={() => handleWallSelection('right')}
                            strokeWidth="2"
                            stroke="#3fa9f5"
                            strokeOpacity="0.5"
                            id="svg_center"
                            d="M1920,0V740.387c-19.85.16-37.64-3.918-56.53-4.267-0.07-28.509-.06-49.66,0-74.679h10.66c-0.41-16.553,1.87-38.786,0-49.075-0.99-5.459.19-9.937,3.2-11.735,1.09,0.858.3,0.379,2.14,1.067-0.1-5.076-2.23-4.166,2.13-5.334,1.72,2.47,1.56,2.509,5.33,3.2,0.75-4.272-.83-4.345,3.2-5.334,4.4,3.295,8.54,2.051,14.94,3.2V595.3c-3.19-3.6-1.61-5.96-8.54-6.4a39.3,39.3,0,0,0-5.33-2.134c-4.4-.995-10.78,2.108-17.07,2.134,0.81-6.594,5.24-9.384,7.47-14.936-2.63-1.381-.73.458-2.13-2.134h4.26c1.38,2.633-.45.727,2.14,2.134,0.35-.711.71-1.422,1.06-2.134,1-2.032.41-1.247,0-4.267h3.2v-4.267h-6.4c-0.62-6.576-2.34-4.512-3.2-6.4,0.36-1.778.71-3.557,1.07-5.335V550.49c-1.49-2.58-6.23-2.831-7.47-6.4V352.057c0-20.828,2.55-46.2-1.06-65.077h-5.34c-5.45,4.221-12.31,4.354-19.2,7.468-13.18,5.961-27.61,10.626-41.6,17.069-36.77,16.938-77.14,33.011-114.13,49.075h-5.33c-13.09,5.673-28.62,13.221-41.6,19.2-3.58,1.646-10.06,1.024-11.74,4.267V661.441c32.46-.044,69.49-0.257,97.07,3.2,0.25,0.032,18.64.248,19.2,0,0.36-1.066.71-2.133,1.07-3.2h45.86v68.278a16.718,16.718,0,0,1-5.33,1.067c-7.19-4.26-30.15-.862-40.53-3.2-23.81-5.364-52.49-2.035-76.8-7.468-9.02-2.016-29.57,2.093-33.07-5.334-4.53-7.691-2.66-18.438-5.33-27.738-3.82-13.255-7.1-29.325-10.67-42.673-2.03-7.615-.49-19.874-6.4-23.471,0.07,8.86-2.49,14.639-4.27,21.337-4.26,16.083-3.43,30.99-8.53,46.941-2.32,7.244-5.46,16.79-6.4,25.6h-6.4V657.174c-10.22-3.427-28.26-1.156-40.53-1.067-4.24-12.9-1.07-35.047-1.07-50.142V134.422c13.88-9.128,25.04-23.208,37.33-34.139,24.59-21.855,50.06-42.178,74.67-64.01,10.4-9.224,19.63-19.22,30.93-27.738,2.56-1.926,4.75-7.046,7.47-8.535H1920Zm-40.53,603.832v2.133h2.13v-2.133h-2.13Zm-22.4,342.455c21.06,0.12,37.55-.118,62.93,0v22.4c-21.72-2.831-40.54-17.543-62.93-19.2v-3.2Z"
                            fill={getWallColor('right')}
                        ></path>
                    </svg>
                    <div
                        className='bg-center bg-cover overflow-hidden'
                    >

                        <Image
                            loading='eager'
                            src={ImageRoom === false ? Room : LightRoom}
                            // width={100}
                            // height={100}
                            alt='room'
                            className='w-full absolute top-1'
                        />
                    </div>

                    {/* buttons */}
                    <div className="z-50 flex lg:absolute lg:bottom-10 lg:left-10 lg:flex-row flex-col lg:flex-nowrap overflow-x-auto max-w-full gap-4 px-4">
                        <div className="wall-option cursor-pointer" onClick={() => handleWallSelection('left')}>
                            <span className={`m-2 text-center text-white ${selectedWall === 'left' ? 'bg-red-300' : 'bg-gray-400'}  p-2 rounded-2xl flex justify-center items-center`}>Left</span>
                            <svg className="svg_icon" width="141" height="90" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#F7F8FB" d="M0 90V77l39-22h63l39 22v13z"></path>
                                <path stroke="#DDE3E8" fill={wallColors.left === 'transparent' ? '#FFF' : wallColors.left} strokeLinecap="square" strokeLinejoin="round" d="M0-3l39 22.222v35.556L0 77"></path>
                                <path stroke="#DDE3E8" fill="#FFF" strokeLinecap="square" strokeLinejoin="round" d="M39 19h63v36H39zM141 77l-39-22.222V19.222L141-3"></path>
                                <path stroke="#DDE3E8" fill="#FFF" strokeLinecap="square" strokeLinejoin="round" d="M141-3l-39 22H39L0-3"></path>
                            </svg>
                            <div className={`indicator ${selectedWall === 'left' ? 'active' : ''}`}></div>
                        </div>

                        <div className="wall-option cursor-pointer" onClick={() => handleWallSelection('top')}>
                            <span className={`m-2 text-center text-white ${selectedWall === 'top' ? 'bg-red-300' : 'bg-gray-400'}  p-2 rounded-2xl flex justify-center items-center`}>Top</span>
                            <svg className="svg_icon" width="141" height="90" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#F7F8FB" d="M0 90V77l39-22h63l39 22v13z"></path>
                                <path stroke="#DDE3E8" fill="#FFF" strokeLinecap="square" strokeLinejoin="round" d="M0-3l39 22.222v35.556L0 77M39 19h63v36H39zM141 77l-39-22.222V19.222L141-3"></path>
                                <path stroke="#DDE3E8" fill={wallColors.top === 'transparent' ? '#FFF' : wallColors.top} strokeLinecap="square" strokeLinejoin="round" d="M141-3l-39 22H39L0-3"></path>
                            </svg>
                            <div className={`indicator ${selectedWall === 'top' ? 'active' : ''}`}></div>
                        </div>

                        <div className="wall-option cursor-pointer" onClick={() => handleWallSelection('center')}>
                            <span className={`m-2 text-center text-white ${selectedWall === 'center' ? 'bg-red-300' : 'bg-gray-400'}  p-2 rounded-2xl flex justify-center items-center`}>Front</span>
                            <svg className="svg_icon" width="141" height="90" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#F7F8FB" d="M0 90V77l39-22h63l39 22v13z"></path>
                                <path stroke="#DDE3E8" fill="#FFF" strokeLinecap="square" strokeLinejoin="round" d="M0-3l39 22.222v35.556L0 77M141 77l-39-22.222V19.222L141-3M141-3l-39 22H39L0-3"></path>
                                <path stroke="#DDE3E8" fill={wallColors.center === 'transparent' ? '#FFF' : wallColors.center} strokeLinecap="square" strokeLinejoin="round" d="M39 19h63v36H39z"></path>
                            </svg>
                            <div className={`indicator ${selectedWall === 'center' ? 'active' : ''}`}></div>
                        </div>

                        <div className="wall-option cursor-pointer" onClick={() => handleWallSelection('right')}>
                            <span className={`m-2 text-center text-white ${selectedWall === 'right' ? 'bg-red-300' : 'bg-gray-400'}  p-2 rounded-2xl flex justify-center items-center`}>Right</span>
                            <svg className="svg_icon" width="141" height="90" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#F7F8FB" d="M0 90V77l39-22h63l39 22v13z"></path>
                                <path stroke="#DDE3E8" fill="#FFF" strokeLinecap="square" strokeLinejoin="round" d="M0-3l39 22.222v35.556L0 77M39 19h63v36H39z"></path>
                                <path stroke="#DDE3E8" fill={wallColors.right === 'transparent' ? '#FFF' : wallColors.right} strokeLinecap="square" strokeLinejoin="round" d="M141 77l-39-22.222V19.222L141-3"></path>
                                <path stroke="#DDE3E8" fill="#FFF" strokeLinecap="square" strokeLinejoin="round" d="M141-3l-39 22H39L0-3"></path>
                            </svg>
                            <div className={`indicator ${selectedWall === 'right' ? 'active' : ''}`}></div>
                        </div>

                        <div className="flex justify-center items-center">
                            {/* <div
                                onClick={() => setImageRoom(prev => !prev)}
                                className='bg-red-400 text-white p-4 rounded-2xl cursor-pointer shadow-2xl'
                            >Ligh</div> */}
                            <button
                                onClick={() => setImageRoom(prev => !prev)}
                                className={`p-4 rounded-2xl cursor-pointer shadow-2xl transition-all duration-300 ${ImageRoom
                                        ? 'bg-green-500 text-white transform scale-105'
                                        : 'bg-red-400 text-white hover:bg-red-500'
                                    }`}
                            >
                                {ImageRoom ? 'Light On' : 'Light Off'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms
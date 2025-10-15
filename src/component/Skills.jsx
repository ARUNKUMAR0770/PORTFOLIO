import React from 'react';

const Skills = () => {
    const Frontend = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
    const Front_percentage = [90, 85, 85, 80, 80];
    const Backend = ["Node.js", "Express", "MongoDB"];
    const Back_percentage = [50, 50, 50];
    const Tools = ["Git", "GitHub", "VS Code"];
    return (
        <>

            <div className=" mt-[80px] flex flex-col items-center justify-center">
                <div className="p-4 w-full sm:flex">
                    <div className="sm:w-[50%] p-4">
                        <h1 className='text-2xl font-bold mb-4 ml-2'>Frontend</h1>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {Frontend.map((skill, index) => (
                                <div className="block w-full border border-white/10 rounded-lg px-3 py-4" key={index} >
                                    <span key={index} className="block">{skill}</span>
                                    <div className="flex">
                                        <input type="range" min="0" max="100" value={Front_percentage[index]} className="w-full accent-yellow-500 appearance-slider" />
                                        <span className='ml-2 text-sm text-gray-300'>{Front_percentage[index]}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="sm:w-[50%] p-4">
                        <h1 className='text-2xl font-bold mb-4 ml-2'>Backend</h1>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {Backend.map((skill, index) => (
                                <div className="block w-full border border-white/10 rounded-lg px-3 py-4" key={index}>
                                    <span key={index} className="block">{skill}</span>
                                    <div className="flex">
                                        <input type="range" min="0" max="100" value={Back_percentage[index]} className="w-full accent-yellow-500 appearance-slider" />
                                        <span className='ml-2 text-sm text-gray-300'>{Back_percentage[index]}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Skills;
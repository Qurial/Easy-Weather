import React from "react";

const HiddenTab = ({ index, setActiveTab, icon, weekDay,
	temperature, degreeSign, divideLine,
	isLoading, setIsImageLoading, isImageLoading }) => {

	return (
		<>
			{isLoading
				? <><div
					className='flex flex-row md:flex-col justify-center items-center h-28 md:h-auto md:min-w-16
		md:w-24 my-1 md:m-1 md:p-0 md:my-4 rounded-xl bg-neutral-200 dark:bg-neutral-600 animate-pulse transition-all m-5 p-5
		cursor-pointer'>
				</div>
					{divideLine}
				</>
				: <><div
					className='flex flex-row md:flex-col justify-center items-center h-28 md:h-auto md:min-w-16
	md:w-24 my-1 md:m-1 md:p-0 md:my-4 rounded-xl tileColor transition-all m-5 p-5
	cursor-pointer'
					onClick={() => setActiveTab(index)}>

					<div className='flex justify-center items-center h-full md:w-full md:h-auto'>
						<h1 className='p-1'>{weekDay}</h1>
					</div>

					<div className={`flex justify-center md:mt-5`}>
              <img
              src={icon}
              alt="weather"
              className={`w-2/5 md:w-full ${isImageLoading ? 'opacity-0' : ''}`}
              onLoad={() => setIsImageLoading(false)} />
					</div>

					<div className='text-2xl font-thin md:mt-5'>
						{temperature}&#176;{degreeSign}
					</div>
				</div>
					{divideLine}
				</>}
		</>
	)
}

export default HiddenTab
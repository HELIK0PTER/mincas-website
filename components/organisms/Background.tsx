import React from 'react';
import {twMerge} from "tailwind-merge";

interface BackgroundProps {
	children: React.ReactNode;
	color?: "primary" | "secondary" | "background" | "none";
}
const Background = (
	{
		children,
		color = "none",
	}: BackgroundProps
) => {
	const colorVariants = {
		primary: "bg-primary",
		secondary: "bg-secondary",
		background: "bg-background",
		none: "",
	};

	return (
		<div className={twMerge('bg-inherit', `${colorVariants[color]} flex justify-center w-full`)}>
			<div className={`flex items-center p-4 w-full max-w-[1500px]`}>
				{children}
			</div>
		</div>
	);
};

export default Background;
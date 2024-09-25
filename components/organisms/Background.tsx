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
		primary: "bg-primary text-white",
		secondary: "bg-secondary",
		background: "bg-background",
		none: "",
	};

	return (
		<div className={twMerge('bg-inherit', `${colorVariants[color]} flex flex-col py-12 items-center flex-1 relative`)}>
			{children}
		</div>
	);
};

export default Background;
import React from 'react';
import {twMerge} from "tailwind-merge";
import Content from "@/components/templates/Content";

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
		<div className={twMerge('bg-inherit', `${colorVariants[color]} flex justify-center w-full h-full`)}>
			<div className={`flex justify-center px-4 w-full max-w-[900px] h-full`}>
				<Content>
					{children}
				</Content>
			</div>
		</div>
	);
};

export default Background;
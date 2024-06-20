import React from "react"
import Image from 'next/image'

export const Logo1 = () => {
	return (
		<div className={`h-[80px]`}>
			<Image priority={true} alt={`Logo 1`} src={`/Logo1.png`} width={200} height={200} className={`w-72 h-auto`} />
		</div>
	)
};

export const Logo2 = () => {
	return (
		<>
			<Image alt={`Logo 1`} src={`/Logo2.png`} fill />
		</>
	)
}
import React from 'react';

const Content = (
	{
		children,
	} :
		{
			children : React.ReactNode
		}
) => {
	return (
		<div className={`flex flex-col h-full justify-center relative`}>
			{children}
			<div className={`invisible`}></div>
		</div>
	);
};

export default Content;
import React from 'react';

const Heading = (
	props: {
		children: React.ReactNode;
	}
) => {
	return (
		<h1 className={`font-bold`}>
			{props.children}
		</h1>
	);
};

export default Heading;
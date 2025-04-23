import React from 'react';

const Layout = (
	props: {
		children: React.ReactNode;
	}
) => {
	return (
		<div className={`flex w-full justify-center text-pretty mt-10`}>
			<div className={`flex flex-col max-w-xl`}>
				{props.children}
			</div>
		</div>
	);
};

export default Layout;
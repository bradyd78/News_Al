import React from 'react';

const news = [
	{
		title: 'Minimalism in Web Design: Trends for 2025',
		summary:
			'Explore the latest trends in minimalistic web design and how they shape user experience.',
		date: 'June 10, 2025',
	},
	{
		title: 'React & Tailwind: Building Modern UIs',
		summary:
			'A guide to combining React and Tailwind CSS for fast, beautiful websites.',
		date: 'June 8, 2025',
	},
	{
		title: 'AI in News: The Future of Journalism',
		summary:
			'How artificial intelligence is transforming the way news is gathered and delivered.',
		date: 'June 5, 2025',
	},
];

const Home: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<h1 className="text-4xl font-bold text-blue-600">
				Welcome to My React Tailwind Website
			</h1>
			<p className="mt-4 text-lg text-gray-700">
				This is the home page of the website built with React and Tailwind CSS.
			</p>
			<section className="mt-12 w-full max-w-3xl">
				<h1 className="text-3xl font-semibold mb-6">Latest News</h1>
				<div className="space-y-6">
					{news.map((item, idx) => (
						<article
							key={idx}
							className="bg-white rounded-lg shadow p-6 hover:shadow-md transition"
						>
							<h2 className="text-xl font-bold mb-2">{item.title}</h2>
							<p className="text-gray-600 mb-2">{item.summary}</p>
							<span className="text-xs text-gray-400">{item.date}</span>
						</article>
					))}
				</div>
			</section>
		</div>
	);
};

export default Home;
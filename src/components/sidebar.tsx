
import { Disclosure, DisclosureButton, } from '@headlessui/react';
import { Menu, House, BookOpen, Podcast, Settings } from 'lucide-react'
import Link from 'next/link';

export const Sidebar: React.FC = () => {
	return (
		<div>
			<Disclosure as="nav">
				<DisclosureButton className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group md:hidden lg:hidden">
					<Menu
						className="block md:hidden lg:hidden h-6 w-6"
						aria-hidden="true"
					/>
				</DisclosureButton>
				<div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 rounded-md duration-200">
					<div className="flex flex-col justify-start item-center">
						<h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
							Librify
						</h1>
						<div className=" my-4 border-b border-gray-100 pb-28">
							<Link href="/">
								<div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
									<House className="text-2xl text-gray-600 group-hover:text-white " />
									<h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
										Home Page
									</h3>
								</div>
							</Link>
							<Link href='/books'>
								<div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
									<BookOpen className="text-2xl text-gray-600 group-hover:text-white " />
									<h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
										Book
									</h3>
								</div>
							</Link>
							<Link href="/podcast">
								<div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
									<Podcast className="text-2xl text-gray-600 group-hover:text-white " />
									<h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
										Podcast
									</h3>
								</div>
							</Link>
						</div>
						<div className=" my-4 border-b border-gray-100 pb-4">
							<div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
								<Settings className="text-2xl text-gray-600 group-hover:text-white " />
								<h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
									Settings
								</h3>
							</div>
						</div>
					</div>
				</div>
			</Disclosure>
		</div>
	)
}

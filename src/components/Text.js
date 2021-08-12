import Logos from "./Logos"

function Text() {
	return (
		<div className="absolute inset-0">
			<div className="flex justify-center flex-col mt-52 sm:bg-black sm:mr-32 sm:py-16 sm:mt-64 xl:mr-100 xl:ml-100 ">

				<h1 className="text-gray-300 uppercase text-xl text-center sm:text-left sm:ml-8 sm:text-4xl sm:w-4/5 xl:w-3/5">
				<span className="text-green-300 ">Publish your Podcasts</span><br/>
					everywhere
			</h1>

				<h2 className="text-gray-400 m-8 text-center sm:text-left sm:text-xl sm:w-4/5 xl:w-3/5"> 
				Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!
			</h2>

				<div className="hidden sm:block sm:relative sm:w-4/5 xl:w-3/5">
					<input type="" placeholder="Email address" className="bg-gray-600 placeholder-gray-200 rounded-full m-8 pl-8 pr-4 pt-2 pb-2 sm:w-full sm:mr-8 sm:pr-2 sm:py-4"/>
					<button className="rounded-full pt-2 pb-2 bg-green-400 mr-8 ml-8 sm:absolute sm:m-8 sm:-mr-4 sm:top-0 sm:mt-10 sm:right-0 sm:px-4">Request Access</button>
				</div>

				<Logos />


				<input type="" placeholder="Email address" className="bg-gray-600 placeholder-gray-200 rounded-full m-8 pl-8 pr-4 pt-2 pb-2 sm:hidden"/>
				<button className="rounded-full pt-2 pb-2 bg-green-400 mr-8 ml-8 sm:hidden">Request Access</button>

			</div>
		</div>
	)
}


export default Text;

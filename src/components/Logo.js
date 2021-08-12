import logo from "../desktop/logo.svg"

function Logo () {
	return (

		<div className="absolute inset-0">
			<div className="flex justify-center mt-10 sm:justify-start sm:ml-10 xl:ml-100 ">
				<img src={logo} alt="" className="w-40 xl:w-60"/>
			</div>
		</div>
	)
}


export default Logo;

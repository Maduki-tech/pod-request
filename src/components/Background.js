import image from "../mobile/image-host.jpg"
import imageTablet from "../tablet/image-host.jpg"
import imageDesktop from "../desktop/image-host.jpg"
import Dots from "./Dots"


function Background (){


	return (
		<div className="bg-black sm:flex sm:justify-end sm:h-screen">
			<img src={image} alt="" className="h-screen sm:hidden opacity-30 "/>
			<img src={imageTablet} alt="" className="hidden sm:block h-3/4 opacity-30 xl:hidden"/>
			<img src={imageDesktop} alt="" className="hidden xl:block w-2/5 h-4/5 mt-auto mb-auto"/>
			<Dots/>
		</div>
	)

}


export default Background;

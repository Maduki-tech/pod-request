import spotify from "../desktop/spotify.svg"
import apple from "../desktop/apple-podcast.svg"
import google from "../desktop/google-podcasts.svg"
import pocket from "../desktop/pocket-casts.svg"


function Logos() {
	return(
		<div className="grid grid-flow-col ml-8 mr-8 mb-8 gap-6 items-center xl:w-3/5">
			<img src={spotify} alt="" className=""/>
			<img src={apple} alt="" />
			<img src={google} alt="" />
			<img src={pocket} alt="" />
		</div>
	)
}


export default Logos;

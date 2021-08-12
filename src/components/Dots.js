

const dotArray = () => {

	let array = [];
	let finalArray = [];

	for( let i = 0; i < 8; i++){
		array.push(
				<div className="w-4 h-4 bg-green-500 rounded-full"> </div>
		)
	}

	for ( let j = 0; j < 4; j++){
		finalArray.push(array);
	}

	return finalArray;

}

function Dots () {
	return(
		<div className="absolute bottom-0 left-0 right-0 mb-4 ml-4 xl:hidden">
			<div className="grid grid-flow-col grid-cols-8 grid-rows-4 w-3/6 h-1/3 items-end gap-y-4">

				{dotArray()}

			</div>
		</div>

	);
}

export default Dots

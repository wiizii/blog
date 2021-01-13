import DUMMY from '../../assets/dummy';

const itemsToRender = [];
for (let x in DUMMY) {
	if(x.charAt(x.length-1) === '2' || x.charAt(x.length-1) === '3'){
	itemsToRender.push(
		<div key={x} className='image_container'>
			<img src={DUMMY[x]} alt='dummy' className='dummy_image'></img>
		</div>
	);
	}
}

const Model = () => {
	return <div className="grid_container">{itemsToRender}</div>;
};

export default Model;

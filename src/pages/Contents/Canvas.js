import DUMMY from '../../assets/dummy';

const itemsToRender = [];
for (let x in DUMMY) {
	if(x.charAt(x.length-1) === '1'){
	itemsToRender.push(
		<div key={x} className='image_container'>
			<img src={DUMMY[x]} alt='dummy' className='dummy_image'></img>
		</div>
	);
	}
}

const Canvas = () => {
	return <div className="grid_container">{itemsToRender}</div>;
};

export default Canvas;

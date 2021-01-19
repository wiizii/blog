import janggi from '../../assets/previews/janggi.png';
const itemsToRender = [];
itemsToRender.push(
	<div key={janggi} className='image_container'>
		<a href='https://master.d4ufee36oqvl3.amplifyapp.com/' target='_blank' rel='noreferrer'>
			<img src={janggi} alt='janggi12' width='200' height='200'></img>
		</a>
	</div>
);

const Game = () => {
	return <div className='grid_container'>{itemsToRender}</div>;
};

export default Game;

import Dummy from './Contents/Dummy';
import Game from './Contents/Game';
import Design from './Contents/Design';
import Canvas from './Contents/Canvas';
import About from './Contents/About';

const Contents = (props) => {
	switch (props.view) {
		case 'ALL':
			return <Dummy />;
		case 'Game':
			return <Game />;
		case 'Design':
			return <Design />;
		case 'CANVAS':
			return <Canvas />;
		case 'ABOUT':
			return <About />;
		default:
			return <div>Not Ready :)</div>;
	}
};

export default Contents;

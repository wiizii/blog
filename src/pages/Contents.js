import Dummy from './Contents/Dummy';
import Model from './Contents/Model';
import Design from './Contents/Design';
import Canvas from './Contents/Canvas';
import About from './Contents/About';

const Contents = (props) => {
	switch (props.view) {
		case 'ALL':
			return <Dummy />;
		case 'MODEL':
			return <Model />;
		case 'DESIGN':
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

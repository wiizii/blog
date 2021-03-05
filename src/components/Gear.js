import gear from '../assets/images/gear.png';
import gear_small from '../assets/images/gear_small.png';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100%{
    transform: rotate(360deg);
  }
`;
const rotateRev = keyframes`
  100%{
    transform: rotate(-360deg);
  }
`;
const Container = styled.div`
	position: relative;
	padding: 40px;
`;
const GearContainer = styled.div`
	animation: ${rotate} 40s linear infinite;
	transform-origin: 50% 50%;
`;
const LargeGear = styled.img`
	width: 120px;
	height: 120px;
	animation: ${rotate} 20s linear infinite;
	transform-origin: 50% 50%;
`;
const SmallGear = styled.img`
	width: 80px;
	height: 80px;
	animation: ${rotateRev} 20s linear infinite;
	transform-origin: 50% 50%;
`;

const Gear = () => {
	return (
		<Container>
			<GearContainer>
				<LargeGear src={gear} alt='gear' />
				<SmallGear src={gear_small} alt='small_gear' />
			</GearContainer>
		</Container>
	);
};

export default Gear;

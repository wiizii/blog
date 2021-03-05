import styled from 'styled-components';

const Container = styled.h1`
	position: relative;
	font-family: 'Montserrat', Arial, sans-serif;
	font-size: 40px;
	font-weight: 700;
	letter-spacing: 0.02em;
	text-transform: uppercase;
	text-shadow: 0 0 0.2em red;
	white-space: nowrap;
	filter: blur(0.001em);
`;

const BTT = () => {
	return <Container>BTT</Container>;
};

export default BTT;

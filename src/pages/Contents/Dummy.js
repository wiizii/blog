import React from 'react';
import styled from 'styled-components';
import DUMMY from '../../assets/dummy';

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	column-gap: 4px;
	margin-left: 120px;
	margin-right: 120px;
	grid-auto-flow: dense;
`;

const ImageContainer = styled.div``;

const Image = styled.img`
	width: 100%;
	height: auto;
	border-radius: 5px;
`;

const itemsToRender = [];
for (let x in DUMMY) {
	itemsToRender.push(
		<ImageContainer key={x} className='image_container'>
			<Image src={DUMMY[x]} alt='dummy' className='dummy_image' />
		</ImageContainer>
	);
}

const Dummy = () => {
	return <Container>{itemsToRender}</Container>;
};

export default Dummy;

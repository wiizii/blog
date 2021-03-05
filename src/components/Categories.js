import React from 'react';
import styled, { css } from 'styled-components';

const categories = [
	{ name: 'ALL' },
	{
		name: 'DESIGN',
	},
	{
		name: 'GAME',
	},
	{
		name: 'ABOUT',
	},
];

const CategoriesBlock = styled.div`
	display: flex;
	justify-content: center;
	padding: 1rem;
	width: 700px;
	margin: 0 auto;
	@media screen and (max-width: 700) {
		width: 100%auto;
	}
`;

const Category = styled.div`
	font-size: 1rem;
	cursor: pointer;
	white-space: pre;
	text-decoration: none;
	color: inherit;
	padding-bottom: 0.25rem;

	&:hover {
		color: #dc143c;
	}

	${(props) =>
		props.active &&
		css`
			font-weight: 800;
			border-bottom: 2px solid #dc143c;
			color: #dc143c;
		`}

	& + & {
		margin-left: 1rem;
	}
`;

const Categories = ({ onSelect, category }) => {
	return (
		<CategoriesBlock>
			{categories.map((c) => (
				<Category key={c.name} active={category === c.name} onClick={() => onSelect(c.name)}>
					{c.name}
				</Category>
			))}
		</CategoriesBlock>
	);
};

export default Categories;

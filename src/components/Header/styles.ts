import styled from 'styled-components';

export const Container = styled.header`
	background: var(--blue);
`;

export const Content = styled.div`
	max-width: 1120px;
	margin: 0 auto;

	padding: 2rem 1rem 12rem 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	button {
		padding: 0.7rem 1rem 0.7rem 1rem;
		border-radius: 0.3rem;
		background: var(--blue-light);
		border: var(--blue-light);
		color: #fff;

		&:hover {
			filter: brightness(0.9);
			transition: 0.2s;
		}
	}
`;

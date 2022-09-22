import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box
	}

	html,
	body,
	#root {
		height: 100%;
	}

	body {
		font-weight: 400;
		font-size: 1.063em;
		line-height: 143.2%;
		font-family: 'Poppins', sans-serif;
		color: #fff;
		background-color: #0f103f;
	}

	a {
		text-decoration: none;
		color: #fff;
	}
`;

export default GlobalStyles;

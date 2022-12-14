import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    border: 0;
}

	*,
*::before,
*::after {
    box-sizing: border-box;
}

:active,
:hover,
:focus {
    outline: 0;
    outline-offset: 0;
}

a:focus,
a:active {
    outline: 0;
}

nav,
footer,
header,
aside {
    display: block;
}

html,
body {
    height: 100%;
    width: 100%;
		font-weight: 400;
    font-size: 100%;
    line-height: 1.432;
    font-size: 1em;
		font-family: Poppins, sans-serif;
		color: #fff;
		background-color: #0f103f;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
    font-family: inherit;
}

input::-ms-clear {
    display: none;
}

button {
    cursor: pointer;
}

button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

a,
a:visited,
a:hover {
		color: #fff;
    text-decoration: none;
}

ul,
li {
    list-style: none;
}

img {
    vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: inherit;
    font-weight: 400;
}
`;

export default GlobalStyles;

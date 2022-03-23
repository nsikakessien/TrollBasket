import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 html, body, #root {
        min-height: 100%;
        background: #ffffff;
        font-family: Noto Sans JP, sans-serif !important;
        font-weight: 400;
        font-style: normal;
        padding: 0;
		margin: 0;
		-webkit-font-smoothing: antialiased;
    }

	a {
		margin: 0;
		padding: 0;
		text-decoration: none;
		color: #22a8ff;
		transition: all 225ms ease-in-out;
		font-family: 'Noto Sans JP', sans-serif !important;

		&:hover {
			color: #00FFFF;
			transition: all 225ms ease-in-out;
		}
	}

	input {
		&:focus {
			outline: none;
		}
	}

	button {
		font-family: Noto Sans JP, sans-serif !important;
	}
`;

export default GlobalStyle;

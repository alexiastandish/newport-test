import { createGlobalStyle } from 'styled-components';

const fonts = `
@font-face {
  font-family: 'Work Sans';
  src: url('https://fonts.googleapis.com/css?family=Work+Sans:400&display=swap');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Work Sans';
  src: url('https://fonts.googleapis.com/css?family=Work+Sans:500&display=swap');
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: 'Work Sans';
  src: url('https://fonts.googleapis.com/css?family=Work+Sans:600&display=swap');
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: 'Work Sans';
  src: url('https://fonts.googleapis.com/css?family=Work+Sans:700&display=swap');
  font-weight: 700;
  font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
  src: url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600&display=swap');
  font-weight: 300;
  font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
  src: url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap');
  font-weight: 400;
  font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
  src: url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap');
  font-weight: 500;
  font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
  src: url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap');
  font-weight: 600;
  font-style: normal;
}

`;

const reset = `
  html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
`;

const GlobalStyle = createGlobalStyle`
	${reset}
	${fonts}
`;

export default GlobalStyle;

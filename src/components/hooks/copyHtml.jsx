import { html_beautify } from 'js-beautify'
import ReactDOMServer from 'react-dom/server'

function CopyHtml(el) {
	const elToCopy = ReactDOMServer.renderToStaticMarkup(el)
	const formattedHtml = html_beautify(elToCopy, {
		indent_size: 5,
		indent_char: ' ',
		preserve_newlines: true,
	})
	navigator.clipboard.writeText(formattedHtml)

	return null
}

export default CopyHtml

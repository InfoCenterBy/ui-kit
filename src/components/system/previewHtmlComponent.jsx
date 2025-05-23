import { html_beautify } from 'js-beautify'
import ReactDOMServer from 'react-dom/server'

const PreviewHtmlComponent = ({ children }) => {
	const htmlRender = ReactDOMServer.renderToStaticMarkup(children)
	const formattedHtml = html_beautify(htmlRender, {
		// indent_size: 5,
		// indent_char: ' ',
		// preserve_newlines: true,
	})
	return (
		<>
			<div className='px-3 w-full mockup-code'>
				<pre className='before:hidden'>
					<code
						contentEditable
						suppressContentEditableWarning={true}
						onInput={(e) => console.log(true, e.target)}
					>
						{formattedHtml}
					</code>
				</pre>
			</div>
		</>
	)
}

export default PreviewHtmlComponent

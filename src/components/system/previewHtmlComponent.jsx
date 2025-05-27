import { html_beautify } from 'js-beautify'
import ReactDOMServer from 'react-dom/server'

const PreviewHtmlComponent = ({ children, htmlCode, setHtmlCode }) => {
	const htmlRender = (code) => {
		return ReactDOMServer.renderToStaticMarkup(code)
	}
	const formattedHtml = html_beautify(htmlRender(children), {
		// indent_size: 5,
		// indent_char: ' ',
		// preserve_newlines: true,
	})
	return (
		<>
			<div className='bg-base-200 pt-0 mockup-code'>
				<pre className='before:hidden px-3'>
					<code
						// contentEditable
						// suppressContentEditableWarning={true}
						// onInput={(e) => console.log(true, e.target)}
						// onInput={(e) => setHtmlCode(e.target)}
						className='focus-within:outline-0'
						// onChange={(e) => console.log(true, e.target)}
					>
						<textarea
							className='focus-within:outline-0 w-full resize-none'
							rows='7'
							onChange={(e) => setHtmlCode(e.target.value)}
							defaultValue={
								htmlCode ? htmlCode : formattedHtml
							}
						></textarea>
					</code>
				</pre>
			</div>
		</>
	)
}

export default PreviewHtmlComponent

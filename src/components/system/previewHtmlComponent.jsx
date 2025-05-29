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
			<div className=''>
				<textarea
					className='bg-white dark:bg-gray-800 p-2 rounded-[.75rem] focus-within:outline-0 w-full text-black dark:text-white resize-none'
					rows='7'
					onChange={(e) => setHtmlCode(e.target.value)}
					defaultValue={htmlCode ? htmlCode : formattedHtml}
				></textarea>
			</div>
		</>
	)
}

export default PreviewHtmlComponent

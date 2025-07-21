import { useState } from 'react'
import ColorBlock from './colorBlock'

const ColorParent = () => {
	const [colorStrength, setColorStrength] = useState(500)
	const COLOR_STRENGTHS = [
		50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
	]

	const applyStrength = (colorClass) => {
		colorClass = colorClass + `-${colorStrength}`
		return colorClass
	}

	return (
		<div>
			<h1 className='text-black dark:text-white'>Color Palette</h1>
			<div className='flex flex-col items-start gap-2 mt-3'>
				<label
					htmlFor='strength'
					className='block text-black dark:text-white'
				>
					Сила цвета: {colorStrength}
				</label>
				<div className='w-full max-w-xs'>
					<input
						type='range'
						name='strength'
						id='strength'
						min={0}
						max={COLOR_STRENGTHS.length - 1}
						value={COLOR_STRENGTHS.indexOf(colorStrength)}
						onChange={(e) =>
							setColorStrength(
								COLOR_STRENGTHS[+e.target.value]
							)
						}
						className='range range-xs dark:[--range-progress:white] dark:[--range-thumb:black] [--range-progress:black] [--range-thumb:white] [--range-bg:stone-500] dark:[--range-bg:base-300]'
					/>
					<div className='flex justify-between mt-2 px-2.5 text-xs'>
						{COLOR_STRENGTHS.map((element) => {
							return (
								<span
									className='base-content'
									key={element}
								>
									{element}
								</span>
							)
						})}
					</div>
				</div>
			</div>
			<div className='flex flex-wrap gap-2 mt-3 p-2 border dark:border-white border-black rounded-lg'>
				<ColorBlock
					colorFromParent='bg-black'
					textColor='text-white'
				/>
				<ColorBlock
					colorFromParent='bg-transparent'
					textColor='text-black dark:text-white'
				/>
				<ColorBlock
					colorFromParent='bg-white'
					textColor='text-black'
				/>
				{/* Ниже для всех, где есть -500, применяем силу */}
				<ColorBlock colorFromParent={applyStrength('bg-slate')} />
				<ColorBlock colorFromParent={applyStrength('bg-gray')} />
				<ColorBlock colorFromParent={applyStrength('bg-zinc')} />
				<ColorBlock colorFromParent={applyStrength('bg-neutral')} />
				<ColorBlock colorFromParent={applyStrength('bg-stone')} />
				<ColorBlock colorFromParent={applyStrength('bg-red')} />
				<ColorBlock colorFromParent={applyStrength('bg-orange')} />
				<ColorBlock colorFromParent={applyStrength('bg-amber')} />
				<ColorBlock colorFromParent={applyStrength('bg-yellow')} />
				<ColorBlock colorFromParent={applyStrength('bg-lime')} />
				<ColorBlock colorFromParent={applyStrength('bg-green')} />
				<ColorBlock colorFromParent={applyStrength('bg-emerald')} />
				<ColorBlock colorFromParent={applyStrength('bg-teal')} />
				<ColorBlock colorFromParent={applyStrength('bg-cyan')} />
				<ColorBlock colorFromParent={applyStrength('bg-sky')} />
				<ColorBlock colorFromParent={applyStrength('bg-blue')} />
				<ColorBlock colorFromParent={applyStrength('bg-indigo')} />
				<ColorBlock colorFromParent={applyStrength('bg-violet')} />
				<ColorBlock colorFromParent={applyStrength('bg-purple')} />
				<ColorBlock colorFromParent={applyStrength('bg-fuchsia')} />
				<ColorBlock colorFromParent={applyStrength('bg-pink')} />
				<ColorBlock colorFromParent={applyStrength('bg-rose')} />
			</div>
		</div>
	)
}

export default ColorParent

import { cn, formatSignedNumber } from "@shared/utils";

const Section = ({ title, scoreBefore, scoreAfter, children }) => {
	const scoreDiff = scoreAfter - scoreBefore;
	let scoreAfterClass = { fg: "text-ink", bg: "bg-transparent" };
	
	if (scoreDiff > 0)
		scoreAfterClass = { fg: "text-(--score-strong)", bg: "bg-(--score-strong-soft)" };
	else if (scoreDiff < 0)
		scoreAfterClass = { fg: "text-(--score-weak)", bg: "bg-(--score-weak-soft)" };

	return (
		<div className="bg-surface border border-border rounded-lg overflow-hidden mb-4">
			<div className="flex items-center justify-between border-b border-border px-5 py-4">
				<div className="font-semibold text-ink ">{title}</div>
				<span className="text-xs tabular-nums text-ink-soft">
					<span className="font-medium">{scoreBefore}</span>
					<span className="text-ink-faint mx-1">→</span>
					<span className={cn("font-semibold", scoreAfterClass.fg)}>{scoreAfter}</span>
					<span className={cn(
						"ml-1 font-semibold px-2 py-1 rounded-full",
						scoreAfterClass.fg,
						scoreAfterClass.bg
					)}>{formatSignedNumber(scoreDiff)}</span>
				</span>
			</div>

			{children}
		</div>
	)
}

export default Section;
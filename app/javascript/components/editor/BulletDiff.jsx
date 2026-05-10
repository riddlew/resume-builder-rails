import { cn, formatSignedNumber } from "@shared/utils";
import ContentDiff from "./ContentDiff";
import Reasoning from "./Reasoning";

const BulletDiff = ({ number, scoreBefore, scoreAfter, original, suggested, reasoning }) => {
	const scoreDiff = scoreAfter - scoreBefore;
	let scoreAfterClass = { fg: "text-ink", bg: "bg-transparent" };
	
	if (scoreDiff > 0)
		scoreAfterClass = { fg: "text-(--score-strong)", bg: "bg-(--score-strong-soft)" };
	else if (scoreDiff < 0)
		scoreAfterClass = { fg: "text-(--score-weak)", bg: "bg-(--score-weak-soft)" };

	return (
		<>
			<div className="bullet-diff flex items-center justify-between border-t border-b border-border py-2 px-5">
				<div className="flex text-xs items-center font-semibold text-ink-soft uppercase tracking-wide">
					<span>Bullet {number}</span>
				</div>
				<div className="flex gap-3 items-center">
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
					<button className="inline-flex items-center justify-center h-6 w-6 rounded-lg text-[#9B2B2B] hover:bg-surface-hover transition-colors">
						<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
					</button>
				</div>
			</div>
			<ContentDiff
				original={original}
				suggested={suggested}
			/>
			<Reasoning text={reasoning} />
		</>
	)
}

export default BulletDiff;
const classMap = {
	added: "diff-add",
	removed: "diff-del",
	unchanged: null
}

const diffText = (segments) => {
	return segments.map((segment, i) => {
		const cls = classMap[segment.type];
		return cls
			? <mark key={i} className={cls}>{segment.text}</mark>
			: <span key={i}>{segment.text}</span>
	})
}

const ContentDiff = ({ original, suggested }) => {
	return (
		<>
			{/* Original Row */}
			<div className="grid border-b border-border grid-cols-[110px_1fr]">
				<div className="border-r border-border flex flex-col items-center gap-2 p-3.5">
				<span className="text-xs font-semibold text-ink-soft uppercase tracking-wide">Original</span>
				<button className="inline-flex items-center gap-1 text-xs font-medium text-ink-soft border border-border bg-surface rounded-full px-2 py-1 hover:bg-surface-hover">Use this</button>
				</div>
				<div className="bg-surface-alt text-ink leading-5.5 p-3.5">{original}</div>
			</div>

			{/* Suggested Row */}
			<div className="grid border-b border-border grid-cols-[110px_1fr]">
				<div className="border-r border-border flex flex-col items-center gap-2 p-3.5 bg-(--color-accent-soft)">
				<span className="text-xs font-semibold text-(--color-accent) uppercase tracking-wide">Suggested</span>
				<button className="inline-flex items-center gap-1 text-xs font-medium rounded-full px-2 py-1 bg-(--color-accent) text-white border border-(--color-accent)">
					<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
					Selected
				</button>
				</div>
				<div className="bg-surface text-ink leading-5.5 p-3.5">{diffText(suggested)}</div>
			</div>

			{/* Custom Row */}
			<div className="grid border-b border-border grid-cols-[110px_1fr]">
				<div className="border-r border-border flex flex-col items-center gap-2 p-3.5">
				<span className="text-xs font-semibold text-ink-soft uppercase tracking-wide">Custom</span>
				<button className="inline-flex items-center gap-1 text-xs font-medium text-ink-soft border border-border bg-surface rounded-full px-2 py-1 hover:bg-surface-hover">Use this</button>
				</div>
				<textarea
					className="bg-surface-alt text-ink leading-5.5 p-3.5 focus:outline-2 focus:-outline-offset-2 focus:outline-(--color-accent)"
					placeholder="Click here to enter your own text for this bullet point..."
				></textarea>
			</div>
		</>
	)
}

export default ContentDiff;
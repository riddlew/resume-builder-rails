const Reasoning = ({ text }) => {
	return (
		<div className="flex gap-2.5 text-xs text-ink-muted leading-5 bg-(--color-surface) px-5 py-2.5">
			<div className="shrink-0 w-[18px] h-[18px] rounded-full grid place-items-center font-serif italic font-semibold text-xs bg-(--color-accent-soft) text-(--color-accent)">i</div>
			<div>{text}</div>
		</div>
	)
}

export default Reasoning;
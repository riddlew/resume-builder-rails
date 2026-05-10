import BulletDiff from "./BulletDiff";
import ContentDiff from "./ContentDiff"
import Reasoning from "./Reasoning";
import Section from "./Section"

const ResumeEditor = () => {
	return (
		<>
			{/* Header summary card */}
			<div className="bg-surface border border-border rounded-2xl mb-4 p-5">
				<div className="grid gap-6 items-start lg:grid-cols-[1fr_auto]">

					{/* Left: job info */}
					<div>
						<div className="text-xs font-semibold text-ink-soft uppercase tracking-wider mb-1.5">Tailored for</div>
						<div className="font-serif text-2xl font-medium leading-tight mb-1.5">
							Staff Frontend Engineer
							<span className="text-ink-soft px-1">·</span>
							<span className="text-ink-soft">Notion</span>
						</div>
						<div className="text-ink-muted leading-[1.5]">
							We graded each section against the posting. Pick the version you prefer for each row,
							edit either side inline, then regenerate or finalize.
						</div>
					</div>

					{/* Right: before / after score cards */}
					<div className="flex items-stretch flex-col md:flex-row gap-3">

						{/* Before */}
						<div className="bg-surface-alt border border-border rounded-lg flex flex-col gap-1.5 items-start p-4 min-w-[140px]">
							<div className="text-xs font-semibold text-ink-soft uppercase tracking-wider">Before</div>
							<div className="flex items-baseline gap-1 tabular-nums">
								<span className="font-serif text-3xl font-medium leading-none text-ink-muted">67</span>
								<span className="text-lg text-ink-soft">/100</span>
							</div>
							<span className="w-full text-center rounded-full text-xs font-semibold px-3 py-1 text-[#9b2b2b] bg-[#f9d2d2]">
								Leaning No Hire
							</span>
						</div>

						{/* Arrow */}
						<div className="flex items-center text-ink-faint">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6"/></svg>
						</div>

						{/* After */}
						<div className="bg-accent-soft border border-accent rounded-lg flex flex-col gap-1.5 items-start p-4 min-w-[140px]">
							<div className="text-xs font-semibold text-accent uppercase tracking-wider">After</div>
							<div className="flex items-baseline gap-1 tabular-nums">
								<span className="font-serif text-3xl font-medium leading-none text-(--score-strong)">84</span>
								<span className="text-lg text-ink-soft">/100</span>
								<span className="text-lg font-semibold ml-1 px-1.5 py-px rounded-full text-(--score-strong)">+17</span>
							</div>
							<span className="w-full text-center rounded-full text-xs font-semibold px-3 py-1 text-[#2c7954] bg-[#b7e0c7]">
								Hire
							</span>
						</div>

					</div>
				</div>
			</div>


			{/* Summary */}
			<Section title="Summary" scoreBefore={60} scoreAfter={80}>
				<ContentDiff
					original="Senior software engineer with 8+ years building consumer and developer-facing products. Comfortable owning systems end to end, from API design through frontend polish. Recent focus on real-time collaboration, performance, and design-engineering crossover."
					suggested={[
						{ text: "Senior frontend engineer with 8+ years ", type: "unchanged" },
						{ text: "architecting", type: "added" },
						{ text: " real-time collaborative products at consumer scale. Deep expertise in ", type: "unchanged" },
						{ text: "TypeScript, React, and performance-critical UI.", type: "added" },
						{ text: " Recent focus on ", type: "unchanged" },
						{ text: "real-time collaboration, ", type: "removed" },
						{ text: "performance", type: "unchanged" },
						{ text: ",", type: "removed" },
						{ text: " and design-engineering crossover.", type: "unchanged" },
					]}
				/>
				<Reasoning text="Reframed around frontend leadership and real-time collaboration — both prominent in the JD. Pulled forward TypeScript/React from your skills." />
			</Section>

			{/* Experience: Linear */}
			<Section title="Senior Software Engineer · Linear" scoreBefore={71} scoreAfter={88}>
				<BulletDiff
					number={1}
					scoreBefore={71}
					scoreAfter={88}
					original="Led the rebuild of the issue search system, reducing p95 query latency from 850ms to 120ms across 200k+ active workspaces."
					suggested={[
						{ text: "Architected", type: "added" },
						{ text: " the rebuild of the issue search system ", type: "unchanged" },
						{ text: "used across", type: "added" },
						{ text: " 200k+ ", type: "unchanged" },
						{ text: "workspaces,", type: "added" },
						{ text: " cutting p95 query latency from 850ms to 120ms", type: "unchanged" },
						{ text: " - a pattern transferable to editor query/index workloads.", type: "added" }
					]}
					reasoning = "Strengthened the architecture framing and connected it to editor-relevant workloads."
				/>
				<BulletDiff
					number={2}
					scoreBefore={81}
					scoreAfter={77}
					original="Designed and shipped the Cycles automation engine; adopted by 40% of paying customers within first quarter."
					suggested={[
						{ text: "Designed and shipped the Cycles automation engine end-to-end, adopted by 40% of paying customers in the first quarter", type: "unchanged" },
						{ text: " - owned scope from spec through real-time client sync.", type: "added" },
					]}
					reasoning = "Added the real-time sync angle, which directly maps to the JD's collaboration focus."
				/>
			</Section>

			{/* Experience: Linear */}
			<Section title="Software Engineer · Render" scoreBefore={71} scoreAfter={71}>
				<BulletDiff
					number={1}
					scoreBefore={71}
					scoreAfter={88}
					original="Led the rebuild of the issue search system, reducing p95 query latency from 850ms to 120ms across 200k+ active workspaces."
					suggested={[
						{ text: "Architected", type: "added" },
						{ text: " the rebuild of the issue search system ", type: "unchanged" },
						{ text: "used across", type: "added" },
						{ text: " 200k+ ", type: "unchanged" },
						{ text: "workspaces,", type: "added" },
						{ text: " cutting p95 query latency from 850ms to 120ms", type: "unchanged" },
						{ text: " - a pattern transferable to editor query/index workloads.", type: "added" }
					]}
					reasoning = "Strengthened the architecture framing and connected it to editor-relevant workloads."
				/>
				<BulletDiff
					number={2}
					scoreBefore={81}
					scoreAfter={77}
					original="Designed and shipped the Cycles automation engine; adopted by 40% of paying customers within first quarter."
					suggested={[
						{ text: "Designed and shipped the Cycles automation engine end-to-end, adopted by 40% of paying customers in the first quarter", type: "unchanged" },
						{ text: " - owned scope from spec through real-time client sync.", type: "added" },
					]}
					reasoning = "Added the real-time sync angle, which directly maps to the JD's collaboration focus."
				/>
			</Section>



			{/* Skills */}
			<div className="bg-surface border border-border rounded-lg overflow-hidden mb-4">
				{/* Section head */}
				<div className="flex items-center justify-between border-b border-border px-5 py-4">
					<div className="font-semibold text-ink ">Skills</div>
					<span className="text-xs tabular-nums text-ink-soft">
						<span className="font-medium">70</span>
						<span className="text-ink-faint mx-1">→</span>
						<span className="font-semibold text-(--score-strong)">82</span>
						<span className="ml-1 font-semibold px-2 py-1 rounded-full text-(--score-strong) bg-(--score-strong-soft)">+12</span>
					</span>
				</div>

				{/* Original row */}
				<div className="grid border-b border-border grid-cols-[110px_1fr]">
					<div className="border-r border-border flex flex-col items-center gap-2 p-3.5">
						<span className="text-xs font-semibold text-ink-soft uppercase tracking-wide">Original</span>
						<button className="inline-flex items-center gap-1 text-xs font-medium text-ink-soft border border-border bg-surface rounded-full px-2 py-1 hover:bg-surface-hover">Use this</button>
					</div>
					<div className="bg-surface-alt text-ink p-3.5">
						<div className="flex flex-wrap gap-1.5">
							<span className="skill-chip alt-chip">TypeScript</span>
							<span className="skill-chip alt-chip">React</span>
							<span className="skill-chip alt-chip">Node.js</span>
							<span className="skill-chip alt-chip">PostgreSQL</span>
							<span className="skill-chip alt-chip">GraphQL</span>
							<span className="skill-chip alt-chip">System design</span>
							<span className="skill-chip alt-chip">Performance optimization</span>
							<span className="skill-chip alt-chip">Design systems</span>
						</div>
					</div>
				</div>

				{/* Suggested row */}
				<div className="grid border-b border-border grid-cols-[110px_1fr]">
					<div className="border-r border-border flex flex-col items-center gap-2 p-3.5 bg-(--color-accent-soft)">
						<span className="text-xs font-semibold text-(--color-accent) uppercase tracking-wide">Suggested</span>
						<button className="inline-flex items-center gap-1 text-xs font-medium rounded-full px-2 py-1 bg-(--color-accent) text-white border border-(--color-accent)">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
							Selected
						</button>
					</div>
					<div className="bg-surface text-ink p-3.5">
						<div className="flex flex-wrap gap-1.5">
							<span className="skill-chip">TypeScript</span>
							<span className="skill-chip">React</span>
							<span className="skill-chip added">Real-time collaboration</span>
							<span className="skill-chip added">Operational Transform</span>
							<span className="skill-chip">Node.js</span>
							<span className="skill-chip removed">Go</span>
							<span className="skill-chip">PostgreSQL</span>
							<span className="skill-chip">GraphQL</span>
							<span className="skill-chip removed">AWS</span>
							<span className="skill-chip removed">Kubernetes</span>
							<span className="skill-chip">System design</span>
							<span className="skill-chip removed">Distributed systems</span>
							<span className="skill-chip">Performance optimization</span>
							<span className="skill-chip">Design systems</span>
						</div>
					</div>
				</div>

				{/* Custom row */}
				<div className="grid border-b border-border grid-cols-[110px_1fr]">
					<div className="border-r border-border flex flex-col items-center gap-2 p-3.5">
						<span className="text-xs font-semibold text-ink-soft uppercase tracking-wide">Custom</span>
						<button className="inline-flex items-center gap-1 text-xs font-medium text-ink-soft border border-border bg-surface rounded-full px-2 py-1 hover:bg-surface-hover">Use this</button>
					</div>
					<div className="bg-surface-alt text-ink p-3.5">
						<div className="flex flex-wrap gap-1.5">
							<span className="skill-chip alt-chip">Docker</span>

							<button className="text-xs px-2.5 py-1 rounded-full flex gap-1 items-center justify-center bg-accent text-white hover:bg-accent-hover transition-colors">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4 12H20M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
								<span>Add Skill</span>
							</button>
						</div>
					</div>
				</div>

				{/* Reasoning */}
				<div className="flex gap-2.5 text-xs text-ink-muted leading-5 bg-(--color-surface) px-5 py-2.5">
					<div className="shrink-0 w-[18px] h-[18px] rounded-full grid place-items-center font-serif italic font-semibold text-xs bg-(--color-accent-soft) text-(--color-accent)">i</div>
					<div>Reordered to lead with JD-critical skills. Added Operational Transform (you have related experience) and pulled CRDT-adjacent terminology forward.</div>
				</div>
			</div>


			{/* Sticky action bar */}
			<div className="sticky bottom-4 bg-surface border border-border rounded-lg shadow-[0_8px_28px_rgba(20,20,20,0.08)] p-3.5">
				<div className="flex flex-col md:flex-row items-center justify-between gap-2.5">
					<div className="text-ink-muted">Edits look good? Finalize to render the resume.</div>
					<div className="flex flex-col md:flex-row gap-2">
						<button className="inline-flex items-center gap-1.5 px-6 py-3 md:px-3 md:py-1.5 rounded-md font-medium bg-surface border border-border text-ink hover:bg-surface-hover hover:border-border-strong transition-colors">
							<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/></svg>
							Regenerate
						</button>
						<button className="inline-flex items-center gap-1.5 px-6 py-3 md:px-3 md:py-1.5 rounded-md font-medium bg-accent text-white hover:bg-accent-hover transition-colors">
							<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
							Finalize
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default ResumeEditor;
// MistLayer — the site's signature motif: soft, drifting horizontal bands
// of translucent color that evoke mist rolling across the hills. Used
// sparingly across section transitions rather than as constant decoration.
export default function MistLayer({ tone = 'light', className = '' }) {
  const gradients =
    tone === 'light'
      ? ['rgba(248,250,251,0.55)', 'rgba(164,192,203,0.35)']
      : ['rgba(122,155,168,0.22)', 'rgba(47,93,80,0.18)']

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="absolute -left-1/4 top-[15%] h-40 w-[150%] animate-drift rounded-[50%] blur-3xl"
        style={{ background: gradients[0] }}
      />
      <div
        className="absolute -left-1/3 top-[55%] h-56 w-[160%] animate-driftSlow rounded-[50%] blur-3xl"
        style={{ background: gradients[1] }}
      />
    </div>
  )
}

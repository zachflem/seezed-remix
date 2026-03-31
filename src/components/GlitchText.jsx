export default function GlitchText({ text, as: Component = 'h1', className = '' }) {
  return (
    <div className={`glitch-container ${className}`}>
      <Component className="glitch-text" data-text={text}>
        {text}
      </Component>
    </div>
  );
}

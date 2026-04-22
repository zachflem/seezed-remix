export default function GlitchText({ text, as: Component = 'h1', className = '' }) {
  return (
    <div className="glitch-container">
      <Component className={`glitch-text ${className}`} data-text={text}>
        {text}
      </Component>
    </div>
  );
}

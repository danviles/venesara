type Props = {
  onStart: () => void
}

export const Presentation = ({ onStart }: Props) => {
  return (
    <div className="screen">
      <img src="/logo.png" alt="Logo" className="logo" />
      <button onClick={onStart}>Empezar</button>
    </div>
  )
}
type Props = {
  title: string
  text: string
  image?: string
  onContinue: () => void
}

export const Transition = ({ title, text, image, onContinue }: Props) => {
  return (
    <div className="screen">
      <h2>{title}</h2>
      <p>{text}</p>
      {image && <img src={image} alt="" />}
      <button onClick={onContinue}>Continuar</button>
    </div>
  )
}
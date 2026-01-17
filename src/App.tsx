// import { useState } from "react"
// import { Presentation } from "./components/Presentation"
// import { Transition } from "./components/Transition"
// import { Question } from "./components/Question"
// import { questions } from "./data"
import "./App.css"

// type Screen =
//   | { type: "presentation" }
//   | { type: "transition"; title: string; text: string }
//   | { type: "question"; index: number }

function App() {
  // const [screen, setScreen] = useState<Screen>({ type: "presentation" })

  // if (screen.type === "presentation") {
  //   return (
  //     <Presentation
  //       onStart={() =>
  //         setScreen({
  //           type: "transition",
  //           title: "Bienvenido",
  //           text: "Prepárate para el juego",
  //         })
  //       }
  //     />
  //   )
  // }

  // if (screen.type === "transition") {
  //   return (
  //     <Transition
  //       title={screen.title}
  //       text={screen.text}
  //       onContinue={() =>
  //         setScreen({ type: "question", index: 0 })
  //       }
  //     />
  //   )
  // }

  // if (screen.type === "question") {
  //   return (
  //     <Question
  //       data={questions[screen.index]}
  //       onAnswer={() => {
  //         const next = screen.index + 1

  //         if (next < questions.length) {
  //           setScreen({ type: "question", index: next })
  //         } else {
  //           setScreen({
  //             type: "transition",
  //             title: "Fin",
  //             text: "Gracias por jugar",
  //           })
  //         }
  //       }}
  //     />
  //   )
  // }

  // return null

  return <div className="poema">Las mantarrallas no existen, las orcas son delfines, me encantas Sara porque tu sonrisa en mi corazón existe ❤️</div>
}

    export default App
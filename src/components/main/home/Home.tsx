import { useEffect, useState } from "react"


function Home() {

  const [isState, setState] = useState<number>(0)
  const [isText, setText] = useState<string>('')
  
  

  const text = 'Вы зашли на проект к Григоррю Цыганкову. Данный проект реализован с помощью технологии React с TypeSript. Что бы что-то покликать перейдите по ссылкам выше. Ссылка "Dialogs" - пример мессендежа, а "profile" - в случайном порядке грузит данные с сервера'

  if (isState < text.length) {

    setTimeout(()=> {
      const newText = isText + text[isState]
      setText(newText)

      const i = isState + 1
      setState(i)
    }, 50)

  }

  return <>
    <h1>Home</h1>
    {/* <span>{ isText }</span> */}
    {/* <h1>{isText}</h1> */}
    {/* <h2>{isText}</h2> */}
    <h3>{isText}</h3>
    {/* <h4>{isText}</h4> */}
  </>
}

export default Home;

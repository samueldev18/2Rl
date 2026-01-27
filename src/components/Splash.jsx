import { useEffect } from 'react'


export default function Splash({ onFinish }) {
useEffect(() => {
const timer = setTimeout(() => {
onFinish()
}, 2500) // tempo da splash (2.5s)


return () => clearTimeout(timer)
}, [])


return (
<div className="splash">
<h1>2RL</h1>
<span>Representação e Comércio LTDA</span>
</div>
)
}
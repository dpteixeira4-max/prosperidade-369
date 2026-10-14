'use client'

import { useEffect, useRef, useState } from 'react'

const playerDocument = `<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>html,body{margin:0;background:#000}vturb-smartplayer{display:block;margin:0 auto;width:100%;max-width:400px}.vturb-player-placeholder{position:relative;width:100%;padding:178.21782178217822% 0 0;z-index:0;background:#000}</style></head><body><vturb-smartplayer id="vid-6ac90b7f314dcec5bc96ae6b"><div class="vturb-player-placeholder"></div></vturb-smartplayer><script src="https://scripts.converteai.net/660d559e-4353-4926-84f9-8147539b6d98/players/6ac90b7f314dcec5bc96ae6b/v4/player.js" async></script></body></html>`

const comments = [
  ['Ana García', '¡Qué interesante todo lo que estás compartiendo, Hiroshi!'], ['Carlos Mendoza', 'Llegué justo a tiempo, qué bueno estar aquí.'], ['Gabriel Romero', 'Estoy escuchando con mucha atención, me encanta este tema.'], ['Paula Vargas', 'Este en vivo me apareció en el momento perfecto.'], ['Mariana López', '¡Hola a todos! Qué buena energía se siente aquí.'], ['Claudio Herrera', 'Me alegra haber entrado, esto está muy interesante.'], ['Elena Castro', 'Quiero aprender todo sobre el método 369.'], ['Alan Ortiz', 'Siento que hoy voy a aprender algo muy valioso.'], ['Miguel Torres', 'Me encanta descubrir nuevas formas de trabajar en mis metas.'], ['Kelly Ramírez', 'Estoy viendo el en vivo con mi esposo, ¡nos encanta!'], ['Santiago Flores', 'Ya compartí este en vivo con mi hermana.'], ['Ana Clara López', '¡Qué comunidad tan bonita se está formando aquí!'], ['Gustavo Morales', 'Me encanta ver a tanta gente interesada en crecer.'], ['Camila Reyes', 'Hiroshi, estoy prestando atención a cada palabra.'], ['Priscila Martínez', 'Este en vivo me atrapó desde el primer momento.'], ['Leonardo Gutiérrez', 'Estoy siguiendo todo desde mi celular, ¡excelente explicación!'], ['Adriana Rivas', 'Ya tengo mi cuaderno listo para tomar apuntes.'], ['Elisa Fuentes', 'Quiero aprender cada detalle de este método.'], ['Lorena Campos', '¡Qué interesante la explicación de los números!'], ['Marcia Fernández', 'Me quedo hasta el final, ¡no quiero perderme nada!'], ['Rafael Tejeda', 'Hiroshi, continúa, ¡está buenísimo!'], ['Fernanda Cruz', 'Me encanta descubrir el significado del 3, el 6 y el 9.'], ['Juliana Rocha', '¡Qué manera tan clara de explicar este tema!'], ['Daniela Morales', 'Tengo muchas ganas de aprender a practicar el método 369.'], ['Roberto Sánchez', 'Hoy es un buen día para establecer nuevas metas.'], ['Valentina Herrera', 'Me encanta escuchar ideas que me motivan a crecer.'], ['Lucía Fernández', 'Qué interesante conocer más sobre el significado de estos números.'], ['Mateo González', 'Estoy tomando nota de todo, ¡muchas gracias por compartir!'], ['Isabella Torres', '¡Qué buena energía transmite esta explicación!'], ['Diego Ramírez', 'Me alegra que me hayan compartido este en vivo.'], ['Camila Navarro', 'Me interesa muchísimo todo lo relacionado con la prosperidad.'], ['Javier Morales', 'Hiroshi, me encanta cómo explicas cada detalle.'], ['Sofía Jiménez', '¡Estoy aprendiendo un montón con esta explicación!'], ['Alejandro Ruiz', 'Quiero incorporar nuevas prácticas positivas en mi rutina.'], ['Valeria Castro', 'Llegué por curiosidad y ahora estoy disfrutando muchísimo.'], ['Sebastián Flores', '¡Qué fascinante conocer más sobre el método 369!'], ['Martina Silva', 'Ya le compartí el en vivo a mi mamá, le va a encantar.'], ['Nicolás Ortega', 'Me gusta mucho la claridad con la que explicas todo.'], ['Gabriela Mendoza', 'Justo estaba buscando información sobre el método 369.'], ['Renata Pérez', '¡Gracias, Hiroshi, por compartir tus conocimientos con nosotros!'], ['Felipe Sánchez', 'Me gustaría aprender a poner en práctica todo lo explicado.'], ['Luciana Romero', '¡Qué lindo compartir este momento con tantas personas motivadas!'],
]

export default function Page() {
  const [viewers, setViewers] = useState(3692)
  const [visibleComments, setVisibleComments] = useState(comments.slice(0, 2))
  const [message, setMessage] = useState('')
  const commentListRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const list = commentListRef.current
    if (list) list.scrollTop = list.scrollHeight
  }, [visibleComments])

  const submitComment = () => {
    const trimmedMessage = message.trim()
    if (!trimmedMessage) return
    setVisibleComments((current) => [...current, ['Tú', trimmedMessage]])
    setMessage('')
  }

  useEffect(() => {
    const viewerTimer = window.setInterval(() => setViewers((current) => Math.min(3698, Math.max(3688, current + (Math.random() > 0.5 ? 1 : -1)))), 3800)
    let index = 2
    let commentTimer: number
    const revealNext = () => {
      if (index >= comments.length) return
      setVisibleComments((current) => [...current, comments[index++]])
      const delay = index < 10 ? 9000 : Math.min(120000, 18000 + index * 2600)
      commentTimer = window.setTimeout(revealNext, delay)
    }
    commentTimer = window.setTimeout(revealNext, 6500)
    return () => { window.clearInterval(viewerTimer); window.clearTimeout(commentTimer) }
  }, [])

  return (
    <main className="vsl-page">
      <div className="live-strip"><span className="live-dot" /> EN VIVO <span className="strip-divider" /> <strong><span className="people-icon">●</span> {viewers} personas viendo ahora...</strong></div>
      <header className="headline"><h1>HIROSHI TAKEDA | Cómo utilizar el poder oculto de los números 3, 6 y 9 para atraer Prosperidad y Abundancia ilimitada</h1></header>
      <section className="player-wrap" aria-label="Video de presentación"><iframe title="Video de presentación" srcDoc={playerDocument} className="vsl-player-frame" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /></section>
      <section className="comments" aria-label="Chat ao vivo"><div className="comments-topbar"><strong>Chat ao vivo</strong><span>Postagens principais</span><span className="post-count">● 2.4k</span></div><div ref={commentListRef} className="comment-list">{visibleComments.map(([name, text], index) => <article className="comment" key={`${name}-${index}`}><span className="avatar">{name.charAt(0)}</span><div><strong>{name}</strong><p>{text}</p></div></article>)}</div><form className="comment-form" onSubmit={(event) => { event.preventDefault(); submitComment() }}><input aria-label="Escribe un comentario" maxLength={200} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Clique aquí..." /><span className="char-count">{message.length}/200</span><button type="submit" aria-label="Enviar comentario">➤</button></form></section>
      <footer className="site-footer"><strong>Copyright 2026 - Todos los derechos reservados.</strong><div><a href="#">Términos de uso</a><span>|</span><a href="#">Política de Privacidad</a></div></footer>
    </main>
  )
}

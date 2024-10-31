import { useState } from 'react'
import './SuperHero.css'

const SuperHero = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [consult, setConsult] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name.trim() === '') {
            Swal.fire({
                title: 'Ingrese su nombre',
                icon: "info"
            })
            return
        }

        if (isNaN(phone.trim()) || phone.trim() === '') {
            Swal.fire({
                title: 'Ingrese su número de contacto',
                icon: "info"
            })
            return
        }

        if (email.trim() === '' || !email.includes('@')) {
            Swal.fire({
                title: 'Ingrese email valido',
                icon: "info"
            })
            return
        }
        if (consult.trim() === '') {
            Swal.fire({
                title: 'Ingrese su consulta',
                icon: "info"
            })
            return
        }
    
        console.log('Consulta Enviada')
        console.log('Nombre:', name)
        console.log('Cel:', phone)
        console.log('Email:', email)
        console.log('Consulta:', consult)
        Swal.fire({
            title: 'Consulta enviada con éxito',
            text: 'Dentro de las 24hs le responderemos',
            icon: "success"
        })

        setName('')
        setPhone('')
        setEmail('')
        setConsult('')
    }
  

    return (
        <div className='Back'> 
            <h1 className='TextTitulo'>Contactanos </h1>
            <form className='Super' onSubmit={handleSubmit}>
                <input type='text' placeholder='Ingresa tu nombre' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='text' placeholder='Ingresa tu cel' value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input type='text' placeholder='Ingresa tu e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='text' placeholder='Ingresa tu consulta' value={consult} onChange={(e) => setConsult(e.target.value)} />
                <button className='Contacto' type='submit'> Enviar Consulta</button>
            </form>

        </div>
    )
}
    export default SuperHero
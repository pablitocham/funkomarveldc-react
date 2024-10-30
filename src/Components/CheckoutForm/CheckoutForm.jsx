import { useState } from "react"
import './CheckoutForm.css'
const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const handleConfirm = (event) => {
        event.preventDefault()

        if (name.trim() === '') {
            Swal.fire({
                title: 'Ingrese su nombre',
                icon: "info"
            })
            return
        }
        if (isNaN(phone.trim()) || phone.trim === '') {
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

        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }
    return (
        <div className="Container">
            <form onSubmit={handleConfirm} className="Form" >
                <label>
                    NOMBRE
                    <input className=" Input" type="text" value={name} onChange={({ target }) => setName(target.value)} />
                </label>
                <label>
                    TELEFONO
                    <input className=" Input" type="text" value={phone} onChange={({ target }) => setPhone(target.value)} />
                </label>
                <label>
                    EMAIL
                    <input className=" Input" type="text" value={email} onChange={({ target }) => setEmail(target.value)} />
                </label>
                <button type="submit"> Confirmar</button>
            </form>
        </div>
    )
}
export default CheckoutForm
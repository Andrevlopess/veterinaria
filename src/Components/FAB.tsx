import WhatsAppIcon from '../assets/WhatsAppIcon.png'

export default function FAB() {
    return (
        <div className="fixed right-6 bottom-6 p-4 items-center flex justify-center z-50 backdrop-blur-md rounded-full">
            <a href="https://wa.me/11954291628">
                <img src={WhatsAppIcon} className="w-10 h-10" alt="whatsapp image link" />
            </a>
        </div>
    )
}
import { useState } from 'react'
import AccordionCard from './AccordionCard'
import './App.scss'

function App() {

 const faqs = [
  {
    "id": 1,
    "question": "What is your return policy?",
    "answer": "Our return policy allows customers to return items within 30 days of purchase. Please visit our 'Returns' page for more details on how to initiate a return."
  },
  {
    "id": 2,
    "question": "How can I track my order?",
    "answer": "To track your order, log in to your account and go to the 'Order History' section. You can find detailed information about the status and location of your order there."
  },
  {
    "id": 3,
    "question": "Do you offer international shipping?",
    "answer": "Yes, we offer international shipping to most countries. Shipping rates and delivery times may vary. Please check our 'Shipping' page for more information."
  },
  {
    "id": 4,
    "question": "What payment methods do you accept?",
    "answer": "We accept credit/debit cards (Visa, MasterCard, American Express) and PayPal. For additional payment options, please contact our customer support."
  },
  {
    "id": 5,
    "question": "How can I contact customer support?",
    "answer": "You can contact our customer support team via email at support@example.com or by calling our toll-free number at 1-800-123-4567. Our support hours are Monday to Friday, 9 am to 5 pm."
  }
]

const [curOpen, setcurOpen] = useState(null)


  return (
    <>
    <div className="flex_accrd">
    {
      faqs.map(el => (
        <AccordionCard faqQuestion={el.question} faqAnswer={el.answer} curOpen={curOpen} setcurOpen={setcurOpen} qaID={el.id} key={el.id} />
      ))
    }

 
    </div>
    </>
  )
}

export default App

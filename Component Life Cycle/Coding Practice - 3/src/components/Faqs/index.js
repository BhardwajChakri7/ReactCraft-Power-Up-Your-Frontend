import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="main-bg-container">
      <div className="sub-bg-container">
        <h1 className="main-heading">FAQs</h1>
        <ul className="unorderedList">
          {faqsList.map(eachFaq => (
            <FaqItem eachFaq={eachFaq} key={eachFaq.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs

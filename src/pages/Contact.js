import {FaPhone, FaEnvelope} from "react-icons/fa"

const Contact = () => {
  return (
    <>
    <section className="contacts">
    <h1>Contact Me</h1>
      <ul>
        <li><a href="tel:0720814519"><FaPhone /> +254 (0) 720 814 519</a></li>
        <li><a href="mailto:oremgitonga22@gmail.com"><FaEnvelope />{" "} oremgitonga22@gmail.com</a></li>
      </ul>
    </section>
    </>
  )
}

export default Contact
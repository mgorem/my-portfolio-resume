import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"

const Homepage = () => {
  return (
    <>

    <section className="homepage">
      <div className="overlay">
      <h1>Orem Gitonga</h1>
      <p>Full Stack Developer</p>

      <ul>
      <li><a href="https://www.linkedin.com/in/orem-gitonga-b37b9319b/" target="_blank" rel="noopenner noreferrer"><FaLinkedin /></a></li>
        <li><a href="https://twitter.com/mg_orem" target="_blank" rel="noopenner noreferrer"><FaTwitter /></a></li>
        <li><a href="https://github.com/mgorem" target="_blank" rel="noopenner noreferrer"><FaGithub /></a></li>
      </ul>
      </div>
    </section>

    </>
  )
}

export default Homepage
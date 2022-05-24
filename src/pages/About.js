const About = () => {
    return ( 
        <>
        <section className="about">
            <div>
                <h1>About</h1>

                <div className="cards">
                    <img className="photo" src="../images/oremprofile3.jpg" alt="Orem's face"/>
                    <article>
                        Hi there friend 👋️ <br />
                        I'm Orem Gitonga, currently Pursuing a bachelor's degree 
                        in Mathematics and Computer Science at Multimedia 
                        University of Kenya. I love programming and using 
                        my skills to leverage on technology. I'm also a Software
                        developer currently building web applications as my 
                        core specialization. I am a long-life learner always 
                        ready to learn something new.
                        Here is a list of tools I use mostly as a developer:<br />
                        <hr style={{marginTop: "10px"}}/> <br />
                        <p style={{fontWeight: "bold",
                                   marginBottom: "5px"
                                }}>
                            Tools Section 🛠️
                            </p>
                        <ul>
                            <li>Frontend: HTML, CSS, JavaScript</li>
                            <li>Backend: Nodejs, MongoDB, PostgreSQL Firebase</li>
                            <li>Libraries: Reactjs, Nextjs</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default About;
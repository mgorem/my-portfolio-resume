import { Link } from "react-router-dom"

const Error = () => {
  return (
    <>
    <section className="error" style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}>
    <h1>Error 404. Page Not Found</h1>
    <Link to="/" style={{
      backgroundColor: "#3E5151",
      padding: 10, color: "#fff"}}
      >
        Homepage
      </Link>
    </section>
    </>
  )
}

export default Error
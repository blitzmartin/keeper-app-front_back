import '../Footer.css'

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div className="Footer">
            <h2>Copyright &copy; {year}</h2>
        </div>
    )
}

export default Footer
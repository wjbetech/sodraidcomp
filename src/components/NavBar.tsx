export default function NavBar() {
  return (
    <nav>
      <div className="flex gap-6 p-4 m-auto justify-center">
        <a href="/about">
          <h3>About</h3>
        </a>
        <a href="/faq">
          <h3>FAQ</h3>
        </a>
      </div>
    </nav>
  )
}
export function Header() {
  const links = ["about", "experience", "work", "contact"];
  return (
    <>
      <section className="header">
        <div className="logo">a.</div>
        <nav className="clean-list">
          {links.map((link) => {
            return (
              <li key={link.idx}>
                <a href={`#${link}`} className='capitalize'>{link}</a>
              </li>
            );
          })}
        </nav>
      </section>
    </>
  );
}

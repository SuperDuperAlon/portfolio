export function Header() {
  const links = ["About", "Expirience", "Work", "Contact"];
  return (
    <>
      <section className="header">
        <div className="logo">Alon</div>
        <nav className="clean-list">
          {links.map((link) => {
            return (
              <li key={link.idx}>
                <a href="#{link}">{link}</a>
              </li>
            );
          })}
        </nav>
      </section>
    </>
  );
}

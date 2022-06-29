export default function MobileNavigation(props) {
  const nav = props.navigation
  const desktopNav = nav.map((action) => (
    <div key={action.title}>
      <a href={action.url} target="_blank" rel="noreferrer">
        {action.title}
      </a>
    </div>
  ));

  return (
    <nav className="flex-wrap gap-4 tracking-wide hidden md:flex">
      {desktopNav}
    </nav>
  )
}
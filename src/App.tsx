import thunderLogo from '/thunder.png'

import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://github.com/thunder-app/thunder" target="_blank">
          <img src={thunderLogo} className="logo" alt="Thunder logo" />
        </a>
      </div>
      <h1>Thunder</h1>
      <h2>An open-source, cross-platform Lemmy client for iOS and Android</h2>
      <p>Fully free of advertisements and trackers</p>
      <br />

      <p className="read-the-docs">
        Click <a href="https://github.com/thunder-app/thunder"> here</a> to learn more
      </p>
    </>
  )
}

export default App

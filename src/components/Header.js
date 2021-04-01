import 'bootstrap/dist/css/bootstrap.css'

const Header = () => {

  return <header className="p-3 row text-center">
    <div className="col-lg-8 my-auto text-lg-start">
      <div>
        <h1 className="display-1 text-white">Raphaël Pellet</h1>
        <p className="display-3 text-white">26 ans</p>
      </div>
      <div className="display-3 d-flex justify-content-center justify-content-lg-start gap-3 my-3">
        <a aria-label="Mon GitHub" href="https://github.com/RaphaelHardFork" target="_blank" rel="noopener noreffer"><span
          className="icons fab fa-github"></span></a>
        <a aria-label="Mon LinkedIn" href="https://www.linkedin.com/in/rapha%C3%ABl-pellet-7757ab129/" target="_blank"
          rel="noopener noreffer"><span class="icons fab fa-linkedin"></span></a>
        <a aria-label="Mon Discord" href="@Raphael Pellet#8885" target="_blank" rel="noopener noreffer"><span
          className="icons fab fa-discord"></span></a>
        <a aria-label="Mon Telegram" href="@raphael_pellet" target="_blank" rel="noopener noreffer"><span
          className="icons fab fa-telegram"></span></a>
        <a aria-label="Mon email" href="mailto:raphael.pellet@protonmail.com" target="_blank"
          rel="noopener noreffer"><span class="icons fas fa-envelope-square"></span></a>
      </div>

    </div>
    <div class="col-lg-4">
      <img src="https://avatars.githubusercontent.com/u/78814928?s=460&u=f69a7ffbfdacfea51d4e7254b908d0ce5ba1fc29&v=4"
        alt="Un petit singe allongé sur une barrière" width="100%" class="rounded-circle mb-3" />
    </div>
  </header>
}

export default Header;
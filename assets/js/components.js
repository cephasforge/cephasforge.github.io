function buildNavbar() {
    let navbar = document.getElementById('navbar');

    navbar.innerHTML = `
            <div class="container-fluid w-75">

            <a class="navbar-brand fs-2 fw-bold text-white" href="#" id="navLogo">CEPHAS FORGE</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarList"
                aria-controls="navbarList" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarList">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link text-white fs-5" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link text-white fs-5" href="index.html#projects-section">Projects</a></li>
                    <li class="nav-item"><a class="nav-link text-white fs-5" href="index.html#skills-section">Skills</a></li>
                </ul>
            </div>
        </div>
    `;    
}
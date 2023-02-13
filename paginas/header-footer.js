//header-footer.js
function addHeaderFooter(headerContent, footerContent) {
  const headerEl = document.createElement('header');
  headerEl.innerHTML = headerContent;
  document.body.insertBefore(headerEl, document.body.firstChild);

  const footerEl = document.createElement('footer');
  footerEl.innerHTML = footerContent;
  document.body.appendChild(footerEl);
}

const header = `
  <header>
  <nav>
       <input type="checkbox" id="check">
     <label for="check" class="checkbtn">
       <i class="fa-solid fa-bars"></i>
     </label>
     <a href="#" class="enlace">
       <img src="imagenes/lst.png" alt="logotipo de ST" class="logo">
     </a>
       <ul>
        <li><a class="active" href="#">Inico</a></li>
          <li><a href="paginas/servicios.html">Servicios</a></li>
          <li><a href="paginas/nosotros.html">Nosotros</a></li>
          <li><a href="paginas/blog.html">Blog</a></li>
          <li><a href="paginas/contacto.html">Contacto</a></li>
       </ul>   
    </nav>
  </header>
`;

const footer = `
  <footer>
  <div class="contenedor">
      <h2 class="titulo-seccion"> Contáctanos</h2>
  </div>
  <div class="redes-sociales">
      <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
      <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
      <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
      <a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>
      <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
    </div>
  <div class="contenedor"></div>
  <p class="copy">© 2023 MO dsng. todos los derechos reservados.</p>
</footer>
<script src="https://kit.fontawesome.com/4c1965afad.js" crossorigin="anonymous"></script>
<div style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
  <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #87d4d987;"></path></svg></div>
  <script src="script.js"></script>
  </footer>
`;

document.addEventListener('DOMContentLoaded', function() {
  addHeaderFooter(header, footer);
});


const loginIcon = document.getElementById("loginIcon");
const loginForm = document.getElementById("loginForm");

loginIcon.addEventListener("click", function () {
  loginForm.style.display = (loginForm.style.display === "none") ? "block" : "none";
});

  }
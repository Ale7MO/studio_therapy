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

document.write(header);
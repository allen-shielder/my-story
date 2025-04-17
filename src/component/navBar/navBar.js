import { LivixElement } from "../../Livix.js";

const PATH = "src/component/navBar";

class NavbarView extends LivixElement {
  static attrs = [];

  connect() {
    this.applyStyles(`${PATH}/navBar.css`);
    this.shadowRoot
      .querySelector(".menu-button")
      ?.addEventListener("click", () => {
        this.shadowRoot
          .querySelector(".overlay-menu")
          ?.classList.toggle("show");
      });
  }

  render() {
    return `  
        <div class="navbar">
          <a class="nav-left" href="#">Allen Shielder</a>
          <div class="nav-center">
            <a class="nav-link" href="#personal-information">Personal Information</a>
            <a class="nav-link" href="#skills-summary">Skills& Summary</a>
            <a class="nav-link" href="#work-history">Work History</a>
            <a class="nav-link" href="#my-story">My Story</a>
            <a class="nav-link" href="src/component/navBar/resume/resume.pdf" download="YILUN_7788822987">
              My Resume
            </a>
            <a class="nav-link" href="mailto:allenshielder1994@outlook.com">
               <img class="ico" src="src/component/navBar/ico/png/email.png" alt="in"></img>
            </a>
            <a class="nav-link" href="https://www.linkedin.com/in/yilun-wu-525b411b0/" target="_blank">
             <img class="ico" src="src/component/navBar/ico/png/linkedin5.png" alt="in"></img>
            </a>
          </div>
          <button class="menu-button" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
  
        <div class="overlay-menu">
          <a href="#personal-information">Personal Information</a>
          <a href="#skills-summary">Skills& Summary</a>
          <a href="#work-history">Work History</a>
          <a href="#my-story">My Story</a>
          <a class="nav-link" href="src/component/navBar/resume/resume.pdf" download="YILUN_7788822987">
            My Resume
          </a>
          <a href="mailto:allenshielder1994@outlook.com">mail</a>
          <a href="https://www.linkedin.com/in/yilun-wu-525b411b0/" target="_blank">in</a>
        </div>
      `;
  }


  didrender() {
    const btn = this.shadowRoot.querySelector(".menu-button");
    const overlay = this.shadowRoot.querySelector(".overlay-menu");
  
    btn?.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent bubbling and avoid triggering document click events when clicking a button
      overlay.classList.toggle("show");
    });
  
    // Close the menu when clicking elsewhere on the page
    document.addEventListener("click", (e) => {
      // 检查是否点击在 shadow DOM 外
      if (!this.contains(e.target)) {
        overlay.classList.remove("show");
      }
    });
  
    // Automatically close overlay-menu when the screen becomes larger
    const closeOverlayOnResize = () => {
      if (window.innerWidth > 900 && overlay.classList.contains("show")) {
        overlay.classList.remove("show");
      }
    };
  
    closeOverlayOnResize(); // Initialization state
    window.addEventListener("resize", closeOverlayOnResize);
  }
  
  
}

customElements.define("navbar-view", NavbarView);

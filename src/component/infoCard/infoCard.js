import { LivixElement } from "../../Livix.js";

const PATH = "src/component/infoCard";

class infoCard extends LivixElement {
  constructor() {
    super();
    this.applyStyles(`${PATH}/infoCard.css`);
    this.infoCardTitle = this.getAttribute("title");
    this.infoCardColor = this.getAttribute("card-color");
  }

  styleInfoCard() {
    return `
        .info-card {
          background: ${this.infoCardColor};
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          width: 80%;
          height: auto;
          position: static;
          margin: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
        }`;
  }

  render() {
    return `
        <style>
            ${this.styleInfoCard()}
        </style>
        <h1 class="info-title reveal">
            ${this.infoCardTitle}
        </h1>
        <div class="info-card reveal">
        <div class="info-left">
          <slot name="info-left">
        </div>

        <div class="info-right">
          <slot name="info-right">
        </div>
            
        </div>`;
  }

  didrender() {
    let lastY = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentY = entry.boundingClientRect.y;

          if (entry.isIntersecting && currentY < lastY) {
            // Only scroll down into the viewport to trigger the animation
            entry.target.classList.add("show");
          }

          if (!entry.isIntersecting && currentY > lastY) {
            // Only scrolling away from the viewport triggers the "disappear" animation
            entry.target.classList.remove("show");
          }

          lastY = currentY;
        });
      },
      {
        threshold: 0.2,
      }
    );

    this.shadowRoot
      .querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
  }
}

customElements.define("info-card", infoCard);

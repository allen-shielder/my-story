import { LivixElement } from "../../Livix.js";
import { EXPCARD, contentHandler } from "./const.js";

const PATH = "src/component/expCard";

class ExperienceCard extends LivixElement {
  connect() {
    this.applyStyles(`${PATH}/expCard.css`);
    this.company = this.getAttribute('company');
    this.date = this.getAttribute('date');
    this.job = this.getAttribute('job');

    this.jobContent = contentHandler(EXPCARD[this.company], (value) => `<li>${value}</li>`);
}


  

  render() {
    return `
    
      <div class="experience-card reveal-experience">
        <div class="exp-left">
          <div class="exp-date">${this.date}</div>
          <div class="exp-company">${this.company}</div>
        </div>
        <div class="exp-right">
          <h3 class="exp-title">${this.job}</h3>
          <ul class="exp-details">
            ${this.jobContent}
          </ul>
        </div>
      </div>
    `;
  }

  didrender() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    this.shadowRoot
      .querySelectorAll(".reveal-experience")
      .forEach((el) => observer.observe(el));
  }
}

customElements.define("exp-card", ExperienceCard);

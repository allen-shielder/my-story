import { LivixElement } from "../../Livix.js";
import { SKILLS, contentHandler } from "./const.js";

const PATH = "src/component/skillSummary";

class Skills extends LivixElement {
  connect() {
    this.applyStyles(`${PATH}/skillSummary.css`);

    this.skillsContent = contentHandler(
      SKILLS,
      (value, index) => `
        <div class="skill">
            <label>${value[0]}</label>
            <div class="skill-bar">
                <input id="${index}" type="range" value="${value[1]}" class="animated-range" disabled />
                <span>${value[1]}%</span>
            </div>
        </div>`
    );
  }

  render() {
    return `
    <div class="reveal">
        ${this.skillsContent}
    </div>
    
`;
  }
  didrender() {
    const rangeBar = this.shadowRoot.querySelectorAll(".animated-range");
    const targetValue = [];
    rangeBar.forEach((range) => {
      targetValue.push(parseInt(range.value));
    });
  
    let lastY = 0;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentY = entry.boundingClientRect.y;
  
          // Trigger animation only when scrolling down
          if (entry.isIntersecting && currentY < lastY) {
            entry.target.classList.add("show");
  
            entry.target.querySelectorAll(".animated-range").forEach((range, index) => {
              const target = targetValue[index];
              let current = 0;
              range.value = 0;
              const interval = setInterval(() => {
                if (current >= target) {
                  clearInterval(interval);
                } else {
                  current++;
                  range.value = current;
                }
              }, 10);
            });
          }
  
          // Trigger the reset animation only when scrolling away
          if (!entry.isIntersecting && currentY > lastY) {
            entry.target.classList.remove("show");
  
            entry.target.querySelectorAll(".animated-range").forEach((range) => {
              range.value = 0;
            });
          }
  
          lastY = currentY;
        });
      },
      {
        threshold: 0.2,
      }
    );
  
    this.shadowRoot.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }
  
}

customElements.define("hero-skills", Skills);

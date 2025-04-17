import { LivixElement } from "../../Livix.js";

import { MYSTORY, contentHandler } from "./const.js";

const PATH = "src/component/timeline";

class timeline extends LivixElement {
    connect() {
        this.applyStyles(`${PATH}/timeline.css`);
        this.mystoryContent = contentHandler(MYSTORY, (value) => `
        <div class="timeline-item ${value[0]}">
            <div class="timeline-content">
                <div class="timeline-date">${value[1]}</div>
                <div class="timeline-item-border">
                    <h3>${value[2]}</h3>
                    <p>${value[3]}</p>
                    <p>${value[4]}</p>
                </div>
            </div>
        </div>`);
      }


  render() {
    return `
        <h1 class="timeline-title reveal">My Story</h1>
        <div class="timeline-wrapper reveal">
            <div class="timeline-endpoint top"></div>
            <div class="timeline">
                ${this.mystoryContent}
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

customElements.define("my-story", timeline);

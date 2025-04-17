import { LivixElement } from "../../Livix.js";
import { SUMMARY, contentHandler } from "./const.js";

const PATH = "src/component/skillSummary";

class Summary extends LivixElement {

  connect() {
    this.applyStyles(`${PATH}/skillSummary.css`);
    this.summaryContent = contentHandler(SUMMARY, (value) => `<li>${value}</li>`);
  }

  render() {
    return `
          <ul class="summary-list">
            ${this.summaryContent}
          </ul>`;
  }
}

customElements.define("hero-summary", Summary);
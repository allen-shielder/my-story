import { LivixElement } from "../../Livix.js";
import {INFORMATION, contentHandler} from "./const.js"

const PATH = "src/component/personalInfo";

class Information extends LivixElement {

  connect() {
    this.rightTitle = this.getAttribute("right-title");
    this.applyStyles(`${PATH}/personalInfo.css`);
    this.informationContent = contentHandler(INFORMATION, (value) => `<tr><td>${value[0]}</td><td>${value[1]}</td></tr>`);
  }

  render() {
    return `
        <h1 class="info-content-title">${this.rightTitle}</h1>
            <table class="info-content">
                ${this.informationContent}
            </table>`;
  }
}

customElements.define("information-l", Information);

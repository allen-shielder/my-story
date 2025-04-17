import { LivixElement } from "../../Livix.js";
import { ABOUTME, contentHandler } from "./const.js";

const PATH = "src/component/personalInfo";

class aboutMe extends LivixElement {

  connect() {
    this.leftTitle = this.getAttribute("left-title");
    this.applyStyles(`${PATH}/personalInfo.css`);
    this.aboutMeContent = contentHandler(ABOUTME, (value) => `<p class="info-content">${value}</p>`);
  }

  render() {
    return `
        <h1 class="info-content-title">${this.leftTitle}</h1>
        ${this.aboutMeContent}`;
  }
}

customElements.define("about-me", aboutMe);

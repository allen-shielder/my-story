import { LivixElement } from "../../Livix.js";

const PATH = "src/component/typingEffect";

class TypingEffect extends LivixElement {
  static attrs = ['phrases'];

  constructor() {
    super();
    this.phrases = [];
    this.currentPhraseIndex = 0;
    this.currentText = "";
    this.isDeleting = false;
    this.speed = 120;
  }

  connect() {
    this.applyStyles(`${PATH}/typingEffect.css`);
    const attr = this.getAttribute('phrases');
    if (attr) {
      try {
        this.phrases = JSON.parse(attr);
      } catch (e) {
        console.error("Invalid phrases JSON:", attr);
      }
    }
    this.type();
  }

  render() {
    return `
      <style>
        .typing {
          font-size: 1.4rem;
          color: white;
          font-weight: 300;
          white-space: nowrap;
        }

        .typing::after {
          content: '|';
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      </style>
      <span class="typing">${this.currentText}</span>
    `;
  }

  type() {
    const fullText = this.phrases[this.currentPhraseIndex] || "";

    if (this.isDeleting) {
      this.currentText = fullText.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = fullText.substring(0, this.currentText.length + 1);
    }

    this._renderInternal();

    let nextSpeed = this.isDeleting ? 60 : 120;

    if (!this.isDeleting && this.currentText === fullText) {
      this.isDeleting = true;
      nextSpeed = 1000;
    } else if (this.isDeleting && this.currentText === "") {
      this.isDeleting = false;
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      nextSpeed = 500;
    }

    setTimeout(() => this.type(), nextSpeed);
  }
}

customElements.define('typing-effect', TypingEffect);

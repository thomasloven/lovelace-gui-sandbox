import { LitElement, html, css } from "/card-tools/lit-element.js";
import { lovelace } from "/card-tools/hass.js";

class GuiSandbox extends LitElement {
  setConfig(config) {
  }

  render() {
    return html`
      <ha-card
      @click=${this.clicked}
      >
        <span>
          Sandbox mode
        </span>
      <ha-icon
        .icon="${ lovelace().mode === "yaml"
          ? "mdi:shovel"
          : "mdi:shovel-off"
        }"
        style="${lovelace().editMode
          ? "color: green"
          : ""
        }"
        ></ha-icon>
      </ha-card>
    `;
  }

  clicked() {
    if(lovelace().mode !== "yaml") return;
    lovelace().setEditMode(!lovelace().editMode);
    this.requestUpdate();
  }

  static get styles() {
    return css`
      ha-card {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 4% 0;
        font-size: 1.2rem;
      }
      ha-icon {
        width: 40%;
        height: auto;
        color: var(--paper-item-icon-color, #44739e);
      }
    `;
  }
}

customElements.define('gui-sandbox', GuiSandbox);

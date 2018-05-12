import Component from '../../lib/Component';

class Button extends Component {
  constructor({ title, style }) {
    super();
    this.title = title;
    this.style = style;
  }
  
  render() {
    return `
      <button class="${ this.style } common_button">${ this.title }</button>
    `;
  }
}

export default Button;
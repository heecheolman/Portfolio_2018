import Component from './../../lib/Component';
import Title from './../atoms/Title';

class TitleArea extends Component {
  constructor({ title, style }) {
    super();
    this.title = new Title({
      title: title,
      style: style,
    });
  }
  
  render() {
    return `
      <div class="flex-container flex-center-sort flex-column">
        ${this.title.render()}
      </div>
    `;
  }
}

export default TitleArea;
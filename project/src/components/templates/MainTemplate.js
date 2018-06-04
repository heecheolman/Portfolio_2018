import Component from '../../lib/Component';
import ContentBox from '../organisms/ContentBox';
import RightArrowBox from './../organisms/RightArrowBox';


class MainTemplate extends Component {
  constructor() {
    super();
    this.contentBox = new ContentBox();
    this.rightArrowBox = new RightArrowBox({
      selector: '.arrow-right',
      template: '.template-main',
      pageName: 'RoadPage',
    });
  }
  
  mount(event){
    this.contentBox.mount(event);
    this.rightArrowBox.mount(event);
  }
  
  render() {
    return `
      <div class="template-main flex-container flex-center-sort">
        ${this.rightArrowBox.render()}
        ${this.contentBox.render()}
      </div>
    `;
  }
}

export default MainTemplate;
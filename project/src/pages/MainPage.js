import Component from './../lib/Component';
import Template from './../components/templates/MainTemplate';

// 메인페이지
class MainPage extends Component{
  constructor() {
    super();
    this.template = new Template();
  }
  
  mount(event){
    this.template.mount(event);
  }
  
  render() {
    return `
      ${this.template.render()}
    `;
  }
}

export default MainPage;
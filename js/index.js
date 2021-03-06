// // JS goes here

class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      // console.log(this.data);
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
      // console.log(this.itemElement);
      this.tabItem = new TabItem(this.itemElement);

      this.element.addEventListener('click', () => {this.select() });
    };
  
    select() {
      const links = document.querySelectorAll('.tab');

      links.forEach(item => item.classList.remove('tabs-link-selected'));

      this.element.classList.add('tabs-link-selected');

      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      const items = document.querySelectorAll('.tabs-item');

      items.forEach(item => item.classList.remove('tabs-item-selected'));

      this.element.classList.add('tabs-item-selected');
    }
  }
  
  let links = document.querySelectorAll('.tab');
//   console.log(links);

  links = Array.from(links).map(link => new TabLink(link));
//   console.log(links);

links[0].select();


//   Navigatioon System Design
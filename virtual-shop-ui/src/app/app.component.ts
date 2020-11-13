import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'virtual-shop-ui';
  listOfItems = [{ 'itemName': 'Milk', 'itemImageUrl': 'https://lh3.googleusercontent.com/proxy/7Kvmt_iAsljpZP6mg8Tf0Gi-DRa1GpJ63ODhMOL-loJB_rs4MjHA4cSA6JcD9Ey1WWgLFctdGoQoufgHvUS60XvH0HmO9dPL7kAofgw_oMz9csgq3ncA8zZtbOTU5wuOFR3qYM6WhG3_Ax5leIeso997cbChaQ', 'itemLatestPrice': '$1.95', 'brand': 'Barums' },
  { 'itemName': 'Eggs', 'itemImageUrl': 'https://assets.tetrapak.com/static/publishingimages/find-by-food/rollup/food/eggs.jpg', 'itemLatestPrice': '$2.35', 'brand': 'Tysons' },
  ];

  listOfFruitsAndVegies = [
    { 'itemName': 'Apples', 'itemImageUrl': 'https://images.freshop.com/86164/0eb3ceb0d60091eab3496729e6eaadaf_medium.png', 'itemLatestPrice': '$4.12', 'brand': 'Martins' },
    { 'itemName': 'Oranges', 'itemImageUrl': 'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684703857784/3651b38d8b98f86c8ba75bef315085b1_large.png&width=256&type=webp&quality=40', 'itemLatestPrice': '$4.12', 'brand': 'Martins' },
  ];

}

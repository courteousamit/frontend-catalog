import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-product-list-sidebar',
  templateUrl: './product-list-sidebar.component.html',
  styleUrls: ['./product-list-sidebar.component.scss']
})
export class ProductListSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openCollapseCategorySubMenu(event) {
      event.preventDefault();
      //$('#category-menu-active').find('.cp-category-sub').hide();
      $(event.target).parent().find('.cp-category-sub').slideToggle('slow');
  }

}


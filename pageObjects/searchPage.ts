import {Locator, Page } from '@playwright/test';
import User from '../models/user.model';


export class SearchPage {
  readonly page: Page;
  readonly user: User;
  readonly searchInputLocator: Locator;
  readonly searchButtonLocator: Locator;


  constructor(page: Page, user:User) {
    this.page = page;
    this.user = user
    this.searchInputLocator = page.locator('input[placeholder="Enter an ID"]')
    this.searchButtonLocator= page.locator('button', {hasText: 'Fetch User Information'})

  }

  async searchById() {
    await this.searchInputLocator.fill(this.user.id);
    await this.searchButtonLocator.click();
  }


}
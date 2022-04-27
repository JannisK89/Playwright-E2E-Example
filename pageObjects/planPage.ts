import { expect, Locator, Page } from '@playwright/test';
import User from '../models/user.model'; 

export class PlanPage {
  readonly page: Page;
  readonly user: User;
  readonly texts: string[];
  readonly idLocator: Locator;
  readonly firstNameLocator: Locator;
  readonly lastNameLocator: Locator;
  readonly addressLocator: Locator;
  readonly createNewLocator: Locator;
  readonly firstTextLocator: Locator;
  readonly secondTextLocator: Locator;
  readonly thirdTextLocator: Locator;
  readonly date: string
  readonly dateLocator: Locator;

  constructor(page: Page, user: User, texts: string[]) {
    this.page = page;
    this.user = user;
    this.texts = texts;
    this.idLocator = page.locator(`text=ID${user.id}`);
    this.firstNameLocator = page.locator(`text=First Name${user.firstName}`);
    this.lastNameLocator = page.locator(`text=Last Name${user.lastName}`);
    this.addressLocator = page.locator(`text=Address${user.address}`);
    this.createNewLocator= page.locator('button', {hasText: 'Create New Plan'});
    this.firstTextLocator = page.locator(`text=Users Wishes${texts[0]}`)
    this.secondTextLocator = page.locator(`text=Job Market${texts[1]}`)
    this.thirdTextLocator = page.locator(`text=Our Assessment${texts[2]}`)
    this.date = new Date().toISOString().slice(0, 10)
    this.dateLocator = page.locator(`text=Created at: ${this.date}`)
  }

  async assertUser() {
    await expect(this.idLocator).toBeVisible();
    await expect(this.firstNameLocator).toBeVisible();
    await expect(this.lastNameLocator).toBeVisible();
    await expect(this.addressLocator).toBeVisible();
  }

  async assertTexts() {
    await expect(this.firstTextLocator).toBeVisible()
    await expect(this.secondTextLocator).toBeVisible()
    await expect(this.thirdTextLocator).toBeVisible()
  }

  async createNewPlan() {
    await this.createNewLocator.click();
  }

  async assertDate() {
    await expect(this.dateLocator).toBeVisible();
  }
  


}
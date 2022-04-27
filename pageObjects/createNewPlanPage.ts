// playwright-dev-page.ts
import {Locator, Page } from '@playwright/test';

export class CreateNewPlanPage {
  readonly page: Page;
  readonly texts: string[];
  readonly firstInputLocator: Locator;
  readonly secondInputLocator: Locator;
  readonly thirdInputLocator: Locator;
  readonly createNewLocator: Locator;


  constructor(page: Page, texts: string[]) {
    this.page = page;
    this.texts = texts;
    this.firstInputLocator = page.locator('textarea[type="text"]').nth(0);
    this.secondInputLocator = page.locator('textarea[type="text"]').nth(1);
    this.thirdInputLocator = page.locator('textarea[type="text"]').nth(2);
    this.createNewLocator = page.locator('button', {hasText: 'Create New Plan'})
  }

  async createNewPlan() {
    await this.firstInputLocator.fill(this.texts[0]);
    await this.secondInputLocator.fill(this.texts[1]);
    await this.thirdInputLocator.fill(this.texts[2]);
    await this.createNewLocator.click();
  }



}
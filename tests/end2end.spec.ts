import { test} from '@playwright/test';
import User from '../models/user.model';
import { PlanPage } from '../pageObjects/planPage';
import {SearchPage} from '../pageObjects/searchPage';
import {CreateNewPlanPage} from '../pageObjects/createNewPlanPage'
import {createRandomTexts} from '../util/randomTextCreate'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
});


test.describe('E2E Tests', () => {
  test('When creating a new plan the customers plan should update accordingly', async ({ page }) => {

    // ARRANGE
    const user: User = {id:'3', firstName: 'Rosemary', lastName: 'Garcia', address: '4846 Goldie Lane, Ohio'}
    const texts = createRandomTexts()
    const searchPage = new SearchPage(page, user);
    const planPage = new PlanPage(page, user, texts)
    const createNewPlanPage = new CreateNewPlanPage(page, texts)

    // ACT
    await searchPage.searchById()
    await planPage.assertUser()
    await planPage.createNewPlan()
    await createNewPlanPage.createNewPlan();
    await planPage.assertTexts();
    await planPage.assertDate();


  })})

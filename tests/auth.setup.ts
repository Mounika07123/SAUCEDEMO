import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { testconfig } from '../test.config';
import { Home } from '../pages/Homepage';

setup('authenticate', async ({ page }) => {
  const config = new testconfig();
  const login = new LoginPage(page);

  await page.goto('/');
  await login.enterusername(config.Username);
  await login.enterpassword(config.password);
  await login.clicklogin();
  await page.waitForURL('**/inventory.html')

  const home = new Home(page)

//valid hompage text
 await home.ht()

  // Save authenticated state
  await page.context().storageState({ path: 'storageState.json' });
});
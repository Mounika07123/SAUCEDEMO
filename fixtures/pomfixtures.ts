import {test as baseTest} from "@playwright/test";
import { LoginPage } from "../pages/loginpage";
import { Home } from "../pages/Homepage";

type MyPOMFixtures = {
    loginpage : LoginPage;
    homepage :Home;
}

export const test = baseTest.extend<MyPOMFixtures>({

    loginpage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    homepage: async ({ page }, use) => {
        await use(new Home(page));
    },


})
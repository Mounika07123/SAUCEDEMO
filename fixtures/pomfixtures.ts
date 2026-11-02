import {test as baseTest} from "@playwright/test";
import { LoginPage } from "../pages/loginpage";
import { Home } from "../pages/Homepage";
import { cart } from "../pages/cartpage"
import {Logout} from "..."

type MyPOMFixtures = {
    loginpage : LoginPage;
    homepage :Home;
    cartPage:cart
}

export const test = baseTest.extend<MyPOMFixtures>({

    loginpage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    homepage: async ({ page }, use) => {
        await use(new Home(page));
    },

     cartPage: async ({ page }, use) => {
        await use(new cart(page));
    },

})
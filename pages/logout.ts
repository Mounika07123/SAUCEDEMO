import {Page,expect,Locator} from "@playwright/test"

import {Home} from "./Homepage";

export class Logout{

    //Locators

    private readonly page: Page;
    private readonly logout: Locator;
    private readonly title: Locator;

    //constructor
    constructor(page:Page)
    {
        this.page = page;
        this.logout = page.locator("#logout_sidebar_link")
        this.title = page.getByText("Swag Labs")
    }

    //Action Methods

    async logoutclick() :Promise<void>
    {
       await this.logout.click();
       await expect(this.title).toHaveText("Swag Labs")
    }
}
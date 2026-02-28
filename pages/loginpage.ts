import { Page, expect, Locator } from "@playwright/test"

export class LoginPage {

    private readonly page: Page

    //locators
    private readonly username: Locator;
    private readonly password: Locator;
    private readonly Loginbtn: Locator;
    private readonly logo: Locator;
    private readonly errortext:Locator;

    //constructor

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator("#user-name")
        this.password = page.locator("#password")
        this.Loginbtn = page.locator("#login-button")
        this.logo = page.getByText("Swag Labs")
        this.errortext = page.locator("[data-test='error']")


    }

    //action methods

    //set username in the username field

    async enterusername(Username :string): Promise<void>{
        await this.username.fill(Username)
    }

    //set password in the password field

    async enterpassword(password :string) : Promise<void>{
        await this.password.fill(password)
    }

    //click on login button

    async clicklogin ()
    {
        await this.Loginbtn.click()
    }

    //logo validation
    async logoval(): Promise<void>
    {
        await expect(this.logo).toHaveText("Swag Labs")
    }
    
    //error message
    async  geterrrormessage() :Promise<string |null>
    {
        return (await this.errortext.textContent());
    }

}
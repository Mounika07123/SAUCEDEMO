import {Page,test,expect,Locator} from "@playwright/test"

export class cart{
    private readonly page: Page;
    //Locators
    private readonly title: Locator;
    private readonly item : Locator;
    private readonly link: Locator;
    private readonly back : Locator;
    private readonly continue: Locator;

    //Constructor
    constructor(page: Page){

     this.page = page;
     this.title = page.locator(".title")
     this.item = page.locator("#item_4_title_link>div")
     this.link= page.locator("#item_4_title_link")
     this.back = page.locator("#back-to-products")
     this.continue = page.locator("#continue-shopping")

    }

    //Action methods

    async titlecart(): Promise<string|null>{

      return await this.title.textContent();
    }

    async cartitem(): Promise<string|null>{
        return await this.item.textContent();
    }
    async cartlink():Promise<void>{
       await this.link.click();
    
    }

    async backlink():Promise<void>{
    await this.back.click();
   
    }

}
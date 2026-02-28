import { Page, expect, Locator } from "@playwright/test";

export class Home {
    private readonly page: Page;
    //Locators
    private readonly item: Locator;
    private readonly menu: Locator;
    private readonly about: Locator;
    private readonly Hometitle: Locator;
    private readonly price: Locator;
    private readonly dropdown: Locator;
    private readonly add: Locator;
    private readonly cart: Locator;
    private readonly cartbadge : Locator;

    //Constructor
    constructor(page: Page) {
        this.page = page;
        this.item = page.locator("div[data-test='inventory-item-name']")
        this.menu = page.locator("#react-burger-menu-btn")
        this.about = page.locator("#about_sidebar_link")
        this.Hometitle = page.getByText("Swag Labs")
        this.price = page.locator(".inventory_item_price")
        this.dropdown = page.locator(".product_sort_container")
        this.add = page.locator(".pricebar>button")
        this.cart = page.locator(".shopping_cart_link")
        this.cartbadge = page.locator(".shopping_cart_badge")
    }

    //Action methods

    //validate Hometitle

    async ht(): Promise<void> {
        await expect(this.Hometitle).toHaveText("Swag Labs")
    }

    //extract all the items title
    async itemText(): Promise<string[]> {
        const itemstitle: string[] = await this.item.allTextContents();
        return itemstitle;
    }

    //extract price of the items

    async itemprice(): Promise<number[]> {
        const Stringprices: string[] = await this.price.allTextContents();
        const numberprices: number[] = Stringprices.map(price => parseFloat(price.replace('$', '').trim()))
        return numberprices;

    }

    //Extract dropdown values

    async dropval(): Promise<void> {
        await this.dropdown.click();

    };

    //select the dropdown actions
    readonly sortValues = {
        nameAZ: 'az',
        nameZA: 'za',
        priceLowHigh: 'lohi',
        priceHighLow: 'hilo'
    };

    async selectSortOption(value: string): Promise<void> {
        await this.dropdown.selectOption({ value });

    }


    //Add first item to cart
    async selectAddCart(): Promise<void> {
        await this.add.first().click();
        
    }


    //Returning only locator - hence async,promise<void> is not required
    //verify the text after adding the item to cart
    remove() {
        return this.add.first();
    }

    //shoping cart link
    async cartimage(): Promise<void> {
        await this.cart.click();

    }

    // shoping cart badge
    badge() {
       return this.cartbadge;
    }

    //click on menu link
    async menuitem(): Promise<void> {
        await this.menu.click();
    }

    //click on about link
    async allabout(): Promise<void> {
        await this.menuitem()
        await this.about.click();

    }



}
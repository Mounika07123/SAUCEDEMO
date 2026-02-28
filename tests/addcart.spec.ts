import { test, expect } from "@playwright/test"
import { Home } from "../pages/Homepage"
import { cart } from "../pages/cartpage"

//Assign variables 
let home: Home
let Cart: cart

//This hook runs before running the test
test.describe("Add cart tests", async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/inventory.html')
        //Initialize home page
        home = new Home(page);
        Cart = new cart(page) 

    })

    //click on Add cart & validate the text after adding item to cart
    test("Check adding & removing the item to cart Text", async ({ page }) => {

        home.selectAddCart()
        await expect(home.remove()).toHaveText("Remove") //After adding item to cart
        home.selectAddCart()
        await expect(home.remove()).toHaveText("Add to cart")//Remove the item to cart

    });

    //click on Item Add to cart and check the number on the cart symbol
    test("checking the number on cart", async ({ page }) => {

        home.selectAddCart();
       await expect(home.badge()).toHaveText("1");
       home.remove();

    })

    //click on Add cart and verfy the item
    test("Check the item added in the cart is equal to the selected",async({page})=>
    {
        home.selectAddCart();
       const items = await home.itemText()
       const getfirst: string= items[0];
        await home.cartimage();
       const item1=  await Cart.cartitem();
       expect(item1).toEqual(getfirst)
    })
    
    test("Click on the item link",async({page})=>
    {
     await Cart.cartlink();
     await Cart.backlink();

    })
    
})
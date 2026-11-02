/* Test case:
1)Retreive all the Text contents & print in the console
2)Retreive the prices & print in the console
3)Click on All about 
*/
import { test } from "../fixtures/pomfixtures"
//import { LoginPage } from "../pages/loginpage"
//import { Home } from "../pages/Homepage"
import { testconfig } from "../test.config";
import { TestFixture } from "@playwright/test";

//Assign variables


//This hook runs before each test
test.describe("Homepage tests", {tag:"@regression"}, () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/inventory.html')
        //Initialize hompepage after login
    })


    //Test to retreive all the items text
    test("Retreive all the items", async ({ homepage }) => {
    console.log(await homepage.itemText())

    })

    //Test to retreive all the items price
    test("Retreive all the items prices", async ({ homepage }) => {
        console.log(await homepage.itemprice())
    })

    //Test to click on All About link
    test("Click on All about link", async ({ homepage }) => {
        await homepage.allabout();
    })

    //Values are sorted in A-Z order
    test("Values are sorted in A-Z order", async ({ homepage }) => {
        const original: string[] = await homepage.itemText();
        const expected: string[] = [...original].sort((a, b) => a.localeCompare(b))
        await homepage.selectSortOption(homepage.sortValues.nameAZ)
        const afterSort = await homepage.itemText();
        expect(afterSort).toEqual(expected)
        console.log("After Sorted values:", afterSort)
        console.log("original array:", original)

    })

    //Values are sorted in Z-A order
    test("Values are sorted in Z-A order", async ({ homepage }) => {
        const original: string[] = await homepage.itemText();
        const expected: string[] = [...original].sort((a, b) => b.localeCompare(a))
        await homepage.selectSortOption(homepage)
        const afterSort = await homepage.itemText();
        expect(afterSort).toEqual(expected)
        console.log("After Sorted values:", afterSort)
        console.log("original array:", original)


    })

    //Values are sorted in Price(High to Low) order
    test("Values are sorted in Price(High to Low) order", async ({ homepage }) => {
        const original: number[] = await homepage.itemprice();
        const expected: number[] = [...original].sort((a, b) => b - a)
        await homepage.selectSortOption(homepage.sortValues.priceHighLow)
        const afterSort = await homepage.itemprice();
        expect(afterSort).toEqual(expected)
        console.log("After Sorted values:", afterSort)
        console.log("original array:", original)


    })

    //Values are sorted in Price(Low to High) order
    test("Values are sorted in Price(Low to High) order", async ({ page }) => {
        const original: number[] = await home.itemprice();
        const expected: number[] = [...original].sort((a, b) => a - b)
        await home.selectSortOption(home.sortValues.priceLowHigh)
        const afterSort = await home.itemprice();
        expect(afterSort).toEqual(expected)
        console.log("After Sorted values:", afterSort)
        console.log("original array:", original)


    })

});

/* Test case:
1)Retreive all the Text contents & print in the console
2)Retreive the prices & print in the console
3)Click on All about 
*/
import { test, expect } from "@playwright/test"
//import { LoginPage } from "../pages/loginpage"
import { Home } from "../pages/Homepage"
import { testconfig } from "../test.config";

//Assign variables

//let login: LoginPage;
let home: Home;
let config: testconfig;

//This hook runs before each test
test.describe("Homepage tests", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/inventory.html')
        //Initialize hompepage after login
        home = new Home(page)
    })


    //Test to retreive all the items text
    test("Retreive all the items", async ({ page }) => {
    console.log(await home.itemText())

    })

    //Test to retreive all the items price
    test("Retreive all the items prices", async ({ page }) => {
        console.log(await home.itemprice())
    })

    //Test to click on All About link
    test("Click on All about link", async ({ page }) => {
        await home.allabout();
    })

    //Values are sorted in A-Z order
    test("Values are sorted in A-Z order", async ({ page }) => {
        const original: string[] = await home.itemText();
        const expected: string[] = [...original].sort((a, b) => a.localeCompare(b))
        await home.selectSortOption(home.sortValues.nameAZ)
        const afterSort = await home.itemText();
        expect(afterSort).toEqual(expected)
        console.log("After Sorted values:", afterSort)
        console.log("original array:", original)

    })

    //Values are sorted in Z-A order
    test("Values are sorted in Z-A order", async ({ page }) => {
        const original: string[] = await home.itemText();
        const expected: string[] = [...original].sort((a, b) => b.localeCompare(a))
        await home.selectSortOption(home.sortValues.nameZA)
        const afterSort = await home.itemText();
        expect(afterSort).toEqual(expected)
        console.log("After Sorted values:", afterSort)
        console.log("original array:", original)


    })

    //Values are sorted in Price(High to Low) order
    test("Values are sorted in Price(High to Low) order", async ({ page }) => {
        const original: number[] = await home.itemprice();
        const expected: number[] = [...original].sort((a, b) => b - a)
        await home.selectSortOption(home.sortValues.priceHighLow)
        const afterSort = await home.itemprice();
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

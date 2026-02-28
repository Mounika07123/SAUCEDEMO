// /* 
// Test case: Login with valid credentials
// steps :
// 1)Navigate to the application url
// 2)Enter username & password & click on Login 
// 3)Validate the Home page 

// */

// import {test,expect} from "@playwright/test"
// import {LoginPage} from "../pages/loginpage"
// import {Home} from "../pages/Homepage"
// import {testconfig} from "../test.config"

// let config: testconfig;
// let home: Home;
// let loginpage: LoginPage;

// //This hook runs before each test
// test.beforeEach(async({page}) =>
// {
//     config = new testconfig(); //load url & username credentials
//     await page.goto(config.url)// launch url
//     //Initialize page objects
//     home = new Home(page);
//     loginpage = new LoginPage(page)

// })



// //optional clean up after every test
// test.afterEach(async ({page})=>
// {
//     await page.close();
// })

// test("Login into app",async({page})=>{

// //Enter username & password,click on login
// await loginpage.enterusername(config.Username)
// await loginpage.enterpassword(config.password)
// await loginpage.clicklogin()
// //valid hompage text
// await home.ht()
// });
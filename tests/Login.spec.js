import {test,expect} from '@playwright/test';
import {Login} from '../pages/Login.js';


test('Login Test',async ({page})=>{
   const login=new Login(page);
    await login.gotoLoginpage();
    await page.waitForTimeout(2000);
    await login.login("admin@archax.com","Test@123");
    await page.waitForTimeout(2000);
    await login.logbtn();
    await page.waitForTimeout(2000);
    await login.signout();
    
})

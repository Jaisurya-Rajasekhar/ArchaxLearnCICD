exports.Login=
class Login{
    constructor(page){
        this.page=page;
        this.email="//input[@placeholder='Enter Your EmailId']";
        this.password="//input[@placeholder='Enter Your Password']";
        this.logIn="//button[@type='submit']";
        //My account button
        this.myAccoutnBtn="span[class='text-[18px] hidden lg:block']";

        //Sigout Button
        this.signOutBtn="//button[normalize-space()='Logout']";

    }
    async gotoLoginpage(){
        await this.page.goto("https://archax-dev-admin-demo.seaswap.co/");
    }
    async login(email,pass){
        await this.page.locator(this.email).fill(email);
        await this.page.locator(this.password).fill(pass);
        
       }
       async logbtn(){
        await this.page.locator(this.logIn).click(); 
       }
       async signout(){
        await this.page.locator(this.myAccoutnBtn).click();
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.signOutBtn).click();
       }
       
}
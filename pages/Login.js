exports.Login=
class Login{
    constructor(page){
        this.page=page;
        this.email="//input[@placeholder='Enter Your EmailId']";
        this.password="//input[@placeholder='Enter Your Password']";
        this.logIn="//button[@type='submit']";
        this.signOutBtn="//button[normalize-space()='Sign Out']";
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
        await this.page.locator(this.signOutBtn).click();
        
       }
       
}
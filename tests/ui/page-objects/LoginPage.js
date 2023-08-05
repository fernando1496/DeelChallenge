class LoginPage{
    
    constructor(page){
        this.page = page;
        this.btn_locator = page.locator("div[class='cartSection'] h3");     
       
    }//constructor

    getProductName(){
        this.productName.waitFor();
        return this.productName;
    }

    getProductNameText(){
        this.productName.waitFor();
        return this.productName.textContent();
    }


    async action(){
        console.log('Clicking on Checkout button')
        await this.btn_checkout.click();
    }
  
}

module.exports = {LoginPage};
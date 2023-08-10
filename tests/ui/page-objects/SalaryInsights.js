exports.SalaryInsights = class SalaryInsights {   
    constructor(page){
        this.page = page;
        this.role_input = page.locator("#mui-2");
        this.country_input = page.locator("#mui-4");  
        this.table_title = page.locator("//*[@data-qa='salary-table']/h2");  
        this.search_button = page.locator("//button[contains(text(),'Search')]");
        this.dll_list = page.locator("(//div[@role='presentation'])[1]");
    }//constructor

    getRoleInput(){
        this.role_input.waitFor();
        return this.role_input;
    }

    getProductNameText(){
        this.productName.waitFor();
        
    }


    async selectRole(role){
        await this.role_input.click()
        for (const char of role) {
            await this.role_input.type(char)
        await delay(100); // Adjust the delay time as needed
        }
        await this.dll_list.click()
    }

    async selectCountry(country){
        await this.country_input.click()
        for (const char of country) {
            await this.country_input.type(char)
        await delay(100); // Adjust the delay time as needed
    }
    await this.dll_list.click()
    }

    async clickSearchButton(){
        await this.search_button.click()
    }

    async getTextFromTable(){
        const elementText = await this.table_title.innerText();
        console.log(elementText)
        return elementText;
    }


    async getDdlText(role){
        await this.role_input.click()
        for (const char of role) {
            await this.role_input.type(char)
        await delay(100); // Adjust the delay time as needed
        }
        const elementText = await this.dll_list.innerText();
        console.log(elementText)
        return elementText;
    }
   
    
    
  
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
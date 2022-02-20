import Page from "./page"
import chai from "chai"
import reporter from "../helper/reporter"

class HomePage extends Page{
    constructor()
    {
        super()
    }
    /**Page objects */
 
   get loginLink(){return $("div[role='listbox']>button")}



    /**Page actions */

  
    async clickLoginLink(testid: string) {
        try {
            await this.click(await this.loginLink)
            reporter.addStep(testid, "info", `Login button clicked`)
        } catch (err) {
            err.message = `Error clicking login button, ${err.message}`
            throw err
        }
    }

    async verifyHomePageTitle(testid: string,homePageTitle:string) {
        try {
            let title=await this.getTitle()
            if(title.trim()==homePageTitle)
            reporter.addStep(testid, "info", `Looged in successfully, home page title verified`)
        } catch (err) {
            err.message = `Error validating home page title, ${err.message}`
            throw err
        }
    }
   
}
export default new HomePage()
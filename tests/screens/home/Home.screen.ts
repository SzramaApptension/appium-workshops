import { HomeSelectors } from "./Home.selectors";

export class HomeScreen extends HomeSelectors {
// async openLoginScreen(){
//     (await this.LoginBtn).click()
// }
async assert(){
        (await this.FeaturedHeader).isDisplayed()
    }
}
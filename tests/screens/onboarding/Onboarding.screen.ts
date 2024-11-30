import { OnboardingSelectors } from "./Onboarding.selectors";

export class OnboardingScreen extends OnboardingSelectors {
async finishOnboarding(){
    await this.ContinueBtn.click()
    await this.ContinueBtn.click()
    await this.ContinueBtn.click()
    await this.GetStartedBtn.click()
    // await this.FeaturedHeader.isDisplayed()
}
}
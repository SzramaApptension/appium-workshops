import { OnboardingBase } from "./onboarding.base"
import { OnboardingScreen } from "./screens/onboarding/Onboarding.screen"

describe('Finish onboarding', () => {
    const Onboarding = new OnboardingScreen
    const OnboardingB = new OnboardingBase
    it('Should not show GetStartedBtn', async () =>{
        await OnboardingB.shouldCompleteOnboarding()
        await expect(Onboarding.GetStartedBtn).not.toBeDisplayed
    })
})

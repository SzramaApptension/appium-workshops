import { OnboardingBase } from "./onboarding.base"
import { HomeScreen } from "./screens/home/Home.screen"

describe('Finish onboarding', () => {
    const Home = new HomeScreen
    const Onboarding = new OnboardingBase
    it('Should finish onboarding', async () =>{
        await Onboarding.shouldCompleteOnboarding()
        await Home.assert()
    })
})

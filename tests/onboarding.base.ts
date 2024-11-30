import BaseClass from "./screens/baseClass";
import { OnboardingScreen } from "./screens/onboarding/Onboarding.screen";

export class OnboardingBase extends BaseClass {
    async shouldCompleteOnboarding () {
        const Onboarding = new OnboardingScreen
        await Onboarding.finishOnboarding()
    }
    
}
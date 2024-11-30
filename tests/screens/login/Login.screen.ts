import { LoginSelectors } from "./Login.selectors";

export class LoginScreen extends LoginSelectors {
 
    async fillForm(email: string) {
        await this.emailInput.addValue(email)
    }
}
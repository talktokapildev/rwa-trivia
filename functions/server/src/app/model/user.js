"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(authState) {
        if (authState) {
            this.authState = authState;
            this.userId = authState.uid;
            this.email = authState.providerData[0].email;
            this.displayName = (authState.providerData[0].displayName ? authState.providerData[0].displayName : this.email);
        }
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map
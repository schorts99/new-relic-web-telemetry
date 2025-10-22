"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewRelicWebTelemetry = void 0;
const exceptions_1 = require("./exceptions");
class NewRelicWebTelemetry {
    _browserAgent;
    constructor(_browserAgent) {
        this._browserAgent = _browserAgent;
    }
    setCustomContext(key, value) {
        this.browserAgent.setCustomAttribute(key, value);
    }
    setTransaction(name) {
        this.browserAgent.setPageViewName(name);
    }
    trackError(error) {
        this.browserAgent.noticeError(error);
    }
    get browserAgent() {
        if (!this._browserAgent) {
            throw new exceptions_1.BrowserAgentHasNotBeenInitialized();
        }
        return this._browserAgent;
    }
}
exports.NewRelicWebTelemetry = NewRelicWebTelemetry;
//# sourceMappingURL=new-relic-web-telemetry.js.map
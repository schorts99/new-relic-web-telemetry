"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewRelicWebTelemetry = void 0;
const browser_agent_1 = require("@newrelic/browser-agent/loaders/browser-agent");
const exceptions_1 = require("./exceptions");
class NewRelicWebTelemetry {
    _browserAgent;
    constructor(_browserAgent) {
        this._browserAgent = _browserAgent;
    }
    init(agentOptions) {
        if (!this._browserAgent) {
            this._browserAgent = new browser_agent_1.BrowserAgent(agentOptions);
        }
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
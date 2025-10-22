"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserAgent = exports.NewRelicWebTelemetry = void 0;
__exportStar(require("./exceptions"), exports);
var new_relic_web_telemetry_1 = require("./new-relic-web-telemetry");
Object.defineProperty(exports, "NewRelicWebTelemetry", { enumerable: true, get: function () { return new_relic_web_telemetry_1.NewRelicWebTelemetry; } });
var browser_agent_1 = require("@newrelic/browser-agent/loaders/browser-agent");
Object.defineProperty(exports, "BrowserAgent", { enumerable: true, get: function () { return browser_agent_1.BrowserAgent; } });
//# sourceMappingURL=index.js.map
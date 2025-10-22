import { BrowserAgent } from "@newrelic/browser-agent/loaders/browser-agent";
import { AgentOptions } from "@newrelic/browser-agent/src/loaders/agent.js";
import type { Telemetry } from "@schorts/shared-kernel";
export declare class NewRelicWebTelemetry implements Telemetry {
    private _browserAgent?;
    constructor(_browserAgent?: BrowserAgent | undefined);
    init(agentOptions: AgentOptions): void;
    setCustomContext(key: string, value: string): void;
    setTransaction(name: string): void;
    trackError(error: Error): void;
    private get browserAgent();
}
//# sourceMappingURL=new-relic-web-telemetry.d.ts.map
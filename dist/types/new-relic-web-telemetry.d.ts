import { BrowserAgent } from "@newrelic/browser-agent/loaders/browser-agent";
import type { Telemetry } from "@schorts/shared-kernel";
export declare class NewRelicWebTelemetry implements Telemetry {
    private _browserAgent?;
    constructor(_browserAgent?: BrowserAgent | undefined);
    setCustomContext(key: string, value: string): void;
    setTransaction(name: string): void;
    trackError(error: Error): void;
    private get browserAgent();
}
//# sourceMappingURL=new-relic-web-telemetry.d.ts.map
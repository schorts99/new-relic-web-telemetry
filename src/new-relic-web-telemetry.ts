import { BrowserAgent } from "@newrelic/browser-agent/loaders/browser-agent";
import { AgentOptions } from "@newrelic/browser-agent/src/loaders/agent.js";
import type { Telemetry } from "@schorts/shared-kernel";

import { BrowserAgentHasNotBeenInitialized } from "./exceptions";

export class NewRelicWebTelemetry implements Telemetry {
  constructor(private _browserAgent?: BrowserAgent) {}
  
  init(agentOptions: AgentOptions): void {
    if (!this._browserAgent) {
      this._browserAgent = new BrowserAgent(agentOptions);
    }
  }

  setCustomContext(key: string, value: string): void {
    this.browserAgent.setCustomAttribute(key, value);
  }

  setTransaction(name: string): void {
    this.browserAgent.setPageViewName(name);
  }

  trackError(error: Error): void {
    this.browserAgent.noticeError(error)
  }

  private get browserAgent(): BrowserAgent {
    if (!this._browserAgent) {
      throw new BrowserAgentHasNotBeenInitialized();
    }

    return this._browserAgent;
  }
}

# 📈 @schorts/new-relic-web-telemetry

A type-safe, injectable wrapper around New Relic’s browser agent for frontend telemetry in any modern web application. Designed for use in dependency-injected environments like Inversify, this module provides a unified interface for tracking errors, setting custom attributes, and naming page-level transactions.

## 🚀 Installation

```bash
npm install --save @schorts/new-relic-web-telemetry
```

## 🧩 Features

- ✅ Type-safe wrapper around @newrelic/browser-agent
- ✅ Compatible with Inversify or other DI containers
- ✅ Supports error tracking, custom attributes, and transaction naming
- ✅ Fail-fast safety with explicit initialization guard
- ✅ Designed for multi-instance, multi-tenant observability

## 🔧 Usage

```ts
import { NewRelicWebTelemetry, BrowserAgent } from '@schorts/new-relic-web-telemetry';
import { agentOptions } from './newrelic-config';

// const browserAgent = new BrowserAgent(agentOptions);
const telemetry = new NewRelicWebTelemetry(/* Or pass a builded instance here browserAgent */);
// If instance is provided, the init can be skipped
telemetry.init(agentOptions);

telemetry.setCustomContext('instanceId', 'preview-ocotlan-01');
telemetry.setTransaction('checkout-page');
telemetry.trackError(new Error('Something went wrong'));
```

`agentOptions` must be extracted from your New Relic browser snippet. See [New Relic docs](https://docs.newrelic.com/docs/browser/browser-monitoring/installation/install-browser-monitoring-agent/) for details.

## 🧠 Exception Handling

If you call any method before `init()`, the class will throw a `BrowserAgentHasNotBeenInitialized` error. This ensures safe usage and clear diagnostics.

## 📜 License

LGPL

# Custom plugin


```shell
npm install @wocker/core
```

```typescript
// index.ts
import {Plugin, PluginConfigService} from "@wocker/core";
import {CustomController} from "./contollers/CustomController";
import {CustomService} from "./services/CustomService";


@Plugin({
    name: "custom",
    controllers: [
        CustomController
    ],
    providers: [
        PluginConfigService,
        CustomService
    ]
})
export default class CustomPlugin {}
```

```typescript
// controllers/CustomController.ts
import {Controller, Command, Option} from "@wocker/core";
import {CustomService} from "../services/CustomService";


@Controller()
export class CustomController {
    public constructor(
        protected readonly customService: CustomService
    ) {}

    @Command("example:command [arg]")
    public async command(
        @Option("option", {
            type: "boolean",
            alias: "o"
        })
        option?: boolean,
        arg?: string
    ) {
        return this.customService.example(arg, option);
    }
}
```

```typescript
// services/CustomService.ts
import {AppConfigService, PluginConfigService} from "@wocker/core";


@Injectable()
export class CustomService {
    public constructor(
        protected readonly appConfigService: AppConfigService,
        protected readonly pluginConfigService: PluginConfigService
    ) {}

    public example(arg?: string, option?: boolean) {
        return `result: ${arg} ${option ? "1" : "0"}`;
    }
}
```


## Example

[wocker-example-plugin](https://github.com/kearisp/wocker-example-plugin)

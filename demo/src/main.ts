// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { runNativeScriptAngularApp, platformNativeScript, NativeScriptNgZone } from "@nativescript/angular";

import { AppModule } from "./app/app.module";

runNativeScriptAngularApp({
    appModuleBootstrap: () =>
      platformNativeScript().bootstrapModule(AppModule, {
        ngZone: new NativeScriptNgZone(),
      }),
  });

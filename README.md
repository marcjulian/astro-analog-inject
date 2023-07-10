# Astro Analog Inject Error

Start the Astro dev server

```bash
pnpm i
pnpm dev
```

Visit http://localhost:3000.

## Inject Errow with `client:load` and external library

To see the error, uncomment the line 27 in [index.astro](./src/pages/index.astro). This error does not occur when the component is loaded with `client:only`.

```
ERROR RuntimeError: NG0203: inject() must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`. Find more at https://angular.io/errors/NG0203
    at injectInjectorOnly (file:///Users/m/Dev/wip/astro-analog-inject/node_modules/.pnpm/@angular+core@16.1.4_rxjs@7.8.1_zone.js@0.13.1/node_modules/@angular/core/fesm2022/core.mjs:644:15)
    at ɵɵinject (file:///Users/m/Dev/wip/astro-analog-inject/node_modules/.pnpm/@angular+core@16.1.4_rxjs@7.8.1_zone.js@0.13.1/node_modules/@angular/core/fesm2022/core.mjs:655:61)
    at inject (file:///Users/m/Dev/wip/astro-analog-inject/node_modules/.pnpm/@angular+core@16.1.4_rxjs@7.8.1_zone.js@0.13.1/node_modules/@angular/core/fesm2022/core.mjs:738:12)
    at <instance_members_initializer> (file:///Users/m/Dev/wip/astro-analog-inject/node_modules/.pnpm/@rx-angular+template@16.0.1_@angular-devkit+core@16.1.4_@angular-devkit+schematics@16.1.4_@an_7pphcyfrbrlrlf32d6ab2nyjjq/node_modules/@rx-angular/template/fesm2022/template-let.mjs:52:24)
    at new RxLet (file:///Users/m/Dev/wip/astro-analog-inject/node_modules/.pnpm/@rx-angular+template@16.0.1_@angular-devkit+core@16.1.4_@angular-devkit+schematics@16.1.4_@an_7pphcyfrbrlrlf32d6ab2nyjjq/node_modules/@rx-angular/template/fesm2022/template-let.mjs:50:1)
    at NodeInjectorFactory.RxLet_Factory [as factory] (ng:///RxLet/ɵfac.js:5:10)
    at getNodeInjectable (/Users/m/Dev/wip/astro-analog-inject/node_modules/.pnpm/@angular+core@16.1.4_rxjs@7.8.1_zone.js@0.13.1/node_modules/@angular/core/fesm2022/core.mjs:4662:44)
    at instantiateAllDirectives (/Users/m/Dev/wip/astro-analog-inject/node_modules/.pnpm/@angular+core@16.1.4_rxjs@7.8.1_zone.js@0.13.1/node_modules/@angular/core/fesm2022/core.mjs:11590:27)
    at createDirectivesInstances (/Users/m/Dev/wip/astro-analog-inject/node_modules/.pnpm/@angular+core@16.1.4_rxjs@7.8.1_zone.js@0.13.1/node_modules/@angular/core/fesm2022/core.mjs:11006:5)
    at Module.ɵɵtemplate (/Users/m/Dev/wip/astro-analog-inject/node_modules/.pnpm/@angular+core@16.1.4_rxjs@7.8.1_zone.js@0.13.1/node_modules/@angular/core/fesm2022/core.mjs:15126:9) {
  code: -203
}
...
 error   NG0203: inject() must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`. Find more at https://angular.io/errors/NG0203
  File:
    /Users/m/Dev/wip/astro-analog-inject/node_modules/.pnpm/@angular+core@16.1.4_rxjs@7.8.1_zone.js@0.13.1/node_modules/@angular/core/fesm2022/core.mjs:644:15
  Code:
    643 |     if (_currentInjector === undefined) {
    > 644 |         throw new RuntimeError(-203 /* RuntimeErrorCode.MISSING_INJECTION_CONTEXT */, ngDevMode &&
          |               ^
      645 |             `inject() must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with \`runInInjectionContext\`.`);
      646 |     }
      647 |     else if (_currentInjector === null) {
  Stacktrace:
```

## Inject Error not thrown with directive in project

A simple [LetDirective](./src/components/let.directive.ts) is used in the [PricingComponent](./src/components/pricing.component.ts) and no error is thrown when used in combination with `client:load`.
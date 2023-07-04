import { isPlatformBrowser } from '@angular/common';

// Check if the platform is Browser, if not, return the value passed as parameter
export function CheckBrowser(
    platformId: Object,
    returnValue: any = null
): MethodDecorator {
    return function (
        target: any,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            return isPlatformBrowser(platformId)
                ? originalMethod.apply(this, args)
                : returnValue;
        };

        return descriptor;
    };
}

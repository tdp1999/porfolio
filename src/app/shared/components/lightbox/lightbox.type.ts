import { TemplateRef } from '@angular/core';
import { Image } from '../../interfaces/image.interface';

export interface LightboxData {
    image: Image;
    detailTmpl: TemplateRef<any>;
    data: any;
}

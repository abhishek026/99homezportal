import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import * as moment from 'moment';

@Pipe({ name: 'typeFormatter' })
export class CustomizingPipe implements PipeTransform {
    transform(value: any, isSymbol: boolean = false, decPointer: string, isPrefix: boolean = true, typeHead: string, defaultCurSymbol: string,country_id:any): string {
        let encryptedData = sessionStorage.getItem('country_data');
        let countryDetails = JSON.parse(encryptedData);
        if (typeHead != '') {
            /* date detected converting to format DD-MM-YYYY using moment and returning data */
            if (typeHead.toLowerCase().includes('date')) {
                if (value != '' && value != null && value != undefined) {
                    return moment(value).format("DD-MM-YYYY");
                }
                else {
                    return value;
                }
            }

            /* Amount detected separate between date and currency */
            else if (typeHead.toLowerCase().includes('amount')) {
                /* Check for date here */
                if (this.detectDate(typeHead.toLowerCase())) {
                    if (value != '' && value != null && value != undefined) {
                        return moment(value).format("DD-MM-YYYY");
                    }
                    else {
                        return value;
                    }
                }
                else {
                    let object = countryDetails.filter((country) => country.id == country_id)
                    if (!object.length) {
                        return defaultCurSymbol + value.toLocaleString('en-IN');
                    }
                    else {
                        return object && object[0] ? object[0].symbol + value.toLocaleString('en-IN') : defaultCurSymbol + value.toLocaleString('en-IN');
                    }
                    
                }
            }

            /* Due detected separate between date and currency */
            else if (typeHead.toLowerCase().includes('due')) {
                /* Check for date here */
                if (this.detectDate(typeHead.toLowerCase())) {
                    if (value != '' && value != null && value != undefined) {
                        return moment(value).format("DD-MM-YYYY");
                    }
                    else {
                        return value;
                    }
                }
                else {
                    let object = countryDetails.filter((country) => country.id == country_id)
                    if (!object.length) {
                        return defaultCurSymbol + value.toLocaleString('en-IN');
                    }
                    else {
                        return object && object[0] ? object[0].symbol + value.toLocaleString('en-IN') : defaultCurSymbol + value.toLocaleString('en-IN');
                    }
                    
                }
            }

            else if (typeHead.toLowerCase().includes('fee')) {
                /* Check for date here */
                if (this.detectDate(typeHead.toLowerCase())) {
                    if (value != '' && value != null && value != undefined) {
                        return moment(value).format("DD-MM-YYYY");
                    }
                    else {
                        return value;
                    }
                }
                else {
                    if (typeHead.toLowerCase().includes('type')) {
                        return value;
                    }
                    else {
                        let object = countryDetails.filter((country) => country.id == country_id)
                        if (!object.length) {
                            return defaultCurSymbol + value.toLocaleString('en-IN');
                        }
                        else {
                            return object && object[0] ? object[0].symbol + value.toLocaleString('en-IN') : defaultCurSymbol + value.toLocaleString('en-IN');
                        }
                        
                    }
                }
            }
            else {
                return value;
            }

        }
        else {
            return value;
        }
    }

    detectDate(o: string): boolean {
        if (o.toLowerCase().includes('date')) {
            return true;
        }
        else {
            return false;
        }
    }
}
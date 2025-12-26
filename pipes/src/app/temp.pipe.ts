import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TempPipe implements PipeTransform {
  transform(
    value: string | number | null, 
    inputType: 'cel' | 'fah', 
    outputType?: 'cel' | 'fah'
	) {
		if(value === null) {
			return value;
		}

    let val: number;
    
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

		let outputTemp: number;

		if (inputType === 'cel' && outputType === 'fah') {
			outputTemp = val * (9 / 5) + 32; // Celsius to Fahrenheit
		} else if (inputType === 'fah' && outputType === 'cel') {
			outputTemp = (val - 32) * (5 / 9); // Fahrenheit to Celsius
		} else {
			outputTemp = val; // No conversion needed
		}

		let symbol: '°F' | '°C';

		if (!outputType) {
			symbol = inputType === 'cel' ? '°C' : '°F';
		} else {
			symbol = outputType === 'cel' ? '°C' : '°F';
		}

    return `${outputTemp.toFixed(2)} ${symbol}`;
  }
}
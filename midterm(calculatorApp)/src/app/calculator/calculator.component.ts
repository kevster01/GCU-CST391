import { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
result: string ='';
longButtons: string[] = ['AC', 'CE']; 
buttons: string[] = ['7','8','9','/','4','5','6','*','1','2','3','-','.','0','=','+'];


private previousValue: string = '';
private currentValue: string ='';


addExpression(value: string){
  if(this.result != ''){
    this.previousValue = this.currentValue; 
    this.currentValue = value;
  }

  if (value == 'AC')
  {
    this.result='';
  }
  else if(value =='CE')
  {
    this.result = this.previousValue != "=" ? this.result.slice(0, -1): this.result;
  }
  else if (value == '=')
  {
    this.result= eval(this.result);
  }
  else {
    this.result += value;
  }
}

}

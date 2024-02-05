//O uso do debounceTime ajuda a lidar com atrasos e a evitar execuções desnecessárias 
//de código em resposta a alterações rápidas na entrada do usuário.
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

const inputElement = document.getElementById('input');

fromEvent(inputElement, 'input')
    .pipe(
        debounceTime(300),
        map(event => event.target.value)
    )
    .subscribe(value => console.log(value));
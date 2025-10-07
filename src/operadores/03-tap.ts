import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

const numero$ = range(1, 5);

numero$
  .pipe(
    tap((x) => {
      console.log("antes", x);
      return 100;
    }),
    map((val) => val * 10),
    tap({
      next: (valor) => console.log("despues", valor),
      complete: () => console.log("Se terminó todo"),
    }) // complete se ejecuta cuando el observable se termina
  )
  .subscribe((val) => console.log("subs", val));

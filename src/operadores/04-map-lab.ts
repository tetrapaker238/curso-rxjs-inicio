import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor nisi ut arcu ultrices pretium. Phasellus et libero venenatis, iaculis erat accumsan, faucibus diam. Praesent a tincidunt arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nibh lectus. In hac habitasse platea dictumst. Duis sapien ante, suscipit vel sagittis sit amet, hendrerit id nisl. Nam finibus enim a pulvinar lobortis. Sed facilisis nisl a turpis convallis aliquet. Nam posuere, metus nec hendrerit ullamcorper, turpis lectus condimentum tellus, sollicitudin hendrerit enim ante eu eros. Fusce egestas sollicitudin bibendum. Morbi sed augue rutrum, mattis tellus eu, euismod ante.
<br/><br/>
In mollis condimentum odio, euismod bibendum sapien egestas vitae. Fusce commodo rhoncus orci eget pharetra. Integer at purus quis augue fringilla dapibus. Praesent imperdiet nisi nec felis viverra sollicitudin. Praesent vehicula lacus mollis enim eleifend ullamcorper. Nam mattis velit sapien, et bibendum nisi ultricies eget. Proin ut volutpat odio, non blandit mi. Nam sit amet diam accumsan, ornare diam vitae, pretium diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur viverra diam sed nunc luctus, et consequat lacus accumsan. Phasellus ornare eget felis sed dictum. Proin faucibus venenatis dui nec porta. Nunc quis lorem luctus, volutpat odio a, euismod enim. Sed nec ante est.
<br/><br/>
Fusce aliquam justo eu elit laoreet, vitae consectetur purus pretium. Maecenas rutrum lobortis fermentum. Donec quis mauris eu arcu vulputate ornare. Donec dignissim sagittis enim id iaculis. Phasellus lacinia leo sed turpis tincidunt, vitae consequat mi dictum. Donec nec enim auctor, efficitur diam eu, lacinia dui. Donec volutpat felis vel magna iaculis cursus. Nam rhoncus ligula et turpis sagittis, et cursus dui imperdiet. Sed efficitur, diam non laoreet faucibus, dolor diam facilisis sem, a rhoncus nisl quam in magna. Aenean viverra in metus vel mollis. Suspendisse viverra hendrerit elit non vestibulum.
<br/><br/>
Vestibulum eu fermentum nisi, sed varius libero. Aenean vitae semper erat, et ullamcorper lacus. Aliquam tellus odio, rutrum a metus a, sagittis iaculis arcu. Morbi magna tortor, imperdiet vel massa vitae, fringilla gravida quam. Morbi malesuada cursus tellus vel condimentum. Pellentesque quam sapien, laoreet ac est non, hendrerit varius nisi. Vestibulum accumsan sit amet erat a aliquet. Fusce ultricies sapien erat, in commodo nisi hendrerit a. Cras porttitor, ipsum sit amet convallis accumsan, nunc nibh tincidunt metus, eget eleifend libero metus sed velit. Praesent fringilla vitae justo nec pulvinar. Proin at facilisis ligula.
<br/><br/>
Fusce mollis sit amet turpis a bibendum. Integer et nisl iaculis, accumsan tortor ut, interdum justo. Nunc in leo sed felis luctus sollicitudin vel eget quam. Fusce id lectus eu sapien mattis tempus. Phasellus dignissim urna ac diam vulputate, sed ullamcorper neque congue. Curabitur non hendrerit quam. Phasellus sed tellus ut eros finibus facilisis quis ut nibh. Vivamus facilisis leo malesuada, pharetra ligula ut, condimentum felis. Phasellus at quam sit amet orci ultricies ultrices ac et dui. Nam at consectetur dolor. Quisque mollis sed dui sed convallis.
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");

body.append(progressBar);

// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams

const scroll$ = fromEvent<Event>(document, "scroll");

// scroll$.subscribe(console.log);
const progress$ = scroll$.pipe(
  map((event) => {
    return calcularPorcentajeScroll(event);
  }),
  tap(console.log)
);

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});

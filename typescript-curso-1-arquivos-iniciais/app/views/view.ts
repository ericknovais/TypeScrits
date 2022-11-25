export abstract class View<T> {

    protected elemento: HTMLLinkElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    public update(model: T): void {
        this.elemento.innerHTML = this.template(model);
    }

    protected abstract template(model: T): string;
}
/// <reference path="typings/tsd.d.ts" />

import classNames from "classnames";

export class Greeter {
    element: HTMLElement;
    p1: HTMLElement;
    p2: HTMLElement;
    p3: HTMLElement;
    timerToken: number;

    classNamesResult: string;
    tryAllowSyntheticDefaultImports: boolean;

    constructor(element: HTMLElement) {
        this.element = element;

        this.p1 = document.createElement('p');
        this.element.appendChild(this.p1);

        this.p2 = document.createElement('p');
        this.element.appendChild(this.p2);

        this.p3 = document.createElement('p');
        this.element.appendChild(this.p3);

        this.tryAllowSyntheticDefaultImports = true;

        if (this.tryAllowSyntheticDefaultImports) {
            try {
                this.classNamesResult = classNames(["allowSyntheticDefaultImports", "is", "here"]);
            } catch (e) {
                this.classNamesResult = (classNames as any).default(["Error:", e.message.split(" ")]);
            }
        } else {
            this.classNamesResult = (classNames as any).default(["works", "but", "explicit", "default", "reference", "required"]);
        }
    }

    start(): void {
        this.p1.innerHTML = "The classNames result with: ";
        this.p2.innerHTML = `tryAllowSyntheticDefaultImports = [${this.tryAllowSyntheticDefaultImports}] `;
        this.p3.innerHTML = `is: [${this.classNamesResult}]`;
    }
}

const el = document.getElementById('content');
const greeter = new Greeter(el);
greeter.start();

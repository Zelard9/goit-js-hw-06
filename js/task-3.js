class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = [initialValue];
  }

  getValue() {
    return this.#value.join("");
  }

  padEnd(str) {
    this.#value.push(str);
  }

  padStart(str) {
    this.#value = [str, ...this.#value];
  }

  padBoth(str) {
    this.#value = [str, ...this.#value];
    this.#value.push(str);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

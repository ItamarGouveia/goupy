import util from "node:util";

export class NDArray {
  constructor(data, shape, forceFloat = false) {
    this.data = new Float64Array(data);
    this.shape = shape;
    this.size = this.data.length;
    this.forceFloat = forceFloat; // indica se devemos imprimir float mesmo para inteiros

    const expectedSize = shape.reduce((a, b) => a * b, 1);
    if (expectedSize !== this.size) {
      throw new Error(
        `Shape ${shape} não corresponde ao tamanho dos dados (${this.size})`
      );
    }
  }

  toArray() {
    if (this.shape.length === 1) return Array.from(this.data);

    const buildArray = (data, shape) => {
      if (shape.length === 1) return Array.from(data);
      const step = shape.slice(1).reduce((a, b) => a * b, 1);
      const result = [];
      for (let i = 0; i < shape[0]; i++) {
        result.push(
          buildArray(data.slice(i * step, (i + 1) * step), shape.slice(1))
        );
      }
      return result;
    };

    return buildArray(this.data, this.shape);
  }

  formatNumber(n) {
    if (Number.isInteger(n) && !this.forceFloat) return n.toString();
    // Sempre mostra ponto decimal se for float ou forceFloat=true
    if (Number.isInteger(n) && this.forceFloat) return n + ".";
    let s = n.toPrecision(12).replace(/\.?0+$/, "");
    if (s.startsWith(".")) s = "0" + s;
    return s;
  }

  buildString(arr, depth = 0) {
    if (!Array.isArray(arr)) return this.formatNumber(arr);

    if (arr.length > 0 && Array.isArray(arr[0])) {
      const rows = arr.map((r, i) => {
        const rowStr = `[${r.map(this.formatNumber.bind(this)).join(" ")}]`;
        return i === 0 ? rowStr : " " + rowStr;
      });
      return `[${rows.join("\n")}]`;
    }

    return `[${arr.map(this.formatNumber.bind(this)).join(" ")}]`;
  }

  toString() {
    const arr = this.toArray();
    return this.buildString(arr);
  }

  [util.inspect.custom]() {
    return this.toString();
  }
}

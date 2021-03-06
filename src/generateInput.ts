class RandomInputs {
  public input: unknown;
  protected min = 10;
  protected max = 10;

  constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }

  protected random() {
    return this.min + Math.floor(Math.random() * (this.max - this.min + 1));
  }
}

export class NumberInput extends RandomInputs {
  public input: number[] = [];
  private count = 10;
  constructor(count = 10, min = 1, max = 11) {
    super(min, max);
    this.count = count;
    this.randomize();
  }

  randomize() {
    this.input.length = 0;
    for (let i = 0; i < this.count; i++) {
      this.input.push(this.random());
    }
  }
}

export class RandomString {
  private length = 10;
  input = "";

  constructor(length?: number) {
    if (length && length > 0) this.length = length;
    this.randomise();
  }

  randomise() {
    const random = new NumberInput(this.length, 65, 90).input;
    this.input = String.fromCharCode(...random);
  }
}

export class RandomMatrix extends RandomInputs {
  private rows: number;
  private cols: number;
  input: number[][] = [];

  constructor(rows: number, cols: number, min: number, max: number) {
    super(min, max);
    this.rows = rows;
    let a 
    this.cols = cols;
    this.randomize();
  }

  randomize():void {
    for (let i = 0;i < this.rows; i++) {
      this.input.push(new NumberInput(this.cols, this.min, this.max).input);
    }
  }
}


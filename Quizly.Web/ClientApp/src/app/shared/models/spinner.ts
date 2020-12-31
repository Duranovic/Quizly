export class Spinner {
  isBusy: boolean = false;
  show(): void {
      this.isBusy = true;
  }

  hide(): void {
      this.isBusy = false;
  }
}

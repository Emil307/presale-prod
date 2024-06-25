import { makeAutoObservable } from "mobx";

class ThemeState {
  theme = 'light';

  constructor() {
    makeAutoObservable(this);
  }

  setTheme(theme: 'dark' | 'light') {
    this.theme = theme;
  }
}

export default new ThemeState();

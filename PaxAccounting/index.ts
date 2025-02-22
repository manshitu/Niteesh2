import * as React from "react";
import * as ReactDOM from "react-dom";
import { IInputs, IOutputs } from "./generated/ManifestTypes";
import PaxAccountingControl from "./PaxAccountingControl"; 

export class PaxAccounting implements ComponentFramework.StandardControl<IInputs, IOutputs> {
  private container: HTMLDivElement | null = null;
  
  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ) {
    
    this.container = container;
    console.log("Container assigned:", this.container);
    if (this.container) {
      ReactDOM.render(
        React.createElement(PaxAccountingControl), // ✅ Use React.createElement instead of JSX
        this.container
      );
    } else {
      console.error("Container is not defined.");
    }
  }

  public updateView(context: ComponentFramework.Context<IInputs>): void {
    if (this.container) {
      ReactDOM.render(
        React.createElement(PaxAccountingControl), // ✅ Use React.createElement instead of JSX
        this.container
      );
    }
  }

  public destroy(): void {
    if (this.container) {
      ReactDOM.unmountComponentAtNode(this.container);
    }
  }
}
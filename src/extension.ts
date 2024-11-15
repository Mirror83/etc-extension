import * as vscode from "vscode";

let numberOfSaves = 0;

// This method is called when the extension is activated
// The extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  vscode.window.showInformationMessage("The ETC extension is now active!");
  const afterSave = vscode.workspace.onDidSaveTextDocument((e) => {
    console.info("Number of saves: ", ++numberOfSaves);
    let message = "";
    if (numberOfSaves % 10 === 0) {
      message = `ETC?`;
      vscode.window.showInformationMessage(message);
    }
  });

  context.subscriptions.push(afterSave);
}

// This method is called when the extension is deactivated
export function deactivate() {}

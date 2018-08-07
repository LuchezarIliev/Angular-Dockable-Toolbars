
export interface Coordinates {
    x: number,
    y: number
  } 

  export interface ToolbarPanel {
    _$i3: Coordinates,
    _$iC: boolean,
    _$iu: number,
    _$ix: string,
    _$j8: boolean,
    fixedCenter: number,
    addFixedPanel(centerDiv: HTMLElement, fixedCenter: number): HTMLElement,
    addContentDiv(tdDivId: HTMLElement): HTMLElement,
    initLayout(tbLeft: number, tbTop: number, tbWidth: number, tbHeigth: number, tbPosition: number): HTMLElement,
    createDFPanel(tbTitle: string, tbClass: string): ToolbarPanel,
    createDSXDFUtil(): ToolbarPanel,
    loadStatesFromKey(key): ToolbarPanel,
    saveStatesIntoKey(key): ToolbarPanel,
    setVisible(visibility): boolean
  }
<<<<<<< HEAD
  
=======

>>>>>>> 5abc69f93f6926b12ba8523d540433378df40306
  export interface DockPosition {
    dockTop: number,
    dockLeft: number,
    dockRight: number,
    dockBottom: number
<<<<<<< HEAD
  }
=======
  }
>>>>>>> 5abc69f93f6926b12ba8523d540433378df40306

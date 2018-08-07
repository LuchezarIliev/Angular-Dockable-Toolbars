
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
  
  export interface DockPosition {
    dockTop: number,
    dockLeft: number,
    dockRight: number,
    dockBottom: number
  }

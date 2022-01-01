export type ButtonEvent =
	| { type: 'button-click' }
	| { type: 'click-away' }
	| { type: 'select'; value: string };

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonContext {
}
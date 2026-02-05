export type TokenType =
  | 'function'
  | 'if'
  | 'while'
  | 'return'
  | 'variable'
  | 'assignment'
  | 'call'
  | 'unknown';

export interface Token {
  type: TokenType;
  value: string;
  lineNumber: number;
}

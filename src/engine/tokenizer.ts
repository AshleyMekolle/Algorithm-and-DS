import { Token } from './Token';

export function tokenize(code: string): Token[] {
  const lines = code.split('\n');
  const tokens: Token[] = [];

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    const lineNumber = index + 1;

    if (!trimmed) return;

    if (trimmed.startsWith('function')) {
      tokens.push({
        type: 'function',
        value: trimmed,
        lineNumber,
      });
    } else if (trimmed.startsWith('if')) {
      tokens.push({
        type: 'if',
        value: trimmed,
        lineNumber,
      });
    } else if (trimmed.startsWith('while')) {
      tokens.push({
        type: 'while',
        value: trimmed,
        lineNumber,
      });
    } else if (trimmed.startsWith('return')) {
      tokens.push({
        type: 'return',
        value: trimmed,
        lineNumber,
      });
    } else if (trimmed.includes('=')) {
      tokens.push({
        type: 'assignment',
        value: trimmed,
        lineNumber,
      });
    } else if (trimmed.endsWith(');')) {
      tokens.push({
        type: 'call',
        value: trimmed,
        lineNumber,
      });
    } else {
      tokens.push({
        type: 'unknown',
        value: trimmed,
        lineNumber,
      });
    }
  });

  return tokens;
}

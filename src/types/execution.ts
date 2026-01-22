export interface VariableSnapshot {
  name: string;
  value: any;
}

export interface StackFrame {
  id: string;
  functionName: string;
  variables: VariableSnapshot[];
}

export interface ExecutionStep {
  lineNumber: number;
  stack: StackFrame[];
  description?: string;
}

export interface CustomMessage {
    'bus': string;
    'generators': string;
    'load': string;
}

// { "converge": true, "load": "Load 1", "clpu": 0.026323290848228487, "inrush": 0.890713425837366 }

export interface CustomMessageResponse {
  'converge': boolean;
  'load': string;
  'clpu': number;
  'inrush': number;
}

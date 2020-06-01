/* eslint-disable @typescript-eslint/interface-name-prefix */

declare namespace Express {
  export interface Request {
    clientSessionPayload: {
      id_table: number;
    };
  }
}

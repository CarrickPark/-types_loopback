/// <reference types="express-serve-static-core" />

// Type definitions for Loopback

/* =================== USAGE ===================

    import * as loopback from "loopback";
    const app: loopback.Loopback = loopback();

 =============================================== */

import * as core from "express-serve-static-core";

export = loopback;

declare global {

  function loopback(): loopback.Loopback;

  namespace loopback {
    export interface Loopback extends core.Express {
      start():void;
      emit(message: string):void;
    }

    export interface Model {
      createOptionsFromRemotingContext(): void;
    }
  }
}

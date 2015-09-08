'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

export type node$CallSite = {
  toString(): ?string;
  getFunctionName(): ?string;
  getMethodName(): ?string;
  getFileName(): ?string;
  getLineNumber(): ?number;
  getColumnNumber(): ?number;
  getEvalOrigin(): ?string;
  isToplevel(): boolean;
  isEval(): boolean;
  isNative(): boolean;
  isConstructor(): boolean;
}

export type Logger = {
  debug(...args: Array<any>): mixed;
  error(...args: Array<any>): mixed;
  fatal(...args: Array<any>): mixed;
  info(...args: Array<any>): mixed;
  trace(...args: Array<any>): mixed;
  warn(...args: Array<any>): mixed;
}

export type LoggingEvent = {
  startTime: Date;
  categoryName: string;
  data: Array<any>;
  level: {
    level: number;
    levelStr: string;
  };
  logger?: {
    category: string;
  };
}

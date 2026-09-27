var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError, "createNotImplementedError");
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
__name(notImplemented, "notImplemented");
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
__name(notImplementedClass, "notImplementedClass");

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
var _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
var nodeTiming = {
  name: "node",
  entryType: "node",
  startTime: 0,
  duration: 0,
  nodeStart: 0,
  v8Start: 0,
  bootstrapComplete: 0,
  environment: 0,
  loopStart: 0,
  loopExit: 0,
  idleTime: 0,
  uvMetricsInfo: {
    loopCount: 0,
    events: 0,
    eventsWaiting: 0
  },
  detail: void 0,
  toJSON() {
    return this;
  }
};
var PerformanceEntry = class {
  static {
    __name(this, "PerformanceEntry");
  }
  __unenv__ = true;
  detail;
  entryType = "event";
  name;
  startTime;
  constructor(name, options) {
    this.name = name;
    this.startTime = options?.startTime || _performanceNow();
    this.detail = options?.detail;
  }
  get duration() {
    return _performanceNow() - this.startTime;
  }
  toJSON() {
    return {
      name: this.name,
      entryType: this.entryType,
      startTime: this.startTime,
      duration: this.duration,
      detail: this.detail
    };
  }
};
var PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
  static {
    __name(this, "PerformanceMark");
  }
  entryType = "mark";
  constructor() {
    super(...arguments);
  }
  get duration() {
    return 0;
  }
};
var PerformanceMeasure = class extends PerformanceEntry {
  static {
    __name(this, "PerformanceMeasure");
  }
  entryType = "measure";
};
var PerformanceResourceTiming = class extends PerformanceEntry {
  static {
    __name(this, "PerformanceResourceTiming");
  }
  entryType = "resource";
  serverTiming = [];
  connectEnd = 0;
  connectStart = 0;
  decodedBodySize = 0;
  domainLookupEnd = 0;
  domainLookupStart = 0;
  encodedBodySize = 0;
  fetchStart = 0;
  initiatorType = "";
  name = "";
  nextHopProtocol = "";
  redirectEnd = 0;
  redirectStart = 0;
  requestStart = 0;
  responseEnd = 0;
  responseStart = 0;
  secureConnectionStart = 0;
  startTime = 0;
  transferSize = 0;
  workerStart = 0;
  responseStatus = 0;
};
var PerformanceObserverEntryList = class {
  static {
    __name(this, "PerformanceObserverEntryList");
  }
  __unenv__ = true;
  getEntries() {
    return [];
  }
  getEntriesByName(_name, _type) {
    return [];
  }
  getEntriesByType(type) {
    return [];
  }
};
var Performance = class {
  static {
    __name(this, "Performance");
  }
  __unenv__ = true;
  timeOrigin = _timeOrigin;
  eventCounts = /* @__PURE__ */ new Map();
  _entries = [];
  _resourceTimingBufferSize = 0;
  navigation = void 0;
  timing = void 0;
  timerify(_fn, _options) {
    throw createNotImplementedError("Performance.timerify");
  }
  get nodeTiming() {
    return nodeTiming;
  }
  eventLoopUtilization() {
    return {};
  }
  markResourceTiming() {
    return new PerformanceResourceTiming("");
  }
  onresourcetimingbufferfull = null;
  now() {
    if (this.timeOrigin === _timeOrigin) {
      return _performanceNow();
    }
    return Date.now() - this.timeOrigin;
  }
  clearMarks(markName) {
    this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
  }
  clearMeasures(measureName) {
    this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
  }
  clearResourceTimings() {
    this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
  }
  getEntries() {
    return this._entries;
  }
  getEntriesByName(name, type) {
    return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
  }
  getEntriesByType(type) {
    return this._entries.filter((e) => e.entryType === type);
  }
  mark(name, options) {
    const entry = new PerformanceMark(name, options);
    this._entries.push(entry);
    return entry;
  }
  measure(measureName, startOrMeasureOptions, endMark) {
    let start;
    let end;
    if (typeof startOrMeasureOptions === "string") {
      start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
      end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
    } else {
      start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
      end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
    }
    const entry = new PerformanceMeasure(measureName, {
      startTime: start,
      detail: {
        start,
        end
      }
    });
    this._entries.push(entry);
    return entry;
  }
  setResourceTimingBufferSize(maxSize) {
    this._resourceTimingBufferSize = maxSize;
  }
  addEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.addEventListener");
  }
  removeEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.removeEventListener");
  }
  dispatchEvent(event) {
    throw createNotImplementedError("Performance.dispatchEvent");
  }
  toJSON() {
    return this;
  }
};
var PerformanceObserver = class {
  static {
    __name(this, "PerformanceObserver");
  }
  __unenv__ = true;
  static supportedEntryTypes = [];
  _callback = null;
  constructor(callback) {
    this._callback = callback;
  }
  takeRecords() {
    return [];
  }
  disconnect() {
    throw createNotImplementedError("PerformanceObserver.disconnect");
  }
  observe(options) {
    throw createNotImplementedError("PerformanceObserver.observe");
  }
  bind(fn) {
    return fn;
  }
  runInAsyncScope(fn, thisArg, ...args) {
    return fn.call(thisArg, ...args);
  }
  asyncId() {
    return 0;
  }
  triggerAsyncId() {
    return 0;
  }
  emitDestroy() {
    return this;
  }
};
var performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();

// ../../.npm/_npx/32026684e21afda6/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
if (!("__unenv__" in performance)) {
  const proto = Performance.prototype;
  for (const key of Object.getOwnPropertyNames(proto)) {
    if (key !== "constructor" && !(key in performance)) {
      const desc = Object.getOwnPropertyDescriptor(proto, key);
      if (desc) {
        Object.defineProperty(performance, key, desc);
      }
    }
  }
}
globalThis.performance = performance;
globalThis.Performance = Performance;
globalThis.PerformanceEntry = PerformanceEntry;
globalThis.PerformanceMark = PerformanceMark;
globalThis.PerformanceMeasure = PerformanceMeasure;
globalThis.PerformanceObserver = PerformanceObserver;
globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
globalThis.PerformanceResourceTiming = PerformanceResourceTiming;

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default = Object.assign(() => {
}, { __unenv__: true });

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/console.mjs
var _console = globalThis.console;
var _ignoreErrors = true;
var _stderr = new Writable();
var _stdout = new Writable();
var log = _console?.log ?? noop_default;
var info = _console?.info ?? log;
var trace = _console?.trace ?? info;
var debug = _console?.debug ?? log;
var table = _console?.table ?? log;
var error = _console?.error ?? log;
var warn = _console?.warn ?? error;
var createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
var clear = _console?.clear ?? noop_default;
var count = _console?.count ?? noop_default;
var countReset = _console?.countReset ?? noop_default;
var dir = _console?.dir ?? noop_default;
var dirxml = _console?.dirxml ?? noop_default;
var group = _console?.group ?? noop_default;
var groupEnd = _console?.groupEnd ?? noop_default;
var groupCollapsed = _console?.groupCollapsed ?? noop_default;
var profile = _console?.profile ?? noop_default;
var profileEnd = _console?.profileEnd ?? noop_default;
var time = _console?.time ?? noop_default;
var timeEnd = _console?.timeEnd ?? noop_default;
var timeLog = _console?.timeLog ?? noop_default;
var timeStamp = _console?.timeStamp ?? noop_default;
var Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
var _times = /* @__PURE__ */ new Map();
var _stdoutErrorHandler = noop_default;
var _stderrErrorHandler = noop_default;

// ../../.npm/_npx/32026684e21afda6/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole = globalThis["console"];
var {
  assert,
  clear: clear2,
  // @ts-expect-error undocumented public API
  context,
  count: count2,
  countReset: countReset2,
  // @ts-expect-error undocumented public API
  createTask: createTask2,
  debug: debug2,
  dir: dir2,
  dirxml: dirxml2,
  error: error2,
  group: group2,
  groupCollapsed: groupCollapsed2,
  groupEnd: groupEnd2,
  info: info2,
  log: log2,
  profile: profile2,
  profileEnd: profileEnd2,
  table: table2,
  time: time2,
  timeEnd: timeEnd2,
  timeLog: timeLog2,
  timeStamp: timeStamp2,
  trace: trace2,
  warn: warn2
} = workerdConsole;
Object.assign(workerdConsole, {
  Console,
  _ignoreErrors,
  _stderr,
  _stderrErrorHandler,
  _stdout,
  _stdoutErrorHandler,
  _times
});
var console_default = workerdConsole;

// ../../.npm/_npx/32026684e21afda6/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
globalThis.console = console_default;

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
  const now = Date.now();
  const seconds = Math.trunc(now / 1e3);
  const nanos = now % 1e3 * 1e6;
  if (startTime) {
    let diffSeconds = seconds - startTime[0];
    let diffNanos = nanos - startTime[0];
    if (diffNanos < 0) {
      diffSeconds = diffSeconds - 1;
      diffNanos = 1e9 + diffNanos;
    }
    return [diffSeconds, diffNanos];
  }
  return [seconds, nanos];
}, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
  return BigInt(Date.now() * 1e6);
}, "bigint") });

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream = class {
  static {
    __name(this, "ReadStream");
  }
  fd;
  isRaw = false;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  setRawMode(mode) {
    this.isRaw = mode;
    return this;
  }
};

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream = class {
  static {
    __name(this, "WriteStream");
  }
  fd;
  columns = 80;
  rows = 24;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  clearLine(dir3, callback) {
    callback && callback();
    return false;
  }
  clearScreenDown(callback) {
    callback && callback();
    return false;
  }
  cursorTo(x, y, callback) {
    callback && typeof callback === "function" && callback();
    return false;
  }
  moveCursor(dx, dy, callback) {
    callback && callback();
    return false;
  }
  getColorDepth(env2) {
    return 1;
  }
  hasColors(count3, env2) {
    return false;
  }
  getWindowSize() {
    return [this.columns, this.rows];
  }
  write(str, encoding, cb) {
    if (str instanceof Uint8Array) {
      str = new TextDecoder().decode(str);
    }
    try {
      console.log(str);
    } catch {
    }
    cb && typeof cb === "function" && cb();
    return false;
  }
};

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION = "22.14.0";

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
var Process = class _Process extends EventEmitter {
  static {
    __name(this, "Process");
  }
  env;
  hrtime;
  nextTick;
  constructor(impl) {
    super();
    this.env = impl.env;
    this.hrtime = impl.hrtime;
    this.nextTick = impl.nextTick;
    for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
      const value = this[prop];
      if (typeof value === "function") {
        this[prop] = value.bind(this);
      }
    }
  }
  // --- event emitter ---
  emitWarning(warning, type, code) {
    console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
  }
  emit(...args) {
    return super.emit(...args);
  }
  listeners(eventName) {
    return super.listeners(eventName);
  }
  // --- stdio (lazy initializers) ---
  #stdin;
  #stdout;
  #stderr;
  get stdin() {
    return this.#stdin ??= new ReadStream(0);
  }
  get stdout() {
    return this.#stdout ??= new WriteStream(1);
  }
  get stderr() {
    return this.#stderr ??= new WriteStream(2);
  }
  // --- cwd ---
  #cwd = "/";
  chdir(cwd2) {
    this.#cwd = cwd2;
  }
  cwd() {
    return this.#cwd;
  }
  // --- dummy props and getters ---
  arch = "";
  platform = "";
  argv = [];
  argv0 = "";
  execArgv = [];
  execPath = "";
  title = "";
  pid = 200;
  ppid = 100;
  get version() {
    return `v${NODE_VERSION}`;
  }
  get versions() {
    return { node: NODE_VERSION };
  }
  get allowedNodeEnvironmentFlags() {
    return /* @__PURE__ */ new Set();
  }
  get sourceMapsEnabled() {
    return false;
  }
  get debugPort() {
    return 0;
  }
  get throwDeprecation() {
    return false;
  }
  get traceDeprecation() {
    return false;
  }
  get features() {
    return {};
  }
  get release() {
    return {};
  }
  get connected() {
    return false;
  }
  get config() {
    return {};
  }
  get moduleLoadList() {
    return [];
  }
  constrainedMemory() {
    return 0;
  }
  availableMemory() {
    return 0;
  }
  uptime() {
    return 0;
  }
  resourceUsage() {
    return {};
  }
  // --- noop methods ---
  ref() {
  }
  unref() {
  }
  // --- unimplemented methods ---
  umask() {
    throw createNotImplementedError("process.umask");
  }
  getBuiltinModule() {
    return void 0;
  }
  getActiveResourcesInfo() {
    throw createNotImplementedError("process.getActiveResourcesInfo");
  }
  exit() {
    throw createNotImplementedError("process.exit");
  }
  reallyExit() {
    throw createNotImplementedError("process.reallyExit");
  }
  kill() {
    throw createNotImplementedError("process.kill");
  }
  abort() {
    throw createNotImplementedError("process.abort");
  }
  dlopen() {
    throw createNotImplementedError("process.dlopen");
  }
  setSourceMapsEnabled() {
    throw createNotImplementedError("process.setSourceMapsEnabled");
  }
  loadEnvFile() {
    throw createNotImplementedError("process.loadEnvFile");
  }
  disconnect() {
    throw createNotImplementedError("process.disconnect");
  }
  cpuUsage() {
    throw createNotImplementedError("process.cpuUsage");
  }
  setUncaughtExceptionCaptureCallback() {
    throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
  }
  hasUncaughtExceptionCaptureCallback() {
    throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
  }
  initgroups() {
    throw createNotImplementedError("process.initgroups");
  }
  openStdin() {
    throw createNotImplementedError("process.openStdin");
  }
  assert() {
    throw createNotImplementedError("process.assert");
  }
  binding() {
    throw createNotImplementedError("process.binding");
  }
  // --- attached interfaces ---
  permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
  report = {
    directory: "",
    filename: "",
    signal: "SIGUSR2",
    compact: false,
    reportOnFatalError: false,
    reportOnSignal: false,
    reportOnUncaughtException: false,
    getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
    writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
  };
  finalization = {
    register: /* @__PURE__ */ notImplemented("process.finalization.register"),
    unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
    registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
  };
  memoryUsage = Object.assign(() => ({
    arrayBuffers: 0,
    rss: 0,
    external: 0,
    heapTotal: 0,
    heapUsed: 0
  }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
  // --- undefined props ---
  mainModule = void 0;
  domain = void 0;
  // optional
  send = void 0;
  exitCode = void 0;
  channel = void 0;
  getegid = void 0;
  geteuid = void 0;
  getgid = void 0;
  getgroups = void 0;
  getuid = void 0;
  setegid = void 0;
  seteuid = void 0;
  setgid = void 0;
  setgroups = void 0;
  setuid = void 0;
  // internals
  _events = void 0;
  _eventsCount = void 0;
  _exiting = void 0;
  _maxListeners = void 0;
  _debugEnd = void 0;
  _debugProcess = void 0;
  _fatalException = void 0;
  _getActiveHandles = void 0;
  _getActiveRequests = void 0;
  _kill = void 0;
  _preload_modules = void 0;
  _rawDebug = void 0;
  _startProfilerIdleNotifier = void 0;
  _stopProfilerIdleNotifier = void 0;
  _tickCallback = void 0;
  _disconnect = void 0;
  _handleQueue = void 0;
  _pendingMessage = void 0;
  _channel = void 0;
  _send = void 0;
  _linkedBinding = void 0;
};

// ../../.npm/_npx/32026684e21afda6/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess = globalThis["process"];
var getBuiltinModule = globalProcess.getBuiltinModule;
var workerdProcess = getBuiltinModule("node:process");
var unenvProcess = new Process({
  env: globalProcess.env,
  hrtime,
  // `nextTick` is available from workerd process v1
  nextTick: workerdProcess.nextTick
});
var { exit, features, platform } = workerdProcess;
var {
  _channel,
  _debugEnd,
  _debugProcess,
  _disconnect,
  _events,
  _eventsCount,
  _exiting,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _handleQueue,
  _kill,
  _linkedBinding,
  _maxListeners,
  _pendingMessage,
  _preload_modules,
  _rawDebug,
  _send,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  arch,
  argv,
  argv0,
  assert: assert2,
  availableMemory,
  binding,
  channel,
  chdir,
  config,
  connected,
  constrainedMemory,
  cpuUsage,
  cwd,
  debugPort,
  disconnect,
  dlopen,
  domain,
  emit,
  emitWarning,
  env,
  eventNames,
  execArgv,
  execPath,
  exitCode,
  finalization,
  getActiveResourcesInfo,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getMaxListeners,
  getuid,
  hasUncaughtExceptionCaptureCallback,
  hrtime: hrtime3,
  initgroups,
  kill,
  listenerCount,
  listeners,
  loadEnvFile,
  mainModule,
  memoryUsage,
  moduleLoadList,
  nextTick,
  off,
  on,
  once,
  openStdin,
  permission,
  pid,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  reallyExit,
  ref,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  send,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setMaxListeners,
  setSourceMapsEnabled,
  setuid,
  setUncaughtExceptionCaptureCallback,
  sourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  throwDeprecation,
  title,
  traceDeprecation,
  umask,
  unref,
  uptime,
  version,
  versions
} = unenvProcess;
var _process = {
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  hasUncaughtExceptionCaptureCallback,
  setUncaughtExceptionCaptureCallback,
  loadEnvFile,
  sourceMapsEnabled,
  arch,
  argv,
  argv0,
  chdir,
  config,
  connected,
  constrainedMemory,
  availableMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  disconnect,
  emit,
  emitWarning,
  env,
  eventNames,
  execArgv,
  execPath,
  exit,
  finalization,
  features,
  getBuiltinModule,
  getActiveResourcesInfo,
  getMaxListeners,
  hrtime: hrtime3,
  kill,
  listeners,
  listenerCount,
  memoryUsage,
  nextTick,
  on,
  off,
  once,
  pid,
  platform,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  setMaxListeners,
  setSourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  title,
  throwDeprecation,
  traceDeprecation,
  umask,
  uptime,
  version,
  versions,
  // @ts-expect-error old API
  domain,
  initgroups,
  moduleLoadList,
  reallyExit,
  openStdin,
  assert: assert2,
  binding,
  send,
  exitCode,
  channel,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getuid,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setuid,
  permission,
  mainModule,
  _events,
  _eventsCount,
  _exiting,
  _maxListeners,
  _debugEnd,
  _debugProcess,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _kill,
  _preload_modules,
  _rawDebug,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  _disconnect,
  _handleQueue,
  _pendingMessage,
  _channel,
  _send,
  _linkedBinding
};
var process_default = _process;

// ../../.npm/_npx/32026684e21afda6/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
globalThis.process = process_default;

// _lib/auth.js
var SECRET = "yeni-yolculuk-secret-key-2026-orcun";
async function hashPassword(password) {
  const e = new TextEncoder();
  const d = e.encode(password + SECRET);
  const h = await crypto.subtle.digest("SHA-256", d);
  return Array.from(new Uint8Array(h)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
__name(hashPassword, "hashPassword");
async function createToken(payload) {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const body = btoa(JSON.stringify({ ...payload, exp: Date.now() + 864e5 * 7 }));
  const data = header + "." + body;
  const sig = await sign(data);
  return data + "." + sig;
}
__name(createToken, "createToken");
async function verifyToken(token) {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const [header, body, signature] = parts;
    const expectedSig = await sign(header + "." + body);
    if (signature !== expectedSig) return null;
    const payload = JSON.parse(atob(body));
    if (payload.exp < Date.now()) return null;
    return payload;
  } catch (e) {
    return null;
  }
}
__name(verifyToken, "verifyToken");
async function sign(data) {
  const e = new TextEncoder();
  const keyData = e.encode(SECRET);
  const key = await crypto.subtle.importKey("raw", keyData, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sigBuffer = await crypto.subtle.sign("HMAC", key, e.encode(data));
  return Array.from(new Uint8Array(sigBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
__name(sign, "sign");
async function requireAuth(request) {
  const auth = request.headers.get("Authorization");
  if (!auth || !auth.startsWith("Bearer ")) return null;
  const token = auth.substring(7);
  return await verifyToken(token);
}
__name(requireAuth, "requireAuth");

// api/articles/[id].js
async function onRequestGet(context2) {
  const { request, env: env2, params } = context2;
  const id = params.id;
  try {
    let article;
    if (!isNaN(id)) {
      article = await env2.DB.prepare("SELECT a.*, c.name as category_name, c.icon as category_icon, c.slug as category_slug FROM articles a LEFT JOIN categories c ON a.category_id = c.id WHERE a.id = ?").bind(id).first();
    }
    if (!article) {
      article = await env2.DB.prepare("SELECT a.*, c.name as category_name, c.icon as category_icon, c.slug as category_slug FROM articles a LEFT JOIN categories c ON a.category_id = c.id WHERE a.slug = ?").bind(id).first();
    }
    if (!article) return Response.json({ error: "Makale bulunamad\u0131" }, { status: 404 });
    await env2.DB.prepare("UPDATE articles SET views = views + 1 WHERE id = ?").bind(article.id).run();
    article.views = (article.views || 0) + 1;
    return Response.json({ article });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestGet, "onRequestGet");
async function onRequestPut(context2) {
  const { request, env: env2, params } = context2;
  const auth = await requireAuth(request);
  if (!auth) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  try {
    const body = await request.json();
    const { title: title2, slug, excerpt, content, category_id, status, tags, featured, cover_image } = body;
    await env2.DB.prepare("UPDATE articles SET title = ?, slug = ?, excerpt = ?, content = ?, category_id = ?, status = ?, tags = ?, featured = ?, cover_image = ?, updated_at = datetime(now) WHERE id = ?").bind(title2, slug, excerpt || "", content, category_id || null, status || "draft", tags || "", featured || 0, cover_image || "", params.id).run();
    return Response.json({ success: true });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestPut, "onRequestPut");
async function onRequestDelete(context2) {
  const { request, env: env2, params } = context2;
  const auth = await requireAuth(request);
  if (!auth) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  try {
    await env2.DB.prepare("DELETE FROM articles WHERE id = ?").bind(params.id).run();
    return Response.json({ success: true });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestDelete, "onRequestDelete");

// api/publications/[id].js
async function onRequestGet2(context2) {
  const { request, env: env2, params } = context2;
  const id = params.id;
  try {
    let pub;
    if (!isNaN(id)) {
      pub = await env2.DB.prepare("SELECT * FROM publications WHERE id = ?").bind(id).first();
    }
    if (!pub) {
      pub = await env2.DB.prepare("SELECT * FROM publications WHERE slug = ? AND status = ?").bind(id, "published").first();
    }
    if (!pub) return Response.json({ error: "Yay\u0131n bulunamad\u0131" }, { status: 404 });
    await env2.DB.prepare("UPDATE publications SET views = views + 1 WHERE id = ?").bind(pub.id).run();
    pub.views = (pub.views || 0) + 1;
    return Response.json({ publication: pub });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestGet2, "onRequestGet");
async function onRequestDelete2(context2) {
  const { request, env: env2, params } = context2;
  const auth = await requireAuth(request);
  if (!auth) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  try {
    await env2.DB.prepare("DELETE FROM publications WHERE id = ?").bind(params.id).run();
    return Response.json({ success: true });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestDelete2, "onRequestDelete");

// api/articles/index.js
async function onRequestGet3(context2) {
  const { request, env: env2 } = context2;
  const url = new URL(request.url);
  const limit = parseInt(url.searchParams.get("limit")) || 50;
  const category = url.searchParams.get("category");
  const status = url.searchParams.get("status") || "published";
  let query = "SELECT a.*, c.name as category_name, c.icon as category_icon, c.slug as category_slug FROM articles a LEFT JOIN categories c ON a.category_id = c.id WHERE a.status = ?";
  const params = [status];
  if (category) {
    query += " AND c.slug = ?";
    params.push(category);
  }
  query += " ORDER BY a.created_at DESC LIMIT ?";
  params.push(limit);
  try {
    const result = await env2.DB.prepare(query).bind(...params).all();
    return Response.json({ articles: result.results });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestGet3, "onRequestGet");
async function onRequestPost(context2) {
  const { request, env: env2 } = context2;
  const auth = await requireAuth(request);
  if (!auth) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  try {
    const body = await request.json();
    const { title: title2, slug, excerpt, content, category_id, status, tags, featured, cover_image } = body;
    if (!title2 || !content) return Response.json({ error: "Ba\u015Fl\u0131k ve i\xE7erik gerekli" }, { status: 400 });
    const finalSlug = slug || title2.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
    const result = await env2.DB.prepare("INSERT INTO articles (title, slug, excerpt, content, category_id, status, tags, featured, cover_image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)").bind(title2, finalSlug, excerpt || "", content, category_id || null, status || "draft", tags || "", featured || 0, cover_image || "").run();
    return Response.json({ success: true, id: result.meta.last_row_id });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestPost, "onRequestPost");
async function onRequestPut2(context2) {
  const { request, env: env2, params } = context2;
  const auth = await requireAuth(request);
  if (!auth) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  try {
    const body = await request.json();
    const { title: title2, slug, excerpt, content, category_id, status, tags, featured, cover_image } = body;
    await env2.DB.prepare("UPDATE articles SET title = ?, slug = ?, excerpt = ?, content = ?, category_id = ?, status = ?, tags = ?, featured = ?, cover_image = ?, updated_at = datetime(now) WHERE id = ?").bind(title2, slug, excerpt || "", content, category_id || null, status || "draft", tags || "", featured || 0, cover_image || "", params.id).run();
    return Response.json({ success: true });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestPut2, "onRequestPut");
async function onRequestDelete3(context2) {
  const { request, env: env2, params } = context2;
  const auth = await requireAuth(request);
  if (!auth) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  try {
    await env2.DB.prepare("DELETE FROM articles WHERE id = ?").bind(params.id).run();
    return Response.json({ success: true });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestDelete3, "onRequestDelete");

// api/auth/index.js
async function onRequestPost2(context2) {
  const { request, env: env2 } = context2;
  try {
    const { username, password } = await request.json();
    if (!username || !password) return Response.json({ error: "Kullan\u0131c\u0131 ad\u0131 ve \u015Fifre gerekli" }, { status: 400 });
    const passwordHash = await hashPassword(password);
    const admin = await env2.DB.prepare("SELECT id, username, email, password_hash FROM admins WHERE username = ?").bind(username).first();
    if (!admin || admin.password_hash !== passwordHash) return Response.json({ error: "Hatal\u0131 kullan\u0131c\u0131 ad\u0131 veya \u015Fifre" }, { status: 401 });
    const token = await createToken({ id: admin.id, username: admin.username });
    return Response.json({ token, username: admin.username });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131" }, { status: 500 });
  }
}
__name(onRequestPost2, "onRequestPost");
async function onRequestGet4(context2) {
  const { request } = context2;
  const payload = await requireAuth(request);
  if (!payload) return Response.json({ valid: false }, { status: 401 });
  return Response.json({ valid: true, username: payload.username, id: payload.id });
}
__name(onRequestGet4, "onRequestGet");
async function onRequestPut3(context2) {
  const { request, env: env2 } = context2;
  try {
    const count3 = await env2.DB.prepare("SELECT COUNT(*) as count FROM admins").first();
    if (count3.count > 0) return Response.json({ error: "Admin zaten mevcut. Giri\u015F yap\u0131n." }, { status: 400 });
    const { username, email, password } = await request.json();
    if (!username || !email || !password) return Response.json({ error: "T\xFCm alanlar gerekli" }, { status: 400 });
    if (password.length < 6) return Response.json({ error: "\u015Eifre en az 6 karakter olmal\u0131" }, { status: 400 });
    const passwordHash = await hashPassword(password);
    await env2.DB.prepare("INSERT INTO admins (username, email, password_hash) VALUES (?, ?, ?)").bind(username, email, passwordHash).run();
    return Response.json({ success: true, message: "Admin olu\u015Fturuldu" });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestPut3, "onRequestPut");

// api/categories/index.js
async function onRequestGet5(context2) {
  const { request, env: env2 } = context2;
  try {
    const result = await env2.DB.prepare("SELECT c.*, (SELECT COUNT(*) FROM articles a WHERE a.category_id = c.id AND a.status = published) as article_count FROM categories c ORDER BY c.sort_order ASC").all();
    return Response.json({ categories: result.results });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestGet5, "onRequestGet");
async function onRequestPost3(context2) {
  const { request, env: env2 } = context2;
  const auth = await requireAuth(request);
  if (!auth) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  try {
    const { name, slug, description, icon, color, sort_order } = await request.json();
    if (!name || !slug) return Response.json({ error: "\u0130sim ve slug gerekli" }, { status: 400 });
    const result = await env2.DB.prepare("INSERT INTO categories (name, slug, description, icon, color, sort_order) VALUES (?, ?, ?, ?, ?, ?)").bind(name, slug, description || "", icon || "\u{1F4D6}", color || "#4FACFE", sort_order || 0).run();
    return Response.json({ success: true, id: result.meta.last_row_id });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestPost3, "onRequestPost");
async function onRequestPut4(context2) {
  const { request, env: env2, params } = context2;
  const auth = await requireAuth(request);
  if (!auth) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  try {
    const { name, slug, description, icon, color, sort_order } = await request.json();
    await env2.DB.prepare("UPDATE categories SET name = ?, slug = ?, description = ?, icon = ?, color = ?, sort_order = ? WHERE id = ?").bind(name, slug, description || "", icon || "\u{1F4D6}", color || "#4FACFE", sort_order || 0, params.id).run();
    return Response.json({ success: true });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestPut4, "onRequestPut");

// api/publications/index.js
async function onRequestGet6(context2) {
  const { request, env: env2 } = context2;
  const url = new URL(request.url);
  const limit = parseInt(url.searchParams.get("limit")) || 50;
  const slug = url.searchParams.get("slug");
  try {
    if (slug) {
      const pub = await env2.DB.prepare("SELECT * FROM publications WHERE slug = ? AND status = ?").bind(slug, "published").first();
      if (!pub) return Response.json({ error: "Yay\u0131n bulunamad\u0131" }, { status: 404 });
      await env2.DB.prepare("UPDATE publications SET views = views + 1 WHERE id = ?").bind(pub.id).run();
      pub.views = (pub.views || 0) + 1;
      return Response.json({ publication: pub });
    }
    const result = await env2.DB.prepare("SELECT * FROM publications WHERE status = ? ORDER BY publish_date DESC, created_at DESC LIMIT ?").bind("published", limit).all();
    return Response.json({ publications: result.results });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestGet6, "onRequestGet");
async function onRequestPost4(context2) {
  const { request, env: env2 } = context2;
  const auth = await requireAuth(request);
  if (!auth) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  try {
    const body = await request.json();
    const { title: title2, slug, excerpt, content, magazine_name, magazine_url, issue_number, publish_date, cover_image, pdf_url, category, tags, og_title, og_description } = body;
    if (!title2 || !magazine_name) return Response.json({ error: "Ba\u015Fl\u0131k ve dergi ad\u0131 gerekli" }, { status: 400 });
    const finalSlug = slug || title2.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
    const result = await env2.DB.prepare("INSERT INTO publications (title, slug, excerpt, content, magazine_name, magazine_url, issue_number, publish_date, cover_image, pdf_url, category, tags, og_title, og_description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)").bind(title2, finalSlug, excerpt || "", content || "", magazine_name, magazine_url || "", issue_number || "", publish_date || "", cover_image || "", pdf_url || "", category || "", tags || "", og_title || "", og_description || "").run();
    return Response.json({ success: true, id: result.meta.last_row_id });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestPost4, "onRequestPost");
async function onRequestPut5(context2) {
  const { request, env: env2, params } = context2;
  const auth = await requireAuth(request);
  if (!auth) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  try {
    const body = await request.json();
    const { title: title2, slug, excerpt, content, magazine_name, magazine_url, issue_number, publish_date, cover_image, pdf_url, category, tags, status, og_title, og_description } = body;
    await env2.DB.prepare("UPDATE publications SET title = ?, slug = ?, excerpt = ?, content = ?, magazine_name = ?, magazine_url = ?, issue_number = ?, publish_date = ?, cover_image = ?, pdf_url = ?, category = ?, tags = ?, status = ?, og_title = ?, og_description = ?, updated_at = datetime(now) WHERE id = ?").bind(title2, slug, excerpt || "", content || "", magazine_name, magazine_url || "", issue_number || "", publish_date || "", cover_image || "", pdf_url || "", category || "", tags || "", status || "published", og_title || "", og_description || "", params.id).run();
    return Response.json({ success: true });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestPut5, "onRequestPut");
async function onRequestDelete4(context2) {
  const { request, env: env2, params } = context2;
  const auth = await requireAuth(request);
  if (!auth) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  try {
    await env2.DB.prepare("DELETE FROM publications WHERE id = ?").bind(params.id).run();
    return Response.json({ success: true });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestDelete4, "onRequestDelete");

// api/roadmap/index.js
async function onRequestGet7(context2) {
  const { request, env: env2 } = context2;
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  let query = "SELECT * FROM roadmap_items";
  const params = [];
  if (category) {
    query += " WHERE category = ?";
    params.push(category);
  }
  query += " ORDER BY category ASC, stage ASC, order_num ASC";
  try {
    const result = await env2.DB.prepare(query).bind(...params).all();
    return Response.json(result.results);
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestGet7, "onRequestGet");
async function onRequestPost5(context2) {
  const { request, env: env2 } = context2;
  const auth = await requireAuth(request);
  if (!auth) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  try {
    const { title: title2, description, category, stage, order_num, status, icon } = await request.json();
    if (!title2 || !category) return Response.json({ error: "Ba\u015Fl\u0131k ve kategori gerekli" }, { status: 400 });
    const result = await env2.DB.prepare("INSERT INTO roadmap_items (title, description, category, stage, order_num, status, icon) VALUES (?, ?, ?, ?, ?, ?, ?)").bind(title2, description || "", category, stage || 1, order_num || 1, status || "locked", icon || "\u2728").run();
    return Response.json({ success: true, id: result.meta.last_row_id });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestPost5, "onRequestPost");
async function onRequestPut6(context2) {
  const { request, env: env2, params } = context2;
  const auth = await requireAuth(request);
  if (!auth) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  try {
    const { title: title2, description, category, stage, order_num, status, icon } = await request.json();
    await env2.DB.prepare("UPDATE roadmap_items SET title = ?, description = ?, category = ?, stage = ?, order_num = ?, status = ?, icon = ? WHERE id = ?").bind(title2, description || "", category, stage || 1, order_num || 1, status || "locked", icon || "\u2728", params.id).run();
    return Response.json({ success: true });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestPut6, "onRequestPut");
async function onRequestDelete5(context2) {
  const { request, env: env2, params } = context2;
  const auth = await requireAuth(request);
  if (!auth) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  try {
    await env2.DB.prepare("DELETE FROM roadmap_items WHERE id = ?").bind(params.id).run();
    return Response.json({ success: true });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestDelete5, "onRequestDelete");

// api/settings/index.js
async function onRequestGet8(context2) {
  const { env: env2 } = context2;
  try {
    const result = await env2.DB.prepare("SELECT key, value FROM settings").all();
    const settings = {};
    result.results.forEach((r) => {
      settings[r.key] = r.value;
    });
    return Response.json({ settings });
  } catch (e) {
    return Response.json({ settings: {} });
  }
}
__name(onRequestGet8, "onRequestGet");
async function onRequestPut7(context2) {
  const { request, env: env2 } = context2;
  const auth = await requireAuth(request);
  if (!auth) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  try {
    const settings = await request.json();
    for (const [key, value] of Object.entries(settings)) {
      await env2.DB.prepare("INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = ?").bind(key, value, value).run();
    }
    return Response.json({ success: true });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131: " + e.message }, { status: 500 });
  }
}
__name(onRequestPut7, "onRequestPut");

// api/share/index.js
async function onRequestPost6(context2) {
  const { request, env: env2 } = context2;
  try {
    const { article_id, platform: platform2 } = await request.json();
    if (!article_id) return Response.json({ error: "Makale ID gerekli" }, { status: 400 });
    await env2.DB.prepare("UPDATE articles SET shares = shares + 1 WHERE id = ?").bind(article_id).run();
    return Response.json({ success: true });
  } catch (e) {
    return Response.json({ error: "Sunucu hatas\u0131" }, { status: 500 });
  }
}
__name(onRequestPost6, "onRequestPost");

// api/stats/index.js
async function onRequestGet9(context2) {
  const { env: env2 } = context2;
  try {
    const [articles, views, shares, roadmap, categories, publications] = await Promise.all([env2.DB.prepare("SELECT COUNT(*) as count FROM articles WHERE status = 'published'").first(), env2.DB.prepare("SELECT COALESCE(SUM(views), 0) as count FROM articles").first(), env2.DB.prepare("SELECT COALESCE(SUM(shares), 0) as count FROM articles").first(), env2.DB.prepare("SELECT COUNT(*) as count FROM roadmap_items").first(), env2.DB.prepare("SELECT COUNT(*) as count FROM categories").first(), env2.DB.prepare("SELECT COUNT(*) as count FROM publications WHERE status = 'published'").first()]);
    return Response.json({ articles: articles.count, views: views.count, shares: shares.count, roadmap: roadmap.count, categories: categories.count, publications: publications.count });
  } catch (e) {
    return Response.json({ articles: 0, views: 0, shares: 0, roadmap: 0, categories: 0, publications: 0 });
  }
}
__name(onRequestGet9, "onRequestGet");

// og-image/index.js
async function onRequestGet10(context2) {
  const { request, env: env2 } = context2;
  const url = new URL(request.url);
  const title2 = url.searchParams.get("title") || "Yeni Yolculuk";
  const subtitle = url.searchParams.get("subtitle") || "Felsefe & Edebiyat";
  const category = url.searchParams.get("category") || "";
  const author = url.searchParams.get("author") || "Or\xE7un Kundakc\u0131";
  const type = url.searchParams.get("type") || "article";
  let displayTitle = title2;
  if (title2.length > 60) displayTitle = title2.substring(0, 60) + "\u2026";
  let displaySubtitle = subtitle;
  if (subtitle && subtitle.length > 100) displaySubtitle = subtitle.substring(0, 100) + "\u2026";
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0A1929"/><stop offset="30%" stop-color="#0D2B4E"/><stop offset="70%" stop-color="#1976D2"/><stop offset="100%" stop-color="#4FACFE"/></linearGradient><linearGradient id="glass" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.08)"/><stop offset="100%" stop-color="rgba(255,255,255,0.02)"/></linearGradient><linearGradient id="accentLine" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#4FACFE"/><stop offset="100%" stop-color="#00C6FB"/></linearGradient><filter id="blur"><feGaussianBlur stdDeviation="60"/></filter></defs><rect width="1200" height="630" fill="url(#bg)"/><circle cx="100" cy="100" r="200" fill="#4FACFE" opacity="0.15" filter="url(#blur)"/><circle cx="1100" cy="550" r="250" fill="#667EEA" opacity="0.12" filter="url(#blur)"/><rect x="60" y="60" width="1080" height="510" rx="24" fill="url(#glass)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/><rect x="60" y="60" width="1080" height="4" rx="2" fill="url(#accentLine)"/><g transform="translate(100, 110)"><rect width="48" height="48" rx="12" fill="url(#accentLine)"/><text x="24" y="34" font-size="26" text-anchor="middle" fill="white">\u{1F9ED}</text><text x="64" y="30" font-family="Georgia, serif" font-size="22" font-weight="600" fill="#E8F4FD">Yeni Yolculuk</text><text x="64" y="48" font-family="Arial, sans-serif" font-size="12" fill="#6B8CAE" letter-spacing="2">FELSEFE &amp; EDEBIYAT</text></g>${category ? `<g transform="translate(100, 190)"><rect width="${category.length * 9 + 40}" height="36" rx="18" fill="rgba(79,172,254,0.15)" stroke="rgba(79,172,254,0.3)" stroke-width="1"/><text x="20" y="24" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="#4FACFE" letter-spacing="1.5">${escapeXml(category.toUpperCase())}</text></g>` : ""}<text x="100" y="${category ? 290 : 260}" font-family="Georgia, serif" font-size="${displayTitle.length > 40 ? 44 : 56}" font-weight="600" fill="#E8F4FD" letter-spacing="-1">${escapeXml(displayTitle)}</text>${displaySubtitle ? `<text x="100" y="${category ? 340 : 310}" font-family="Georgia, serif" font-size="22" font-style="italic" fill="#A0C4E8" opacity="0.9">${escapeXml(displaySubtitle)}</text>` : ""}<g transform="translate(100, 490)"><text x="0" y="0" font-family="Arial, sans-serif" font-size="14" fill="#6B8CAE">${type === "publication" ? "\u{1F4F0} Dergi Yay\u0131n\u0131" : type === "roadmap" ? "\u{1F9ED} Yol Haritas\u0131" : "\u270D\uFE0F Makale"}</text><text x="0" y="24" font-family="Arial, sans-serif" font-size="14" fill="#6B8CAE">${escapeXml(author)} \xB7 orcunkundakci.com.tr</text></g><g transform="translate(960, 490)"><rect x="0" y="0" width="40" height="40" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)"/><text x="20" y="28" font-size="18" text-anchor="middle" fill="#A0C4E8">\u{1D54F}</text><rect x="52" y="0" width="40" height="40" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)"/><text x="72" y="28" font-size="14" text-anchor="middle" fill="#A0C4E8">\u2601\uFE0F</text><rect x="104" y="0" width="40" height="40" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)"/><text x="124" y="28" font-size="18" text-anchor="middle" fill="#A0C4E8">\u{1F517}</text></g><rect x="0" y="626" width="1200" height="4" fill="url(#accentLine)" opacity="0.5"/></svg>`;
  return new Response(svg, { headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=86400", "Access-Control-Allow-Origin": "*" } });
}
__name(onRequestGet10, "onRequestGet");
function escapeXml(str) {
  if (!str) return "";
  return str.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}
__name(escapeXml, "escapeXml");

// _middleware.js
async function onRequest(context2) {
  const { request, env: env2, next } = context2;
  const sh = { "X-Content-Type-Options": "nosniff", "X-Frame-Options": "DENY", "X-XSS-Protection": "1; mode=block", "Referrer-Policy": "strict-origin-when-cross-origin", "Permissions-Policy": "camera=(), microphone=(), geolocation()", "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload" };
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: { ...sh, "Access-Control-Allow-Origin": request.headers.get("Origin") || "*", "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", "Access-Control-Allow-Headers": "Content-Type, Authorization", "Access-Control-Max-Age": "86400" } });
  }
  let response = await next();
  const nh = new Headers(response.headers);
  Object.entries(sh).forEach(([k, v]) => nh.set(k, v));
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers: nh });
}
__name(onRequest, "onRequest");

// ../.wrangler/tmp/pages-4rEIzY/functionsRoutes-0.15124572111585843.mjs
var routes = [
  {
    routePath: "/api/articles/:id",
    mountPath: "/api/articles",
    method: "DELETE",
    middlewares: [],
    modules: [onRequestDelete]
  },
  {
    routePath: "/api/articles/:id",
    mountPath: "/api/articles",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet]
  },
  {
    routePath: "/api/articles/:id",
    mountPath: "/api/articles",
    method: "PUT",
    middlewares: [],
    modules: [onRequestPut]
  },
  {
    routePath: "/api/publications/:id",
    mountPath: "/api/publications",
    method: "DELETE",
    middlewares: [],
    modules: [onRequestDelete2]
  },
  {
    routePath: "/api/publications/:id",
    mountPath: "/api/publications",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet2]
  },
  {
    routePath: "/api/articles",
    mountPath: "/api/articles",
    method: "DELETE",
    middlewares: [],
    modules: [onRequestDelete3]
  },
  {
    routePath: "/api/articles",
    mountPath: "/api/articles",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet3]
  },
  {
    routePath: "/api/articles",
    mountPath: "/api/articles",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost]
  },
  {
    routePath: "/api/articles",
    mountPath: "/api/articles",
    method: "PUT",
    middlewares: [],
    modules: [onRequestPut2]
  },
  {
    routePath: "/api/auth",
    mountPath: "/api/auth",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet4]
  },
  {
    routePath: "/api/auth",
    mountPath: "/api/auth",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost2]
  },
  {
    routePath: "/api/auth",
    mountPath: "/api/auth",
    method: "PUT",
    middlewares: [],
    modules: [onRequestPut3]
  },
  {
    routePath: "/api/categories",
    mountPath: "/api/categories",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet5]
  },
  {
    routePath: "/api/categories",
    mountPath: "/api/categories",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost3]
  },
  {
    routePath: "/api/categories",
    mountPath: "/api/categories",
    method: "PUT",
    middlewares: [],
    modules: [onRequestPut4]
  },
  {
    routePath: "/api/publications",
    mountPath: "/api/publications",
    method: "DELETE",
    middlewares: [],
    modules: [onRequestDelete4]
  },
  {
    routePath: "/api/publications",
    mountPath: "/api/publications",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet6]
  },
  {
    routePath: "/api/publications",
    mountPath: "/api/publications",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost4]
  },
  {
    routePath: "/api/publications",
    mountPath: "/api/publications",
    method: "PUT",
    middlewares: [],
    modules: [onRequestPut5]
  },
  {
    routePath: "/api/roadmap",
    mountPath: "/api/roadmap",
    method: "DELETE",
    middlewares: [],
    modules: [onRequestDelete5]
  },
  {
    routePath: "/api/roadmap",
    mountPath: "/api/roadmap",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet7]
  },
  {
    routePath: "/api/roadmap",
    mountPath: "/api/roadmap",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost5]
  },
  {
    routePath: "/api/roadmap",
    mountPath: "/api/roadmap",
    method: "PUT",
    middlewares: [],
    modules: [onRequestPut6]
  },
  {
    routePath: "/api/settings",
    mountPath: "/api/settings",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet8]
  },
  {
    routePath: "/api/settings",
    mountPath: "/api/settings",
    method: "PUT",
    middlewares: [],
    modules: [onRequestPut7]
  },
  {
    routePath: "/api/share",
    mountPath: "/api/share",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost6]
  },
  {
    routePath: "/api/stats",
    mountPath: "/api/stats",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet9]
  },
  {
    routePath: "/og-image",
    mountPath: "/og-image",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet10]
  },
  {
    routePath: "/",
    mountPath: "/",
    method: "",
    middlewares: [onRequest],
    modules: []
  }
];

// ../../.npm/_npx/32026684e21afda6/node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count3 = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count3--;
          if (count3 === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count3++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count3)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");

// ../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/pages-template-worker.ts
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env2, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context2 = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env: env2,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context2);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env2["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error3) {
      if (isFailOpen) {
        const response = await env2["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error3;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");
export {
  pages_template_worker_default as default
};

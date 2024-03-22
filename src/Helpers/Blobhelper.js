"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlob = exports.downloadBlobToFile = exports.CreateBlobFromBuffer = exports.CreateBlob = exports.ListContainers = exports.CreateContainer = void 0;
var storage_blob_1 = require("@azure/storage-blob");
var connStr = process.env.CONNECTIONSTRING;
var blobServiceClient = storage_blob_1.BlobServiceClient.fromConnectionString(connStr);
function CreateContainer() {
    return __awaiter(this, void 0, void 0, function () {
        var containerName, containerClient, createContainerResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    containerName = "newcontainer".concat(new Date().getTime());
                    containerClient = blobServiceClient.getContainerClient(containerName);
                    return [4 /*yield*/, containerClient.create()];
                case 1:
                    createContainerResponse = _a.sent();
                    console.log("Create container ".concat(containerName, " successfully"), createContainerResponse.requestId);
                    return [2 /*return*/];
            }
        });
    });
}
exports.CreateContainer = CreateContainer;
function ListContainers() {
    return __awaiter(this, void 0, void 0, function () {
        var i, containers, _a, containers_1, containers_1_1, container, e_1_1;
        var _b, e_1, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    i = 1;
                    containers = blobServiceClient.listContainers();
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 6, 7, 12]);
                    _a = true, containers_1 = __asyncValues(containers);
                    _e.label = 2;
                case 2: return [4 /*yield*/, containers_1.next()];
                case 3:
                    if (!(containers_1_1 = _e.sent(), _b = containers_1_1.done, !_b)) return [3 /*break*/, 5];
                    _d = containers_1_1.value;
                    _a = false;
                    container = _d;
                    console.log("Container ".concat(i++, ": ").concat(container.name));
                    _e.label = 4;
                case 4:
                    _a = true;
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _e.trys.push([7, , 10, 11]);
                    if (!(!_a && !_b && (_c = containers_1.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _c.call(containers_1)];
                case 8:
                    _e.sent();
                    _e.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12: return [2 /*return*/];
            }
        });
    });
}
exports.ListContainers = ListContainers;
function CreateBlob(containerClient, content) {
    return __awaiter(this, void 0, void 0, function () {
        var blobName, blockBlobClient, uploadBlobResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    blobName = "test";
                    blockBlobClient = containerClient.getBlockBlobClient(blobName);
                    return [4 /*yield*/, blockBlobClient.upload(content, content.length)];
                case 1:
                    uploadBlobResponse = _a.sent();
                    console.log("Upload block blob ".concat(blobName, " successfully"), uploadBlobResponse.requestId);
                    return [2 /*return*/, blobName];
            }
        });
    });
}
exports.CreateBlob = CreateBlob;
function CreateBlobFromBuffer(containerClient, buffer) {
    return __awaiter(this, void 0, void 0, function () {
        var blockBlobClient;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    blockBlobClient = containerClient.getBlockBlobClient("output.pdf");
                    return [4 /*yield*/, blockBlobClient.uploadData(buffer)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, "output.pdf"];
            }
        });
    });
}
exports.CreateBlobFromBuffer = CreateBlobFromBuffer;
function downloadBlobToFile(blobName, fileNameWithPath) {
    return __awaiter(this, void 0, void 0, function () {
        var containerClient, blobClient, downloadResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    containerClient = blobServiceClient.getContainerClient("newcontainer1710491836524");
                    blobClient = containerClient.getBlobClient(blobName);
                    return [4 /*yield*/, blobClient.downloadToFile(fileNameWithPath)];
                case 1:
                    downloadResult = _a.sent();
                    if (!downloadResult.errorCode) {
                        console.log("download of ".concat(blobName, " success ").concat(downloadResult.blobCommittedBlockCount));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.downloadBlobToFile = downloadBlobToFile;
function deleteBlob(containerClient, blobName) {
    return __awaiter(this, void 0, void 0, function () {
        var blockBlobClient, options, blobDeleteResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    blockBlobClient = containerClient.getBlockBlobClient(blobName);
                    options = {
                        deleteSnapshots: 'include'
                    };
                    return [4 /*yield*/, blockBlobClient.delete(options)];
                case 1:
                    blobDeleteResponse = _a.sent();
                    if (!blobDeleteResponse.errorCode) {
                        console.log("deleted blob ".concat(blobName));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.deleteBlob = deleteBlob;

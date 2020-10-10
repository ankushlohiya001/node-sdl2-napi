var FFI = require('ffi-napi')
var ArrayType = require('ref-array-napi')
var Struct = require('ref-struct-napi')
var Union = require('ref-union-napi');
var ref = require('ref-napi')

var SDL_stdinc_lib = require('./SDL_stdinc')


var voit = exports.voit = ref.types.void
var int32 = exports.int32 = ref.types.int32
var Uint32 = SDL_stdinc_lib.Uint32

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
	SDL_Init: [ int32, [ Uint32, ] ],
	SDL_InitSubSystem: [ int32, [ Uint32, ] ],
	SDL_QuitSubSystem: [ voit, [ Uint32, ] ],
	SDL_WasInit: [ Uint32, [ Uint32, ] ],
	SDL_Quit: [ voit, [ ] ],
}, exports)
self.__uv$config = {
    prefix: '/uv/service/',
    bare: 'https://bareserver-f8jdi4w2p-ethans-projects-8bcedc73.vercel.app/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};

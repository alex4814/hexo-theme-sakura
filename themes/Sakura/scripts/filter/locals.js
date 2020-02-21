'use strict';

hexo.extend.filter.register('template_locals', locals => {
    const { env } = hexo;
    locals.hexo_version = env.version;
    return locals;
});
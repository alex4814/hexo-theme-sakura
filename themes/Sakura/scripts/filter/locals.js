'use strict';

hexo.extend.filter.register('template_locals', locals => {
    const { env } = hexo;
    locals.hexo_version = env.version;
    locals.vendors = {
        dmit: {
            url: 'https://www.dmit.io/',
            logo: '/images/logo/dmit-blue.svg',
        },
        cloudflare: {
            url: 'https://www.cloudflare.com/',
            logo: '/images/logo/cf-logo-v.svg',
        }
    }
    return locals;
});